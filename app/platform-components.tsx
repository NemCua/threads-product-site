import Link from "next/link";

export const tools = [
  {
    slug: "threads/products",
    name: "Threads Video Maker",
    eyebrow: "Video short",
    description: "Biến kịch bản thành video hội thoại có TTS, media và timeline ngay trên máy.",
    status: "Đang có sẵn",
    accent: "violet",
  },
  {
    slug: "fake-mess",
    name: "Fake Messenger",
    eyebrow: "Ảnh hội thoại",
    description: "Dựng giao diện Messenger chi tiết, chỉnh nội dung và xuất ảnh ngay trong trình duyệt.",
    status: "Đang có sẵn",
    accent: "blue",
  },
];

export function PlatformHeader({ active }: { active: "home" | "products" }) {
  return <header className="platform-header"><div className="shell platform-nav">
    <Link href="/home" className="platform-brand" aria-label="ToolVideos Home"><span>TV</span><b>ToolVideos</b></Link>
    <nav aria-label="Điều hướng ToolVideos"><Link className={active === "home" ? "active" : ""} href="/home">Trang chủ</Link><Link className={active === "products" ? "active" : ""} href="/products">Sản phẩm</Link></nav>
    <Link href="/products" className="platform-nav-action">Khám phá tool <span>→</span></Link>
  </div></header>;
}

export function PlatformFooter() {
  return <footer className="platform-footer"><div className="shell platform-footer-inner"><div><Link href="/home" className="platform-brand inverse"><span>TV</span><b>ToolVideos</b></Link><p>Các công cụ sáng tạo nhanh cho video, ảnh và nội dung social.</p></div><div className="platform-footer-links"><Link href="/home">Trang chủ</Link><Link href="/products">Sản phẩm</Link><Link href="/threads/products">Threads Video Maker</Link><Link href="/fake-mess">Fake Messenger</Link></div></div><div className="shell platform-copyright">© 2026 ToolVideos.</div></footer>;
}

export function ToolCard({ tool, featured = false }: { tool: typeof tools[number]; featured?: boolean }) {
  const isReady = tool.status === "Đang có sẵn";
  return <article className={`tool-card ${tool.accent}${featured ? " featured" : ""}`}>
    <div className="tool-card-top"><span>{tool.eyebrow}</span><small className={tool.status === "Đang có sẵn" ? "ready" : "soon"}>{tool.status}</small></div>
    <div className="tool-card-visual" aria-hidden="true">
      <div className="vertical-preview">
        {tool.slug === "threads/products" ? <video muted autoPlay loop playsInline preload="metadata"><source src="/showcase/threads-product-01.mp4" type="video/mp4" /></video> : <img src="/showcase/messenger.png" alt="" />}
      </div>
    </div>
    <div className="tool-card-copy"><h2>{tool.name}</h2><p>{tool.description}</p>{isReady ? <Link href={`/${tool.slug}`} className="tool-card-link">Mở công cụ <span>→</span></Link> : <span className="tool-card-link disabled">Đang hoàn thiện <span>↗</span></span>}</div>
  </article>;
}
