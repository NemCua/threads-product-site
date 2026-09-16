# ToolVideos Project Context

## Purpose

ToolVideos is the umbrella website for small creator tools. It currently hosts:

- `/home`: ToolVideos landing page.
- `/products`: ToolVideos product catalog.
- `/threads`: Threads Video Maker product site.
- `/threads/products`: Threads product/showcase page.
- `/threads/macos` and `/threads/windows`: desktop download pages.
- `/fake-mess`: Fake Messenger / Instagram conversation image generator.

The public production domain is `https://toolvideos.pro.vn`.

## Source Of Truth

`threads-product-site` is the production repository and the source of truth for
the hosted ToolVideos website.

Important locations:

| Need | Edit here |
| --- | --- |
| ToolVideos shell, `/home`, `/products` | `app/home`, `app/products`, `app/platform-components.tsx` |
| Threads product pages | `app/threads` and `app/site-components.tsx` |
| Fake Messenger route wrapper | `app/fake-mess/page.tsx` |
| Live Fake Messenger implementation | `public/fake-mess/index.html` |
| Fake Messenger assets | `public/fake-mess/` |
| Product preview assets | `public/showcase/` |
| Static deployment notes/config | `deploy/` |

`/Users/nguyenquochuy/uimessensger` is the original standalone Fake Messenger
repository. Its working file is `messenger-custom copy.html`. It is useful as a
local experiment/sandbox, but production serves
`threads-product-site/public/fake-mess/index.html`.

Until the Fake Messenger code is extracted into shared modules, changes to its
behavior must be copied deliberately to both files above. Do not assume they
sync automatically.

## Fake Messenger Notes

- The app supports Messenger and Instagram through the `app-style` selector.
- Shared conversation/render/export logic lives in the one static HTML file.
- Instagram differs mostly in header, composer, reply layout, reaction side,
  and Olivia footer behavior; do not fork message logic unless necessary.
- Preview watermark is preview-only. Exports must not include it.
- `thumbtack.png` is required by the pinned message banner.
- Current visual reference images in the standalone folder are for comparison;
  do not move or commit them unless the app directly loads them.
- Emoji must use `formatDisplayText` / `setDisplayText` so browser preview and
  exported image use stable wrapping.

## Threads Downloads

Download buttons use local paths under `/downloads`, not GitHub Release URLs.
The active v1.1.13 files are:

```text
Threads.Video.Maker-1.1.13-arm64.dmg
Threads.Video.Maker-1.1.13-x64.dmg
Threads.Video.Maker-Setup-1.1.13-x64.exe
Threads.Video.Maker-Portable-1.1.13-x64.exe
```

They are stored only on the VPS at `/opt/toolvideos/platform/downloads/` and
served by Caddy as `https://toolvideos.pro.vn/downloads/<filename>`.

When releasing a new desktop version:

1. Upload or mirror the new files to the VPS `downloads` directory.
2. Confirm each public URL returns `HTTP 200` and the expected content length.
3. Update the version and filenames in `app/site-components.tsx`.
4. Build, push, and deploy the website.

## Local Development

```bash
cd /Users/nguyenquochuy/threads-product-site
npm run dev
npm run build
```

`next.config.ts` uses `output: "export"`; the deployable static output is
`out/`. A successful `npm run build` is the required pre-deploy check.

## Production Deployment

Caddy serves `/opt/toolvideos/platform` on the VPS. The static website is
deployed from the local `out/` directory.

```bash
cd /Users/nguyenquochuy/threads-product-site
npm run build
rsync -az --delete --exclude '/downloads/' \
  -e 'ssh -o BatchMode=yes -p <VPS_SSH_PORT>' \
  out/ root@<VPS_HOST>:/opt/toolvideos/platform/
```

The `--exclude '/downloads/'` flag is mandatory. Installer files are large and
are not part of the Next build; a bare `rsync --delete` would erase them.

Do not place passwords, SSH private keys, API keys, or other secrets in this
repository. Use existing local SSH credentials/configuration for VPS access.

## Working Rules For Future AI Tasks

1. Start by reading this file and checking `git status` in both repositories.
2. For live Fake Messenger work, edit `public/fake-mess/index.html` first, then
   mirror the scoped change to the standalone sandbox when requested.
3. Preserve unrelated user changes and untracked visual reference assets.
4. Build the platform before deployment. Verify the relevant public route after
   deployment.
5. For download changes, verify the actual download URL, not only the page.
6. Keep product routes under `/threads/...`; ToolVideos navigation remains under
   `/home`, `/products`, and `/fake-mess`.

## Current Status

- Fake Messenger supports Messenger and Instagram styling, pinned messages,
  emoji-safe text rendering, reply grouping, reactions, and image export.
- ToolVideos, Threads pages, Fake Messenger, and static installer downloads are
  live on the VPS.
- Recent production commits:
  - `threads-product-site`: `304c422`
  - `uimessensger`: `7c8a248`
