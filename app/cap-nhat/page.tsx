import Link from "next/link";
import { Footer, Header } from "../site-components";

const releases = [
  {
    version: "1.1.5", date: "18.08.2026", latest: true,
    title: "Tạo kịch bản bằng AI và cải thiện trải nghiệm biên tập",
    summary: "Bổ sung quy trình tạo nội dung bằng AI, tối ưu bố cục kịch bản và đóng gói sẵn FFmpeg cho cả macOS lẫn Windows.",
    groups: [
      { name: "AI & kịch bản", items: ["Tạo kịch bản post, comment, reply và Messenger bằng AI.", "Tách nội dung hiển thị và nội dung đọc, hỗ trợ bài nhiều đoạn cùng lựa chọn giọng.", "Bảng giá AI thay đổi theo độ dài và số từ của prompt, được quản lý từ trang admin."] },
      { name: "Trải nghiệm biên tập", items: ["Cải thiện card song song, khả năng focus card từ preview và bố cục khu vực kịch bản.", "Đóng gói sẵn FFmpeg cho cả macOS và Windows, người dùng không cần tự cài đặt."] },
      { name: "Nền tảng", items: ["Phát hành cho Mac Apple Silicon ARM64, Mac Intel x64 và Windows x64.", "Bộ cài chưa được ký chứng thư Apple/Microsoft nên hệ điều hành có thể cảnh báo khi mở lần đầu."] },
    ]
  },
  {
    version: "1.1.4", date: "17.08.2026", latest: false,
    title: "Bản phát hành desktop mới cho macOS và Windows",
    summary: "Cập nhật bộ cài mới nhất cho cả hai nền tảng, tiếp tục hỗ trợ Mac Apple Silicon, Mac Intel và Windows 64-bit.",
    groups: [
      { name: "macOS", items: ["Phát hành bản DMG và ZIP cho Mac Apple Silicon ARM64.", "Phát hành bản DMG và ZIP riêng cho Mac Intel x64."] },
      { name: "Windows", items: ["Cập nhật bộ cài Setup dành cho Windows 10/11 64-bit.", "Cập nhật phiên bản Portable có thể chạy không cần cài đặt."] },
      { name: "Phát hành", items: ["Toàn bộ file phiên bản 1.1.4 được phân phối trực tiếp qua GitHub Releases.", "Giữ riêng source website và bộ cài desktop để tải trang nhanh, ổn định hơn."] },
    ]
  },
  {
    version: "1.1.3", date: "17.08.2026", latest: false,
    title: "Thư viện media trực quan và âm báo Messenger tự động",
    summary: "Đồng bộ bản local với ứng dụng đóng gói, bổ sung toàn bộ tài nguyên mới và hoàn thiện cách chọn media, thời lượng card cùng phản hồi khi xuất video.",
    groups: [
      { name: "Thư viện media", items: ["Thư viện video nền mở trong modal lớn với bố cục 3 cột, 2 hàng và hỗ trợ thêm file của người dùng.", "Thư viện nhạc nền và âm thanh card hiển thị dạng danh sách; nhấn nghe thử đồng thời chọn mục bằng viền xanh.", "Đóng modal sẽ dừng âm thanh đang nghe thử và nút xác nhận luôn dùng đúng mục đã chọn.", "Đóng kèm các background, avatar và audio mới trong bản ứng dụng."] },
      { name: "Messenger", items: ["Thêm tùy chọn tự gắn messenger-tone.mp3 vào toàn bộ tin nhắn nhận.", "Thêm tùy chọn tự gắn sentmessage_1.mp3 vào toàn bộ tin nhắn gửi.", "Âm báo dùng đúng thời lượng file, âm lượng mặc định rõ hơn và hiển thị ngay trong preview kịch bản.", "Khôi phục đầy đủ thư viện âm thanh trong trình tạo tin nhắn nhanh."] },
      { name: "Timeline & xuất video", items: ["Card âm thanh và video mặc định lấy đúng thời lượng thật, kể cả khi đặt song song.", "Bổ sung Reset time cho các card phù hợp để trở về thời lượng gốc.", "Khu vực kịch bản có thanh cuộn và nút xuất hiển thị trạng thái loading.", "Khắc phục tỷ lệ khung hình bị phóng lớn khi xuất trên màn hình Retina."] },
    ]
  },
  {
    version: "1.1.2", date: "16.08.2026", latest: false,
    title: "Bản ổn định cho quy trình tạo và xuất video",
    summary: "Đồng bộ toàn bộ trải nghiệm giữa bản local và ứng dụng đóng gói, tập trung xử lý độ ổn định của media, âm thanh và dữ liệu dự án.",
    groups: [
      { name: "Xuất video", items: ["Giữ âm thanh gốc của video-card khi xuất MP4.", "Video-card chỉ chạy một lượt và không phát lại sau card âm thanh.", "Cho phép chỉnh thời lượng card có TTS: dài hơn thì im lặng, ngắn hơn thì cắt giọng.", "Khôi phục đúng video nền và nhạc nền sau khi nạp dự án JSON."] },
      { name: "Messenger & nội dung", items: ["Thêm hiệu ứng vang cho tin nhắn và tăng độ rõ của giọng đọc.", "Avatar Messenger mặc định chuyển thành asset local, không còn chờ tải từ mạng.", "Khắc phục tình trạng avatar xuất hiện trễ trong những frame đầu.", "Video trong card đứng yên khi chưa tới lượt và phát đúng theo timeline."] },
      { name: "Thư viện & ứng dụng", items: ["Khôi phục thư viện âm thanh và bộ sticker trong bản local/app.", "Đóng kèm FFmpeg, avatar, sticker, âm thanh và media mẫu.", "Tối ưu bản macOS ARM64 cho máy Apple Silicon."] },
    ]
  },
  {
    version: "1.1.1", date: "15.08.2026", latest: false,
    title: "Hoàn thiện nền tảng ứng dụng desktop",
    summary: "Bổ sung luồng đăng nhập, thư viện cục bộ và cơ chế xuất video trực tiếp trên thiết bị.",
    groups: [
      { name: "Điểm mới", items: ["Tích hợp đăng nhập và quản lý phiên sử dụng.", "Thêm thư viện video nền, nhạc nền, âm thanh và sticker.", "Hỗ trợ lưu/nạp dự án JSON để tiếp tục chỉnh sửa."] },
      { name: "Cải thiện", items: ["Đồng bộ giao diện Threads, Messenger, Zalo và TikTok.", "Cải thiện cách đóng gói tài nguyên cho ứng dụng desktop."] },
    ]
  },
  {
    version: "1.0.1", date: "11.08.2026", latest: false,
    title: "Phiên bản thử nghiệm đầu tiên",
    summary: "Đặt nền móng cho công cụ tạo video hội thoại dạng card và quy trình xuất video dọc 9:16.",
    groups: [
      { name: "Nền tảng ban đầu", items: ["Tạo card nội dung theo phong cách Threads.", "Thêm ảnh, video, âm thanh và giọng đọc vào timeline.", "Xuất video MP4 theo bố cục dọc dành cho nội dung short."] },
    ]
  },
];

