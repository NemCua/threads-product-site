import type { Metadata } from "next";
import { PlatformFooter, PlatformHeader, ToolCard, tools } from "../platform-components";

export const metadata: Metadata = {
  title: "Sản phẩm — ToolVideos",
  description: "Catalog các công cụ sáng tạo nội dung của ToolVideos.",
};

export default function ProductsCatalog() {
  return <main className="platform-page"><PlatformHeader active="products" />
    <section className="products-index-hero"><div className="shell"><span className="platform-kicker inverse">ToolVideos catalog</span><h1>Một nơi cho những<br/><em>tool làm nội dung.</em></h1><p>Các sản phẩm được tách theo đúng loại đầu ra để bạn vào thẳng việc cần làm, không phải học lại cả một hệ thống.</p></div></section>
    <section className="shell products-index-list"><div className="platform-section-heading"><div><span className="platform-kicker">Danh mục hiện tại</span><h2>Các công cụ<br/>đang có mặt.</h2></div><p>Mỗi route là một sản phẩm độc lập, có thể triển khai và cập nhật riêng trên cùng một domain.</p></div><div className="tool-card-grid catalog">{tools.map(tool => <ToolCard tool={tool} key={tool.slug} />)}</div></section>
    <PlatformFooter />
  </main>;
}
