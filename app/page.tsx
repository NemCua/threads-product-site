import Link from "next/link";
import { Footer, Header, ProductPreview } from "./site-components";

const features = [
  { n: "01", title: "Nhiều định dạng hội thoại", text: "Dựng nội dung theo phong cách Threads, TikTok, Messenger và Zalo trong cùng một công cụ." },
  { n: "02", title: "Giọng đọc AI linh hoạt", text: "Tạo TTS theo từng card, đổi giọng, điều chỉnh tốc độ và thêm hiệu ứng vang khi cần nhấn nhá." },
  { n: "03", title: "Timeline dễ kiểm soát", text: "Chỉnh thời lượng, khoảng nghỉ, ảnh, video, sticker và âm thanh trực tiếp theo từng đoạn." },
  { n: "04", title: "Xuất video ngay trên máy", text: "Ghép hình, tiếng, phụ đề và media thành MP4 mà không phải dựng lại từng lớp trong phần mềm khác." },
];

const steps = [
  ["Viết hoặc nạp nội dung", "Tạo kịch bản thủ công, nạp JSON hoặc dùng AI chuẩn bị toàn bộ nội dung trước."],
  ["Chọn phong cách hiển thị", "Kết hợp Threads, Messenger, Zalo, TikTok, ảnh, video và sticker theo đúng mạch kể chuyện."],
  ["Tạo giọng và tinh chỉnh", "Tạo TTS, nghe thử, chỉnh thời lượng card, hiệu ứng vang, nhạc nền và âm thanh điểm nhấn."],
  ["Xuất video hoàn chỉnh", "Bấm xuất để nhận MP4 dọc 9:16 sẵn sàng đăng lên các nền tảng video ngắn."],
];

export default function Home() {
  return <main><Header active="home" />
    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><span /> Công cụ tạo video short trên máy tính</div>
        <h1>Biến một kịch bản thành <em>video hội thoại</em> hoàn chỉnh.</h1>
        <p className="hero-lead">Threads Video Maker giúp bạn tạo video ngắn theo phong cách mạng xã hội — từ nội dung, giọng đọc, ảnh, sticker, âm thanh đến file MP4 cuối cùng — trong một quy trình gọn và dễ chỉnh sửa.</p>
        <div className="hero-actions">
          <Link className="button primary" href="/macos">Tải cho macOS <span>↗</span></Link>
          <Link className="button secondary" href="/windows">Phiên bản Windows</Link>
        </div>
        <div className="hero-notes"><span>✓ Chạy trực tiếp trên máy</span><span>✓ Xuất video dọc 9:16</span><span>✓ Có thư viện media</span></div>
      </div>
      <ProductPreview />
    </section>

    <section className="proof"><div className="shell proof-grid">
      <div><strong>4</strong><span>giao diện nội dung</span></div><div><strong>AI</strong><span>hỗ trợ từ đầu đến cuối</span></div><div><strong>MP4</strong><span>xuất ngay trên thiết bị</span></div><div><strong>9:16</strong><span>chuẩn video short</span></div>
    </div></section>

    <section className="section shell" id="features">
      <div className="section-heading"><div><span className="kicker">Một quy trình, đủ công cụ</span><h2>Tập trung vào câu chuyện.<br/>Phần dựng để công cụ lo.</h2></div><p>Thay vì di chuyển qua nhiều ứng dụng, bạn có thể xây dựng toàn bộ video từ những card nội dung có thời gian, giọng đọc và media riêng.</p></div>
      <div className="feature-grid">{features.map(f=><article className="feature-card" key={f.n}><span className="feature-num">{f.n}</span><div className="feature-icon">{f.n === "01" ? "✦" : f.n === "02" ? "◉" : f.n === "03" ? "⌁" : "↗"}</div><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>
    </section>

    <section className="section workflow"><div className="shell workflow-inner">
      <div className="workflow-intro"><span className="kicker light">Cách hoạt động</span><h2>Từ ý tưởng đến video chỉ trong bốn bước.</h2><p>Mọi thành phần đều được tổ chức theo card, nên bạn luôn biết đoạn nào đang hiển thị, đoạn nào đang phát tiếng và cần chỉnh ở đâu.</p><Link href="/huong-dan" className="text-link">Xem trang hướng dẫn <span>→</span></Link></div>
      <div className="step-list">{steps.map((s,i)=><div className="step" key={s[0]}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div></div>)}</div>
    </div></section>

    <section className="section shell audience">
      <div className="audience-card"><div><span className="kicker">Dành cho người làm nội dung</span><h2>Làm nhanh hơn nhưng vẫn giữ quyền kiểm soát.</h2><p>Phù hợp cho creator, người bán hàng, kênh kể chuyện, nội dung giải trí và bất kỳ ai cần tạo nhiều video short mà không muốn lặp lại các thao tác dựng cơ bản.</p></div><div className="tag-cloud"><span>Content creator</span><span>Video kể chuyện</span><span>Affiliate</span><span>Kênh giải trí</span><span>Social media</span><span>Video bán hàng</span></div></div>
    </section>

    <section className="cta"><div className="shell cta-inner"><div><span className="kicker light">Bắt đầu trải nghiệm</span><h2>Tạo video đầu tiên của bạn ngay hôm nay.</h2></div><div className="cta-actions"><Link className="button white" href="/macos">Tải cho macOS</Link><Link className="button ghost" href="/windows">Xem bản Windows</Link></div></div></section>
    <Footer />
  </main>;
}