export default function UpdatesPage(){
  return <main><Header active="updates"/>
    <section className="updates-hero"><div className="shell updates-hero-inner"><div><div className="eyebrow"><span/> Nhật ký phát triển</div><h1>Mỗi phiên bản<br/>đều <em>tốt hơn.</em></h1></div><div><p>Theo dõi tính năng mới, những cải thiện quan trọng và các lỗi đã được khắc phục trong Threads Video Maker.</p><div className="latest-pill"><i/> Phiên bản mới nhất: <b>1.1.5</b></div></div></div></section>
    <section className="shell releases">
      <aside className="release-index"><span className="kicker">Các phiên bản</span>{releases.map(r=><a key={r.version} href={`#v-${r.version.replaceAll(".","-")}`}><b>v{r.version}</b><small>{r.latest?"Mới nhất":r.date}</small></a>)}</aside>
      <div className="release-list">{releases.map((release,index)=><article className={`release ${release.latest?"current":""}`} id={`v-${release.version.replaceAll(".","-")}`} key={release.version}>
        <header className="release-head"><div className="release-version"><span>VERSION</span><strong>{release.version}</strong></div><div className="release-meta"><time>{release.date}</time>{release.latest?<span className="current-badge">Bản hiện tại</span>:<span className="archive-badge">Bản lưu trữ</span>}</div></header>
        <h2>{release.title}</h2><p className="release-summary">{release.summary}</p>
        <div className="change-groups">{release.groups.map(group=><section key={group.name}><h3>{group.name}</h3><ul>{group.items.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></section>)}</div>
        <div className="release-action">{release.latest?<><Link className="button primary" href="/macos">Tải phiên bản mới nhất <span>→</span></Link><small>Chỉ cung cấp bản tải mới nhất để bảo đảm an toàn và ổn định.</small></>:<><span className="old-version-lock">⌁ Phiên bản cũ — không còn cung cấp tải xuống</span><small>Nội dung được giữ lại nhằm tham khảo lịch sử phát triển.</small></>}</div>
        {index<releases.length-1&&<div className="release-connector"/>}
      </article>)}</div>
    </section>
    <section className="update-policy"><div className="shell update-policy-inner"><div><span className="kicker light">Chính sách phiên bản</span><h2>Luôn tải bản mới nhất.</h2></div><p>Các bản cũ chỉ xuất hiện trong nhật ký cập nhật và không có liên kết tải. Điều này giúp người dùng luôn nhận được những bản vá bảo mật, sửa lỗi media và cải thiện xuất video mới nhất.</p></div></section>
    <Footer/>
  </main>
}
