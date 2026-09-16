import Link from "next/link";
import type { Metadata } from "next";
import { PlatformFooter, PlatformHeader, ToolCard, tools } from "../platform-components";

export const metadata: Metadata = {
  title: "ToolVideos — Công cụ cho creator",
  description: "Khám phá các công cụ tạo video, ảnh hội thoại và nội dung social của ToolVideos.",
};

export default function ToolVideosHome() {
  return <main className="platform-page"><PlatformHeader active="home" />
    <section className="platform-hero"><div className="shell platform-hero-grid"><div><span className="platform-kicker">ToolVideos Studio</span><h1>Công cụ gọn để<br/><em>ý tưởng chạy nhanh.</em></h1><p>ToolVideos tập hợp những công cụ dành cho creator: tạo video hội thoại, dựng ảnh chat, chuẩn bị nội dung social và những workflow nhỏ nhưng làm được việc thật.</p><div className="platform-hero-actions"><Link className="platform-button primary" href="/products">Xem tất cả sản phẩm <span>→</span></Link><Link className="platform-button secondary" href="/threads/products">Mở Threads Maker</Link></div></div><div className="platform-hero-signal"><span>02</span><div><b>Tools đang phát triển</b><small>Mỗi tool một nhiệm vụ rõ ràng.</small></div><i>✦</i></div></div></section>

    <section className="platform-tools shell"><div className="platform-section-heading"><div><span className="platform-kicker">Bắt đầu từ đây</span><h2>Chọn đúng tool<br/>cho việc bạn cần.</h2></div><Link href="/products" className="platform-text-link">Xem catalog <span>→</span></Link></div><div className="tool-card-grid">{tools.map((tool, index) => <ToolCard tool={tool} featured={index === 0} key={tool.slug} />)}</div></section>

    <section className="platform-workflow"><div className="shell platform-workflow-inner"><div><span className="platform-kicker inverse">Nguyên tắc xây dựng</span><h2>Ít thao tác hơn.<br/>Nhiều đầu ra hơn.</h2></div><div className="platform-principles"><p><b>01</b> Chạy nhanh trên trình duyệt hoặc ngay trên máy của bạn.</p><p><b>02</b> Mỗi tool độc lập, nhưng dùng chung một nơi để tìm và quay lại.</p><p><b>03</b> Ưu tiên đầu ra có thể dùng ngay cho social.</p></div></div></section>
    <PlatformFooter />
  </main>;
}
