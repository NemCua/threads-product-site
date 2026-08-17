import { Footer, Header } from "../site-components";

const products = [
  {src:"/showcase/threads-product-01.mp4",title:"Video hội thoại short",description:"Một sản phẩm thực tế được xuất trực tiếp từ công cụ, thể hiện bố cục hội thoại, chuyển cảnh, giọng đọc và media trong một video hoàn chỉnh."},
  {src:"/showcase/threads-product-02.mp4",title:"Kịch bản hội thoại hoàn chỉnh",description:"Thành phẩm mới được dựng bằng phiên bản local hiện tại, phù hợp để đánh giá nhịp card, cách trình bày nội dung và trải nghiệm xem trên màn hình dọc."},
  {src:"/showcase/threads-product-03.mp4",title:"Nội dung short từ kịch bản",description:"Ví dụ thực tế về quy trình biến một kịch bản thành video có hình ảnh, âm thanh và giao diện hội thoại mà không cần ghép lại thủ công."},
  {src:"/showcase/threads-product-04.mp4",title:"Video xuất trực tiếp từ ứng dụng",description:"Một thành phẩm khác trong thư viện giới thiệu, giúp người dùng nhìn rõ khả năng tạo nhiều phong cách video từ cùng một bộ công cụ."},
];

export default function ProductsPage(){return <main><Header active="products"/>
  <section className="products-hero"><div className="shell products-hero-grid"><div><div className="eyebrow"><span/> Video được tạo từ sản phẩm</div><h1>Thành phẩm thật.<br/><em>Không chỉ là bản demo.</em></h1><p>Nơi giới thiệu những video đã được tạo bằng Threads Video Maker. Mỗi sản phẩm cho thấy cách nội dung, giao diện hội thoại, giọng đọc và media được kết hợp thành một video short hoàn chỉnh.</p><a className="button primary" href="#video-dau-tien">Xem các sản phẩm ↓</a></div><div className="products-count"><strong>04</strong><span>Sản phẩm đang trưng bày</span><small>Thư viện sẽ tiếp tục được cập nhật</small></div></div></section>

  <section className="shell showcase-section" id="video-dau-tien"><div className="showcase-heading"><div><span className="kicker">Thư viện · Video hoàn chỉnh</span><h2>Các video được dựng trọn vẹn<br/>bằng Threads Video Maker.</h2></div><p>Nhấn phát để xem trực tiếp. Đây là các file thành phẩm thực tế, giúp bạn đánh giá kết quả trước khi tải ứng dụng.</p></div>
    <div className="showcase-list">{products.map((product,index)=><article className="featured-product" key={product.src}><div className="product-video-wrap"><div className="video-topline"><span><i/> SẢN PHẨM THỰC TẾ</span><b>9 : 16</b></div><video controls playsInline preload="metadata" aria-label={`Video sản phẩm ${index+1} được tạo bằng Threads Video Maker`}><source src={product.src} type="video/mp4"/>Trình duyệt của bạn không hỗ trợ phát video MP4.</video></div><div className="product-story"><span className="product-number">{String(index+1).padStart(2,"0")} / VIDEO SHOWCASE</span><h3>{product.title}</h3><p>{product.description}</p><div className="product-facts"><div><small>ĐỊNH DẠNG</small><b>MP4 · Video dọc</b></div><div><small>TẠO BỞI</small><b>Threads Video Maker</b></div><div><small>TRẠNG THÁI</small><b><i/> Có thể xem ngay</b></div></div><a className="button dark" href="/huong-dan">Xem cách tạo video →</a></div></article>)}</div>
  </section>

  <section className="products-coming"><div className="shell"><span className="kicker light">Thư viện sản phẩm</span><h2>Sẽ còn nhiều định dạng<br/>được giới thiệu tại đây.</h2><div className="coming-types"><span>Threads</span><span>Messenger</span><span>Zalo</span><span>TikTok</span><span>Ảnh & sticker</span><span>TTS</span></div></div></section>
  <Footer/></main>}
