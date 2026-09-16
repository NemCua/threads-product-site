# VPS deployment

`npm run build` creates the static site in `out/`.

The VPS serves that directory from `/opt/toolvideos/platform` through Caddy.
Set `TOOLVIDEOS_DOMAIN` in the VPS Caddy environment to point the platform at its domain.
