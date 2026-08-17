import { Footer, Header } from "../site-components";

const controlGroups = [
  {
    id:"video-nen", number:"01", title:"Video nền (gameplay)", icon:"▶", tone:"purple",
    intro:"Video nền là lớp hình ảnh chạy xuyên suốt phía sau các card nội dung. Bạn có thể dùng gameplay, cảnh thư giãn, parkour hoặc bất kỳ video dọc/ngang nào phù hợp. Ứng dụng sẽ tự phóng và crop video để phủ kín khung 9:16.",
    purpose:["Tạo chuyển động liên tục để video short không bị trống hoặc nhàm chán.","Làm lớp nền cho nội dung Threads, Messenger, Zalo, TikTok, ảnh và sticker hiển thị phía trên.","Tự lặp khi video nền ngắn hơn tổng thời lượng kịch bản."],
    controls:[
      ["💻 Từ máy","Chọn video đang lưu trên máy của bạn. Nhấn vào vùng “Kéo thả hoặc nhấn để chọn video”, sau đó chọn file video. Bạn cũng có thể kéo file từ Finder và thả trực tiếp vào vùng này."],
      ["📂 Thư viện có sẵn","Mở modal lớn gồm 3 video mỗi hàng và hiển thị 2 hàng trước khi cuộn. Nhấn thumbnail để tạo viền xanh, sau đó bấm “Chọn video này”. Có thể thêm video riêng vào thư viện ngay trong modal."],
      ["＋ Thêm video vào thư viện","Chọn video của bạn và lưu vào thư viện người dùng. Những file này xuất hiện lại ở các lần mở app sau."],
      ["▶ Xem thử trong khung 9:16","Đưa video vừa chọn vào khu vực Xem trước ở giữa màn hình. Nút chỉ sáng sau khi đã chọn một file hoặc một video trong thư viện. Đây là bước áp dụng; chỉ chọn file thôi chưa đủ."],
      ["Xóa video","Gỡ video nền khỏi dự án đang mở, đưa khung xem trước về trạng thái chưa có nền. File gốc trên máy và video trong thư viện không bị xóa."],
    ],
    steps:["Mở mục Video nền bằng cách nhấn vào tiêu đề số 1.","Chọn “Từ máy” hoặc nhấn “Thư viện có sẵn” để mở modal lớn.","Trong modal, nhấn thumbnail để thấy viền xanh rồi bấm “Chọn video này”.","Nếu cần, dùng “＋ Thêm video vào thư viện” để lưu video riêng.","Quan sát khung giữa màn hình; nếu hình bị crop chưa phù hợp, hãy thử một video có chủ thể nằm gần trung tâm."],
    tip:"Video ngang vẫn dùng được, nhưng hai cạnh sẽ bị cắt để lấp đầy khung dọc. Nên chọn video có nội dung chính ở giữa. Video gameplay nền được dùng chủ yếu cho hình ảnh; âm thanh chính nên thiết lập ở mục Âm thanh nền hoặc trong Kịch bản."
  },
  {
    id:"am-thanh-nen", number:"02", title:"Âm thanh nền", icon:"♫", tone:"blue",
    intro:"Âm thanh nền là bài nhạc chạy song song với toàn bộ video. Nó khác với âm thanh trong Kịch bản: nhạc nền tạo không khí chung, còn card âm thanh thường dùng cho hiệu ứng ngắn đúng một thời điểm.",
    purpose:["Giữ nhịp và tạo cảm xúc xuyên suốt video.","Tự lặp nếu bài nhạc ngắn hơn tổng thời lượng.","Trộn cùng TTS và các âm thanh hiệu ứng khi xuất MP4."],
    controls:[
      ["💻 Từ máy","Chọn MP3 hoặc file âm thanh của riêng bạn từ máy. Có thể nhấn vào vùng chọn hoặc kéo thả file vào."],
      ["📂 Thư viện có sẵn","Mở modal danh sách nhạc theo chiều dọc. Bấm ▶ vừa nghe thử vừa chọn ngay dòng đó bằng viền xanh; không cần nhấn dòng thêm lần nữa."],
      ["Chọn âm thanh này","Xác nhận bài đang có viền xanh và áp dụng vào preview. Nếu đóng modal, âm thanh nghe thử dừng ngay."],
      ["＋ Thêm âm thanh vào thư viện","Lưu bài nhạc riêng vào thư viện người dùng để dùng lại ở dự án sau."],
      ["Âm lượng nhạc nền","Thanh trượt từ 0% đến 100%. Mức 0% là tắt tiếng, 100% là âm lượng gốc. Nên bắt đầu khoảng 20–40% nếu video có giọng đọc để nhạc không lấn TTS."],
      ["▶ Áp dụng vào bản xem thử","Gắn bài nhạc đã chọn vào preview. Khi bấm Play tổng, nhạc sẽ chạy cùng video và timeline."],
      ["Xóa nhạc","Bỏ nhạc nền khỏi dự án hiện tại. Thao tác không xóa file thật trên máy hoặc trong thư viện."],
    ],
    steps:["Mở mục Âm thanh nền số 2.","Chọn nguồn Từ máy hoặc mở modal Thư viện có sẵn.","Bấm ▶ ở bài muốn nghe; dòng đó đồng thời được chọn và có viền xanh.","Bấm “Chọn âm thanh này”, đặt âm lượng nền rồi Play để nghe cùng TTS.","Đóng modal nếu không dùng nữa; app sẽ tự dừng phần nghe thử."],
    tip:"Khi nhạc nền được áp dụng, tiếng của video gameplay nền sẽ không được dùng. Video-card trong Kịch bản là loại khác: nếu file video-card có tiếng thì tiếng đó vẫn có thể được ghép cùng TTS và nhạc nền."
  },
  {
    id:"ket-noi-tts", number:"03", title:"Kết nối TTS", icon:"◉", tone:"green",
    intro:"TTS (Text To Speech) là chức năng biến phần chữ bạn soạn thành giọng đọc. Mục này chủ yếu cho biết ứng dụng đã kết nối được dịch vụ giọng đọc hay chưa; người mới không cần nhập địa chỉ máy chủ hoặc cài đặt kỹ thuật.",
    purpose:["Tải danh sách giọng đọc có thể chọn trong từng card.","Tạo file âm thanh từ nội dung đọc của Post, Comment, Reply, Ảnh và Tin nhắn.","Tự kiểm tra và tạo những đoạn giọng còn thiếu trước khi Play hoặc Xuất video."],
    controls:[
      ["Chấm trạng thái","Chấm xanh/khối có dấu hoàn tất nghĩa là kết nối TTS đã sẵn sàng. Nếu ứng dụng vừa mở, hệ thống có thể cần một lúc để đánh thức server."],
      ["Đang kiểm tra kết nối","Trạng thái tạm thời khi app thử liên lạc với dịch vụ. Hãy chờ, không cần bấm liên tục hoặc đóng ứng dụng."],
      ["Kết nối OK","Ứng dụng đã nhận được danh sách giọng. Lúc này bạn có thể vào Kịch bản, thêm card và chọn giọng đọc."],
      ["Không kết nối được","Kiểm tra Internet và thử chờ rồi mở lại ứng dụng. Nếu vẫn lỗi, không nên xuất ngay vì các card chưa có TTS sẽ bị thiếu giọng."],
    ],
    steps:["Sau khi đăng nhập, nhìn mục Kết nối TTS số 3.","Chờ trạng thái hoàn tất trước khi bắt đầu tạo nhiều card.","Sang phần Kịch bản, nhập “Nội dung đọc (TTS)” hoặc để ứng dụng dùng chính nội dung hiển thị.","Chọn giọng và hiệu ứng vang trong card nếu cần.","Khi bấm Play hoặc Xuất MP4, ứng dụng sẽ gom những đoạn chưa có giọng, tạo một lượt và cập nhật thời lượng mặc định theo âm thanh thật."],
    tip:"Nếu card đã có TTS, thời lượng ban đầu bằng đúng độ dài giọng. Bạn vẫn có thể tăng hoặc giảm: dài hơn thì phần dư im lặng; ngắn hơn thì giọng bị cắt ở cuối card."
  },
  {
    id:"lam-mo", number:"•", title:"Làm mờ tên & avatar trong preview", icon:"◌", tone:"gray",
    intro:"Đây là công tắc bảo vệ danh tính trong lúc soạn. Khi bật, tên và avatar trong bản xem trước được làm mờ để bạn tập trung vào bố cục hoặc tránh lộ thông tin khi đang chỉnh.",
    purpose:["Ẩn nhanh danh tính trong preview mà không phải sửa từng card.","Giúp kiểm tra bố cục bằng dữ liệu tạm trước khi hoàn thiện nội dung.","Có thể bật/tắt bất kỳ lúc nào mà không làm mất tên hoặc avatar đã nhập."],
    controls:[["Ô đánh dấu","Có dấu tích là đang làm mờ; bỏ dấu tích để xem tên và avatar thật."],["Ảnh hưởng khi xuất","Trước khi xuất bản chính thức, hãy kiểm tra công tắc và nội dung thật. Nếu muốn hiển thị danh tính rõ ràng, hãy tắt làm mờ rồi xem lại."]],
    steps:["Giữ bật trong giai đoạn soạn nếu chưa muốn kiểm tra danh tính.","Sau khi hoàn thành kịch bản, bỏ dấu tích.","Xem lại toàn bộ video một lần để kiểm tra tên và avatar trước khi xuất."],
    tip:"Công tắc chỉ thay đổi cách hiển thị, không xóa dữ liệu danh tính trong card."
  },
  {
    id:"xuat-video", number:"04", title:"Ghép & xuất video", icon:"↗", tone:"orange",
    intro:"Đây là bước kết hợp video nền, nhạc nền, toàn bộ card, TTS và âm thanh hiệu ứng thành một file MP4 hoàn chỉnh trên máy.",
    purpose:["Tính tổng chi phí/credit dựa trên các loại card trong dự án.","Tạo các đoạn TTS còn thiếu trước khi dựng.","Ghép video 9:16 và lưu file MP4 vào vị trí bạn chọn."],
    controls:[
      ["🎬 Xuất MP4","Bắt đầu quy trình xuất. Ứng dụng sẽ hỏi nơi lưu file, kiểm tra credit và lần lượt dựng từng cảnh."],
      ["Thông tin credit","Hiển thị chi phí dự kiến của video và số dư. Nếu không đủ credit, quá trình sẽ không bắt đầu."],
      ["Loading trên nút xuất","Ngay sau khi bấm, nút đổi thành “Đang xuất video…” kèm vòng xoay để xác nhận thao tác đã được nhận."],
      ["Thanh tiến trình","Cho biết ứng dụng đang chuẩn bị TTS, dựng cảnh hay ghép MP4. Video dài và nhiều media sẽ cần nhiều thời gian hơn."],
      ["Kết quả xuất","Khi hoàn tất, ứng dụng hiển thị đường dẫn và nút mở vị trí file. Nếu có lỗi, thông báo xuất hiện tại khu vực này."],
    ],
    steps:["Chọn và áp dụng video nền.","Bấm Play để xem hết kịch bản ít nhất một lần.","Kiểm tra TTS, âm lượng nhạc, âm thanh video-card và thời lượng từng card.","Mở mục Ghép & xuất video rồi nhấn “Xuất MP4”.","Chọn tên và thư mục lưu; giữ ứng dụng mở cho đến khi báo hoàn tất.","Mở file MP4 mới và kiểm tra lại trước khi đăng."],
    tip:"Nếu hủy hộp thoại lưu file hoặc quá trình chưa thực sự xuất, credit được xử lý theo cơ chế hoàn lại. Không đóng ứng dụng khi thanh tiến trình đang chạy."
  },
  {
    id:"don-cache", number:"05", title:"Dọn cache", icon:"⌫", tone:"red",
    intro:"Cache là dữ liệu tạm được tạo trong lúc làm việc: TTS đã tải, media đã chép vào app và file trung gian. Dọn đúng loại giúp tiết kiệm dung lượng; dọn nhầm có thể làm dự án cũ mất media.",
    purpose:["Xem lượng dữ liệu cục bộ ứng dụng đang giữ.","Thu hồi media tạm không còn cần thiết.","Xóa toàn bộ media cục bộ khi thật sự muốn làm sạch dữ liệu."],
    controls:[
      ["🗑 Dọn media tạm","Thu hồi các URL/media tạm của phiên hiện tại. File gốc bên ngoài ứng dụng không bị xóa, nhưng preview đang dùng URL tạm có thể mất."],
      ["🧹 Xóa toàn bộ media cục bộ","Xóa TTS, ảnh, audio và video đã được chép vào vùng dữ liệu của app. Đây là thao tác mạnh; dự án JSON cũ có thể không tìm thấy media sau đó."],
      ["Dung lượng dữ liệu","Cho biết số file và tổng dung lượng media cục bộ để bạn cân nhắc trước khi xóa."],
    ],
    steps:["Chỉ mở mục này khi cần giải phóng dung lượng hoặc xử lý media lỗi.","Lưu dự án JSON và xuất video đang làm dở trước.","Ưu tiên “Dọn media tạm” trước.","Chỉ dùng “Xóa toàn bộ media cục bộ” khi chắc chắn không cần các dự án/media cũ.","Sau khi dọn, mở lại dự án và kiểm tra các card ảnh, video, audio."],
    tip:"Dự án JSON lưu cấu trúc và đường dẫn, không nhúng toàn bộ file media vào trong JSON. Vì vậy JSON không thể khôi phục file đã bị xóa khỏi máy."
  }
];

const previewGroups = [
  {
    id:"khung-9-16", number:"01", title:"Khung video 9:16", icon:"▯", tone:"purple",
    intro:"Khung lớn ở giữa màn hình là nơi mô phỏng video dọc thành phẩm. Video nền, card nội dung, ảnh, sticker và chuyển động đều được hiển thị tại đây để bạn kiểm tra bố cục trước khi xuất MP4.",
    purpose:["Cho biết video sẽ được bố trí thế nào trên màn hình điện thoại.","Hiển thị video nền và các card tại đúng thời điểm của chúng.","Giúp phát hiện nội dung bị che, bị tràn hoặc ảnh/sticker đặt chưa đẹp."],
    controls:[
      ["Nhãn 9 : 16","Cho biết tỷ lệ video short dọc dùng phổ biến cho TikTok, Reels và Shorts. Đây là nhãn thông tin, không phải nút bấm."],
      ["“Chưa có video nền”","Khung chưa nhận video nền. Hãy chọn video ở cột Chức năng rồi nhấn “Xem thử trong khung 9:16”. Bạn vẫn có thể soạn card, nhưng nên thêm nền để đánh giá đúng bố cục."],
      ["Video nền trong khung","Video được phóng và crop để lấp đầy khung. Khi Play tổng, video chạy theo timeline và tự quay vòng nếu ngắn hơn kịch bản."],
      ["Tên file · độ phân giải · thời lượng","Dòng nhỏ dưới khung xuất hiện sau khi video nền tải xong, ví dụ tên.mp4 và 1920×1080 · 30.0s. Dùng nó để xác nhận app đã nhận đúng file."],
    ],
    steps:["Chọn video nền ở cột trái.","Nhấn “Xem thử trong khung 9:16”.","Đợi tên file, độ phân giải và thời lượng xuất hiện dưới khung.","Quan sát xem chủ thể có bị crop ở hai cạnh hay không.","Nếu crop không phù hợp, đổi video khác có chủ thể gần giữa khung."],
    tip:"Khung xem trước là bản mô phỏng trong màn hình soạn. Hãy luôn mở file MP4 sau khi xuất để kiểm tra lần cuối, nhất là dự án có nhiều video và âm thanh chồng nhau."
  },
  {
    id:"noi-dung-trong-khung", number:"02", title:"Nội dung hiển thị trong khung", icon:"◫", tone:"blue",
    intro:"Khi kịch bản có card, khung sẽ vẽ đúng kiểu Threads, TikTok hoặc Messenger lên trên video nền. Card mới có thể nối tiếp, cộng dồn hoặc xóa nội dung cũ tùy thiết lập của từng card.",
    purpose:["Xem card nào đang xuất hiện tại từng thời điểm.","Kiểm tra thứ tự hội thoại và cách nội dung cũ được giữ lại hoặc xóa đi.","Theo dõi ảnh, sticker, video-card và các lớp nội dung đi kèm."],
    controls:[
      ["Card đang chạy","Khi Play tới một card, card tương ứng trong cột Kịch bản được đánh dấu. Nhờ vậy bạn biết nội dung trong khung đến từ card nào."],
      ["Card cộng dồn","Nếu card không bật “Xóa nội dung cũ”, nội dung trước có thể được giữ lại để tạo chuỗi bài viết hoặc hội thoại liên tục."],
      ["Card xóa nội dung cũ","Khi tùy chọn này được bật, nội dung trước được dọn trước khi card mới xuất hiện. Tùy chọn nằm ở Kịch bản, còn kết quả được nhìn thấy trong khung."],
      ["Ảnh và sticker","Được đặt thành lớp nổi phía trên nền. Khi không phát, bạn có thể chọn đúng card để chỉnh vị trí và kích thước trực tiếp trên khung."],
      ["Video dạng ảnh","Ở trạng thái chỉnh sửa, video-card mặc định đứng yên. Khi Play tổng đến đúng thời điểm, video chạy theo timeline; âm thanh gốc cũng được phát nếu file có tiếng."],
    ],
    steps:["Thêm ít nhất hai card vào Kịch bản.","Nhấn phần đầu một card để nhảy preview tới thời điểm card đó.","So sánh khung với card đang được đánh dấu.","Bật hoặc tắt “Xóa nội dung cũ” rồi xem lại kết quả.","Nếu có video-card, dùng Play tổng để kiểm tra cả hình lẫn tiếng đúng thời điểm."],
    tip:"Nút “Phát video” trên card dùng để xem riêng video-card đúng một lượt; nút Play dưới khung mới là cách kiểm tra toàn bộ kịch bản theo thời gian."
  },
  {
    id:"play-tam-dung", number:"03", title:"Play và Tạm dừng", icon:"▶", tone:"green",
    intro:"Nút Play dưới khung phát toàn bộ dự án theo đúng thứ tự: video nền, nhạc nền, card, TTS, âm thanh hiệu ứng và tiếng video-card. Đây là nút quan trọng nhất để kiểm tra trước khi xuất.",
    purpose:["Phát đồng bộ mọi thành phần từ vị trí hiện tại của timeline.","Tự kiểm tra và tạo các đoạn TTS còn thiếu trước khi phát.","Cho phép dừng tại một thời điểm để quan sát bố cục hoặc sửa card."],
    controls:[
      ["▶ Play","Bắt đầu phát từ vị trí hiện tại. Nếu timeline đang ở cuối, app tự quay về đầu rồi mới phát."],
      ["Đang chuẩn bị để phát","Màn hình chờ xuất hiện khi app kiểm tra kết nối và tạo TTS còn thiếu. Hãy đợi hoàn tất, không cần bấm Play nhiều lần."],
      ["⏸ Tạm dừng","Xuất hiện thay cho Play khi dự án đang chạy. Bấm để dừng video nền, nhạc nền, TTS, âm thanh hiệu ứng và video-card tại vị trí hiện tại."],
      ["Tự dừng ở cuối","Khi hết tổng thời lượng, app tự dừng và đưa nút về Play. Lần bấm tiếp theo sẽ phát lại từ đầu."],
    ],
    steps:["Kiểm tra TTS đã kết nối và dự án có ít nhất một card.","Đưa timeline về đầu nếu muốn xem toàn bộ.","Nhấn Play một lần và chờ bước chuẩn bị TTS.","Nghe đồng thời giọng đọc, nhạc nền, âm thanh hiệu ứng và tiếng video-card.","Nhấn Tạm dừng ngay khi thấy lỗi để ghi nhớ vị trí cần sửa."],
    tip:"Nếu app báo chưa có step, bạn cần tạo card trong Kịch bản trước. Nếu chuẩn bị TTS chờ lâu, hãy kiểm tra trạng thái Kết nối TTS thay vì bấm Play liên tục."
  },
  {
    id:"tua-va-phat-lai", number:"04", title:"Tua thời gian và phát lại", icon:"↻", tone:"orange",
    intro:"Thanh ngang dưới khung là timeline của toàn bộ dự án. Bạn có thể kéo tới một đoạn cụ thể để kiểm tra nhanh mà không cần chờ video chạy từ đầu mỗi lần.",
    purpose:["Nhảy nhanh tới mốc thời gian hoặc card cần kiểm tra.","Phát lại toàn bộ dự án từ giây 0 bằng một nút.","Cho biết thời gian hiện tại và tổng thời lượng video."],
    controls:[
      ["Thanh timeline màu tím","Kéo nút tròn sang trái hoặc phải để tua. Khi đang phát, dự án chạy tiếp từ vị trí mới; khi đang dừng, khung chỉ cập nhật hình tại mốc vừa chọn."],
      ["↻ Xem lại từ đầu","Dừng phiên hiện tại, đưa timeline về 0 giây rồi phát lại ngay. Dùng sau khi sửa nhiều card và muốn kiểm tra toàn bộ."],
      ["0.0s / 0.0s","Số bên trái là vị trí hiện tại; số bên phải là tổng thời lượng. Tổng thay đổi khi thêm, xóa hoặc chỉnh thời lượng card."],
      ["Nhãn credit","Hiển thị credit dự kiến của kịch bản hiện tại. Đây là thông tin tham khảo trước khi xuất, không phải thời lượng hay nút thanh toán."],
    ],
    steps:["Nhìn tổng thời lượng ở bên phải dấu “/”.","Kéo timeline tới gần đoạn muốn kiểm tra.","Quan sát khung và card được đánh dấu.","Nhấn Play để nghe từ đúng mốc đó.","Sau khi sửa xong, nhấn ↻ để xem trọn vẹn từ đầu."],
    tip:"Để kiểm tra chuyển cảnh chính xác, hãy kéo tới trước điểm chuyển một chút rồi nhấn Play. TTS và các âm thanh sẽ được đồng bộ lại theo mốc mới."
  },
  {
    id:"chinh-anh-sticker", number:"05", title:"Chỉnh ảnh và sticker trên preview", icon:"✣", tone:"gray",
    intro:"Khung xem trước không chỉ để xem. Với card Ảnh và Sticker, bạn có thể chọn card rồi kéo lớp hình tới vị trí mong muốn; các tay nắm ở bốn góc dùng để phóng to hoặc thu nhỏ.",
    purpose:["Đặt ảnh/sticker trực quan thay vì đoán thông số.","Căn nhanh theo các đường hướng dẫn 25%, 50% và 75% của khung.","Kiểm tra lớp hình không che chữ, avatar hoặc nội dung quan trọng."],
    controls:[
      ["Chọn card ảnh/sticker","Nhấn phần đầu card trong Kịch bản. Card được viền tím và lớp tương ứng trong khung trở thành đối tượng đang chỉnh."],
      ["Kéo trực tiếp","Giữ chuột hoặc ngón tay trên ảnh/sticker rồi kéo. Các đường căn sẽ hiện ra; khi đến gần, đối tượng được hút nhẹ vào đường để dễ căn giữa."],
      ["Bốn tay nắm ở góc","Kéo một tay nắm để tăng hoặc giảm kích thước. Thao tác chỉ hoạt động khi không Play."],
      ["Dừng trước khi chỉnh","Trong lúc dự án đang phát, kéo và đổi kích thước bị khóa. Hãy bấm Tạm dừng trước."],
    ],
    steps:["Bấm Tạm dừng nếu preview đang chạy.","Nhấn card Ảnh hoặc Sticker cần chỉnh.","Xác nhận card có viền chọn và lớp hình hiện trong khung.","Kéo lớp hình tới vị trí phù hợp; dùng đường giữa để căn nếu cần.","Kéo một trong bốn góc để chỉnh kích thước, sau đó Play lại để kiểm tra."],
    tip:"Sau khi kéo hoặc đổi kích thước, hãy xem lại cả đoạn trước và sau card để chắc lớp hình không che nội dung khác."
  }
];

const scriptGroups = [
  {
    id:"tong-quan-kich-ban", number:"01", title:"Kịch bản và thanh thêm card", icon:"＋", tone:"purple",
    intro:"Kịch bản là cột bên phải, nơi quyết định video sẽ hiện gì, đọc gì và phát âm thanh nào theo từng đoạn. Mỗi khối trong danh sách gọi là một step hoặc card; thứ tự từ trên xuống dưới cũng là thứ tự phát mặc định.",
    purpose:["Tạo và sắp xếp toàn bộ cảnh của video.","Chọn đúng loại card theo nội dung cần hiển thị hoặc phát tiếng.","Lưu và nạp lại toàn bộ dự án bằng JSON."],
    controls:[["＋ Post","Tạo bài đăng chính kiểu Threads."],["＋ Comment","Tạo bình luận độc lập; chọn giao diện Threads hoặc TikTok."],["＋ Reply","Tạo câu trả lời độc lập, hiển thị thụt vào so với Comment."],["＋ Ảnh","Thêm ảnh, GIF hoặc video phủ lên khung; có thể kèm TTS."],["＋ Âm thanh","Thêm hiệu ứng tiếng. Card mới mặc định chạy tuần tự."],["＋ Tin nhắn","Mở trình soạn cả đoạn chat Messenger và tạo Box tin nhắn."],["＋ Sticker","Mở thư viện các bộ sticker để chọn nhanh."],["⭳ Xuất JSON","Lưu cấu trúc kịch bản, thiết lập và đường dẫn media để mở lại sau."],["⭱ Nạp JSON","Mở dự án JSON đã lưu. Media từ máy khác hoặc đã bị di chuyển có thể phải chọn lại."]],
    steps:["Chọn loại card phù hợp trên thanh ＋.","Điền nội dung trong cửa sổ vừa mở.","Nhấn “Thêm vào kịch bản”.","Kiểm tra card mới ở cuối danh sách và trong preview.","Lặp lại cho đến khi đủ câu chuyện, rồi xuất JSON để lưu dự án."],
    tip:"Đừng dùng một loại card cho mọi thứ. Card chữ, ảnh, sticker và âm thanh có cách hiển thị, thời lượng và khả năng chạy song song khác nhau."
  },
  {
    id:"cau-tao-card", number:"02", title:"Cấu tạo và các nút chung của card", icon:"▤", tone:"blue",
    intro:"Sau khi tạo, mỗi card có phần đầu, mô tả, mốc thời gian và cụm điều khiển. Một số nút chỉ xuất hiện với đúng loại card nên bạn cần nhìn nhãn loại trước khi chỉnh.",
    purpose:["Nhận biết card đang đứng ở đâu trên timeline.","Chỉnh thời lượng, khoảng nghỉ và cách giữ nội dung cũ.","Sửa, xóa, di chuyển hoặc nhảy preview tới card."],
    controls:[["Số thứ tự","Vị trí của card trong danh sách. Thứ tự thay đổi khi kéo card."],["Nhãn loại","POST, COMMENT, REPLY, ẢNH, STICKER, ÂM THANH hoặc TIN NHẮN; biểu tượng 🧵/🎵 phân biệt Threads và TikTok."],["Mốc bắt đầu → kết thúc","Thời điểm card sống trên timeline, được tính lại tự động khi thứ tự hoặc thời lượng thay đổi."],["Nhấn đầu card","Đưa preview tới thời điểm card đang hiển thị; card tương ứng được chọn hoặc đánh dấu."],["Thời lượng","Số giây card tồn tại. Audio/video/TTS mặc định lấy đúng thời lượng media thật nhưng vẫn cho phép sửa tay."],["⟲ Reset time","Đưa card về đúng thời lượng âm thanh, video hoặc TTS gốc. Không xuất hiện với ảnh tĩnh và sticker."],["Gap sau","Khoảng nghỉ sau khi card kết thúc trước card chính tiếp theo."],["Xóa nội dung cũ","Bật để dọn lớp nội dung trước khi card này hiện; Ảnh và Sticker mới mặc định bật."],["✎","Mở lại cửa sổ của đúng loại card để sửa."],["🗑","Xóa card khỏi kịch bản; timeline và credit được tính lại."],["Cuộn danh sách","Kịch bản có vùng cuộn riêng; kéo thanh cuộn để làm việc với dự án dài mà không mất thanh thêm card."],["Kéo thả card","Đổi thứ tự phát. Vị trí chèn được biểu diễn trực tiếp khi đang kéo."]],
    steps:["Nhìn nhãn loại để chắc đang chỉnh đúng card.","Nhấn phần đầu card để xem nó trong preview.","Chỉnh Thời lượng và Gap sau theo nhịp mong muốn.","Kiểm tra “Xóa nội dung cũ”.","Dùng ✎ để sửa sâu hoặc kéo card để đổi thứ tự."],
    tip:"Gap sau không làm card tồn tại lâu hơn; đó là khoảng trống sau card. Muốn hình hoặc nội dung ở lại lâu hơn, hãy tăng Thời lượng."
  },
  {
    id:"card-post", number:"03", title:"Card Post", icon:"P", tone:"green",
    intro:"Post là bài đăng chính kiểu Threads, thường dùng để mở đầu một chủ đề. App tự tạo tên, avatar và thời gian đăng cố định cho card mới để bạn không phải nhập thủ công.",
    purpose:["Hiển thị nội dung bài đăng chính.","Tạo giọng đọc riêng với nội dung có thể khác chữ hiển thị.","Gắn ảnh và các chỉ số tương tác vào bài."],
    controls:[["Nội dung","Chữ người xem nhìn thấy trên card."],["Nội dung đọc (TTS)","Mặc định đồng bộ theo Nội dung. Có thể sửa riêng để bỏ emoji, hashtag hoặc viết lại câu đọc tự nhiên hơn."],["Hiệu ứng vang","Tạo tiếng vang cho toàn bộ câu TTS của card nhằm nhấn nhá."],["Giọng đọc","Chọn giọng và có thể nghe mẫu trước."],["Ảnh đính kèm","Thêm ảnh vào thân Post từ máy hoặc URL tùy giao diện đang dùng."],["Chỉ số tương tác","Điền lượt thích, bình luận, đăng lại và chia sẻ để card giống bài thật hơn."],["Hủy / Thêm vào kịch bản","Hủy không lưu; Thêm vào kịch bản tạo card và để TTS được tạo lúc Play." ]],
    steps:["Nhấn ＋ Post.","Nhập Nội dung hiển thị.","Giữ nguyên hoặc sửa Nội dung đọc TTS.","Chọn giọng, vang, ảnh và chỉ số nếu cần.","Nhấn Thêm vào kịch bản rồi Play để tạo và nghe TTS."],
    tip:"Nếu Nội dung để trống, card vẫn có thể được tạo nhưng không gọi TTS. Tên/avatar ngẫu nhiên được giữ nguyên khi bạn sửa card sau này."
  },
  {
    id:"card-comment-reply", number:"04", title:"Card Comment và Reply", icon:"C", tone:"orange",
    intro:"Comment và Reply đều là một khối bình luận độc lập. Reply không nằm bên trong Comment về mặt dữ liệu; nó là card riêng và được trình bày thụt vào để thể hiện câu trả lời.",
    purpose:["Tạo chuỗi bình luận cho Threads hoặc TikTok.","Đánh dấu bình luận của chính tác giả bài gốc.","Điều khiển TTS, ảnh và tương tác cho từng bình luận riêng."],
    controls:[["🧵 Threads / 🎵 TikTok","Chọn nền tảng khi tạo card mới. Khi sửa card đã có, nền tảng được giữ nguyên."],["Là tác giả bài gốc","Threads hiện badge “Tác giả”; TikTok hiện “· Nhà sáng tạo”."],["Nội dung, TTS, vang và giọng","Hoạt động giống Post nhưng áp dụng riêng cho bình luận này."],["Ảnh đính kèm","Gắn ảnh vào nội dung Comment hoặc Reply."],["Thêm reply – TikTok","Chỉ tạo dòng “Xem N câu trả lời” dưới Comment, không tự sinh card Reply."],["Reply thật","Muốn hiện nội dung câu trả lời, phải bấm ＋ Reply và tạo một card riêng." ]],
    steps:["Chọn ＋ Comment hoặc ＋ Reply.","Chọn Threads hoặc TikTok trước.","Bật “Là tác giả” nếu người gửi là chủ bài.","Nhập nội dung, TTS, giọng, ảnh và số tương tác.","Với TikTok Comment, thêm số reply nếu chỉ muốn hiện dòng thống kê.","Tạo card Reply riêng nếu muốn người xem đọc được câu trả lời."],
    tip:"“Thêm reply” trong TikTok Comment chỉ là con số hiển thị. Nó không thay thế nút ＋ Reply và không tạo thêm lời thoại."
  },
  {
    id:"card-anh-video", number:"05", title:"Card Ảnh, GIF và video", icon:"▣", tone:"purple",
    intro:"Card Ảnh là lớp hình phủ lên preview. Nguồn media có thể là ảnh tĩnh, GIF hoặc video; ngoài hình ảnh, card này còn có thể chứa một câu TTS phát đúng lúc lớp hình xuất hiện.",
    purpose:["Chèn meme, ảnh minh họa, GIF hoặc đoạn video vào câu chuyện.","Đọc một câu TTS đồng thời với hình.","Kéo và đổi kích thước trực tiếp trong preview."],
    controls:[["Ảnh từ URL","Dán liên kết ảnh tĩnh từ mạng; không dùng ô này cho video."],["Từ máy / thư viện","Kéo thả file hoặc chọn media có sẵn."],["Cắt nhiều vùng","Cắt nhiều phần từ cùng một ảnh gốc để tạo nhanh nhiều card ảnh."],["Nội dung đọc TTS","Câu được đọc khi ảnh hiện; có giọng và hiệu ứng vang riêng."],["▶ Phát video","Chỉ xuất hiện nếu media là video. Phát đúng một lượt để xem riêng khi đang chỉnh."],["Kéo trực tiếp trong preview","Chọn card, kéo lớp hình và dùng bốn góc để đổi kích thước."],["Thời lượng","Ảnh tĩnh dùng mặc định; GIF/video lấy độ dài thật khi có thể; nếu có TTS, thời lượng có thể được cập nhật theo giọng." ]],
    steps:["Nhấn ＋ Ảnh.","Chọn một nguồn: URL, file máy hoặc thư viện.","Nhập câu TTS nếu muốn có giọng đọc cùng hình.","Thêm card rồi nhấn đầu card để chọn.","Kéo/đổi kích thước trong preview và chỉnh Thời lượng.","Nếu là video, Play tổng để kiểm tra cả tiếng gốc đúng timeline."],
    tip:"Ảnh và video-card khác video nền. Video nền chạy xuyên dự án; video-card chỉ sống trong thời lượng của card và không được tự lặp vô hạn sau khi card kết thúc."
  },
  {
    id:"card-sticker", number:"06", title:"Card Sticker", icon:"★", tone:"gray",
    intro:"Sticker là lớp trang trí nổi được chọn từ các bộ sticker có sẵn. Nó nhẹ và đơn giản hơn card Ảnh: không có nội dung TTS riêng trong cửa sổ chọn sticker.",
    purpose:["Thêm biểu cảm hoặc điểm nhấn hình ảnh.","Chọn nhanh theo từng bộ sticker.","Giữ sticker tuần tự hoặc ghép song song với card chữ."],
    controls:[["Bộ sticker","Chọn nhóm sticker trước, sau đó chọn một hình bên trong."],["＋ Sticker","Mở thư viện bộ sticker; card được tạo ngay từ sticker đã chọn."],["✎ trên card","Đổi file sticker hiện tại; muốn duyệt lại bộ sticker, dùng ＋ Sticker."],["Kéo và đổi kích thước","Chọn card rồi thao tác trực tiếp trên preview như card Ảnh."],["Xóa nội dung cũ","Mặc định bật ở sticker mới; bỏ chọn nếu muốn sticker phủ trên card trước." ]],
    steps:["Nhấn ＋ Sticker.","Chọn một bộ sticker.","Chọn sticker muốn dùng.","Nhấn card mới và đặt vị trí trong preview.","Bỏ “Xóa nội dung cũ” nếu muốn giữ nội dung phía dưới."],
    tip:"Sticker không có TTS riêng. Nếu cần tiếng đi cùng sticker, tạo card Âm thanh rồi kéo nó lên Sticker để chạy song song."
  },
  {
    id:"card-am-thanh", number:"07", title:"Card Âm thanh tuần tự", icon:"♫", tone:"red",
    intro:"Card Âm thanh dùng cho meme sound hoặc hiệu ứng tiếng, không tạo hình trên preview. Khi vừa thêm, nó luôn là một card tuần tự và chiếm một đoạn riêng trên timeline.",
    purpose:["Chèn hiệu ứng tiếng giữa các cảnh.","Dùng file từ máy hoặc thư viện âm thanh có sẵn.","Cho phép nghe thử trước khi chọn."],
    controls:[["File âm thanh","Chọn hoặc kéo thả MP3/WAV và các định dạng được app hỗ trợ."],["Thư viện","Mở danh sách âm thanh có sẵn. Bấm ▶ vừa nghe thử vừa chọn dòng đó bằng viền xanh, tránh tạo card âm thanh rỗng."],["Thời lượng","Mặc định luôn lấy độ dài thật của file. Có thể rút ngắn để cắt tiếng hoặc kéo dài để thêm khoảng im lặng."],["⟲ Reset time","Khôi phục đúng độ dài file sau khi đã chỉnh tay."],["Không có Xóa nội dung cũ đáng kể","Card chỉ phát tiếng, không tự tạo lớp hình mới."],["Vị trí tuần tự","Card nằm một hàng riêng; nội dung tiếp theo chỉ bắt đầu sau khi audio và Gap sau kết thúc." ]],
    steps:["Nhấn ＋ Âm thanh.","Chọn file hoặc nghe thử trong thư viện.","Thêm card vào kịch bản.","Giữ ở hàng riêng nếu muốn âm thanh chiếm một đoạn độc lập.","Play từ trước card để kiểm tra điểm bắt đầu và kết thúc."],
    tip:"Nhạc chạy xuyên suốt video nên đặt ở Âm thanh nền. Card Âm thanh chỉ dành cho một hiệu ứng tại một thời điểm cụ thể."
  },
  {
    id:"card-song-song", number:"08", title:"Card chạy song song", icon:"⏱", tone:"green",
    intro:"Song song nghĩa là media phát cùng lúc với một card chính thay vì chiếm đoạn riêng. Audio, Ảnh hoặc Sticker có thể ghép vào card chữ/Tin nhắn; Audio còn có thể ghép vào Ảnh hoặc Sticker.",
    purpose:["Cho tiếng hiệu ứng chạy cùng lời thoại hoặc tin nhắn.","Cho ảnh/sticker xuất hiện đồng thời với card chữ.","Giữ card chính và media đi kèm thành một hàng trực quan."],
    controls:[["Cách tạo","Tạo media như card tuần tự trước, sau đó kéo card media và thả trực tiếp lên card đích."],["Nhãn ⏱","Cho biết card đang chạy song song."],["Hai card cùng một hàng","Card chính ở bên trái, media song song ở bên cạnh và bắt đầu cùng thời điểm."],["Thời lượng audio song song","Audio vẫn giữ đúng độ dài file gốc, không bị ép bằng thời lượng card đích. Bạn có thể sửa tay hoặc dùng Reset time."],["Thời lượng ảnh/sticker song song","Ảnh và Sticker bám thời lượng card đích và bị khóa ô thời lượng."],["↳ Tách","Tách media khỏi card đích và đưa nó trở lại dạng tuần tự."],["⠿⠿ Kéo cả cặp","Di chuyển card chính cùng toàn bộ media song song mà không phá quan hệ."],["Kéo riêng media ra ngoài","Tách quan hệ song song và đặt media ở vị trí mới." ]],
    steps:["Tạo card chính và media cần đi kèm.","Giữ card Audio/Ảnh/Sticker rồi kéo lên card chính.","Thả khi card đích được báo nhận.","Kiểm tra hai card nằm cùng một hàng và media có nhãn ⏱.","Play từ trước hàng đó để kiểm tra đồng bộ.","Dùng ↳ Tách nếu muốn media trở lại tuần tự."],
    tip:"Không thể ghép một media song song lên một media song song khác. Ảnh/Sticker độc lập chỉ nhận Audio; không chồng thêm Ảnh/Sticker thứ hai theo cách này."
  },
  {
    id:"card-messenger", number:"09", title:"Tin nhắn và Box Messenger", icon:"M", tone:"blue",
    intro:"Tin nhắn có trình soạn riêng để tạo cả cuộc hội thoại. Khi lưu, các tin được nhóm vào một Box Messenger; Box có thể chứa tin nhắn, ảnh và audio song song nhưng vẫn phát theo thứ tự bên trong.",
    purpose:["Soạn nhiều tin bên Đối phương và Tôi trong một lần.","Đặt giọng mặc định riêng cho hai phía.","Quản lý cả hội thoại như một nhóm trong kịch bản."],
    controls:[["Nạp file / Dán mã JSON","Nhập nhanh danh sách tin nhắn có cấu trúc."],["Giọng Đối phương / Tôi","Hai giọng mặc định riêng cho người gửi; tốc độ đọc áp dụng toàn hội thoại."],["Ô Đối phương / Tôi","Nhập tin bên trái hoặc bên phải; nút ảnh cho phép tải ảnh, dán URL hoặc chọn sticker."],["Nội dung đọc TTS và vang","Sửa riêng câu đọc cho tin đang soạn và bật tiếng vang nếu cần."],["＋ Thêm tin nhắn","Đưa tin đang nhập vào danh sách nháp; chưa đóng modal."],["Messenger / Zalo","Chọn kiểu giao diện ở góc preview; cùng dữ liệu hội thoại nhưng cách trình bày khác nhau."],["Âm thanh nhận tất cả tin","Tick để tự thêm messenger-tone.mp3 song song vào mọi tin của Đối phương."],["Âm thanh gửi tất cả tin","Tick để tự thêm sentmessage_1.mp3 song song vào mọi tin của Tôi. Hai tiếng mặc định được tăng âm lượng để rõ hơn."],["Hiện ô nhập tin nhắn","Bật phần composer ở cuối khung chat nếu muốn bản xuất giống màn hình ứng dụng đầy đủ."],["Avatar và tên trong preview","Nhấn avatar hoặc sửa tên trực tiếp trong preview đoạn chat để thay thông tin người đối thoại."],["Thêm âm thanh cho tin","Mở modal nhanh; bấm nghe thử cũng chọn dòng bằng viền xanh, sau đó thêm audio song song đúng tin đang chọn."],["Tạo kịch bản Messenger","Lưu toàn bộ danh sách nháp thành các step và nhóm chúng vào một Box."],["Xem hội thoại","Mở lại toàn bộ hội thoại trong Box để sửa."],["Bỏ nhóm","Tháo Box nhưng giữ các card con độc lập."],["Xóa cả nhóm","Xóa toàn bộ card trong Box sau khi xác nhận."],["Di chuyển toàn bộ nội dung trong Box","Các nút hướng và xoay áp dụng đồng loạt lên tất cả tin trong Box." ]],
    steps:["Nhấn ＋ Tin nhắn.","Chọn giọng cho Đối phương và Tôi.","Nhập một tin ở đúng phía, thêm ảnh/sticker nếu cần.","Sửa TTS hoặc bật vang rồi nhấn ＋ Thêm tin nhắn.","Lặp lại cho các tin tiếp theo và quan sát preview hội thoại.","Lưu để tạo Box; sau đó dùng điều khiển Box hoặc kéo cả Box để sắp xếp."],
    tip:"Nút ＋ Thêm tin nhắn chỉ thêm tin vào bản nháp trong cửa sổ. Hãy hoàn tất/lưu cả cuộc trò chuyện thì Box mới được cập nhật vào kịch bản chính."
  },
  {
    id:"sap-xep-va-luu", number:"10", title:"Sắp xếp, kiểm tra và lưu dự án", icon:"⠿", tone:"orange",
    intro:"Kịch bản phức tạp nên được kiểm tra theo từng cụm. App hỗ trợ kéo card, kéo cả cặp song song, kéo cả Box và nhảy preview tới từng card trước khi lưu JSON hoặc xuất MP4.",
    purpose:["Đổi thứ tự mà không phải xóa và tạo lại card.","Giữ nguyên quan hệ của cặp song song hoặc Box khi di chuyển cả nhóm.","Lưu dự án để tiếp tục chỉnh sửa sau."],
    controls:[["Kéo một card","Di chuyển riêng card tuần tự tới vị trí mới."],["Kéo cả cặp","Dùng tay nắm hàng để giữ card chính và media song song đi cùng nhau."],["Kéo cả Box","Di chuyển trọn Box Messenger mà không đảo thứ tự tin bên trong."],["Nhấn card để kiểm tra","Timeline nhảy tới card, giúp rà bố cục nhanh."],["Xuất JSON định kỳ","Lưu dự án sau các thay đổi lớn. JSON không nhúng toàn bộ file media."],["Play toàn bộ","Bước cuối để kiểm tra TTS, gap, xóa nội dung cũ, song song và chuyển cảnh." ]],
    steps:["Sắp xếp các card chính theo mạch câu chuyện.","Ghép media song song sau khi thứ tự chính đã ổn.","Kiểm tra từng card bằng cách nhấn đầu card.","Play từng cụm rồi Play toàn bộ từ đầu.","Xuất JSON và giữ nguyên các file media nguồn.","Chỉ xuất MP4 sau khi đã nghe và nhìn hết timeline."],
    tip:"JSON lưu cấu trúc và tham chiếu media, không phải bản sao đầy đủ của mọi file. Đừng xóa hoặc di chuyển file nguồn nếu còn muốn mở lại dự án."
  }
];

function AppMock({variant}:{variant:string}) {
  const featureTitle:Record<string,string>={"video-nen":"Video nền (gameplay)","am-thanh-nen":"Âm thanh nền","ket-noi-tts":"Kết nối TTS","lam-mo":"Làm mờ tên & avatar","xuat-video":"Ghép & xuất video","don-cache":"Dọn cache"};
  if(featureTitle[variant]) return <div className="app-shot" aria-label={`Minh họa giao diện ${featureTitle[variant]}`}>
    <div className="app-shot-top"><i/><i/><i/><span>Threads Video Maker</span></div>
    <div className="app-shot-body"><div className="app-sidebar-mock"><small>CHỨC NĂNG</small>
      {variant==="video-nen"&&<><MockHead n="1" title="Video nền (gameplay)"/><p className="mock-hint">Chọn video gameplay nền, tự crop phủ khung 9:16.</p><div className="mock-tabs"><span>💻 Từ máy</span><b>📂 Thư viện có sẵn</b></div><button className="mock-primary">📂 Mở thư viện video nền</button><button className="mock-ghost">Xoá video</button></>}
      {variant==="am-thanh-nen"&&<><MockHead n="2" title="Âm thanh nền"/><p className="mock-hint">Nhạc phát cùng video; gameplay tự tắt tiếng gốc.</p><div className="mock-tabs"><span>💻 Từ máy</span><b>📂 Thư viện có sẵn</b></div><button className="mock-primary">🎵 Mở thư viện âm thanh nền</button><label>Âm lượng nhạc nền</label><div className="mock-slider"><i/><b>50%</b></div><button className="mock-ghost">Xoá nhạc</button></>}
      {variant==="ket-noi-tts"&&<><MockHead n="3" title="Kết nối TTS" done/><div className="mock-status"><i/> Kết nối OK · Danh sách giọng đã sẵn sàng</div><div className="mock-tts-list"><span>Kiểm tra máy chủ</span><b>Hoàn tất</b><span>Tải danh sách giọng</span><b>Hoàn tất</b><span>Tạo TTS còn thiếu</span><em>Tự động khi Play</em></div></>}
      {variant==="lam-mo"&&<><div className="mock-blur"><span>✓</span><div><b>🌫 Làm mờ tên & avatar trong preview</b><p>Bật khi soạn — tắt khi cần xem hoặc xuất bản thật.</p></div></div><div className="mock-identity"><i/><div><b className="blurred">nguyenquochuy</b><span>Nội dung vẫn hiển thị rõ bình thường</span></div></div></>}
      {variant==="xuat-video"&&<><MockHead n="4" title="Ghép & xuất video"/><button className="mock-primary large">🎬 Xuất MP4</button><p className="mock-hint">Giá xuất dự kiến: 24 credit</p><div className="mock-progress"><i/></div><div className="mock-result">✓ Video đã sẵn sàng<br/><span>threads-video.mp4</span></div></>}
      {variant==="don-cache"&&<><MockHead n="5" title="Dọn cache"/><p className="mock-hint">Thu hồi media tạm. File gốc trên máy không bị xoá.</p><div className="mock-storage"><span>Dữ liệu nằm trên thiết bị</span><b>1.42 GB</b></div><button className="mock-ghost">🗑️ Dọn media tạm</button><button className="mock-danger">🧹 Xóa toàn bộ media cục bộ</button></>}
    </div><MiniPreview active={variant==="lam-mo"}/></div>
    {variant==="video-nen"&&<BackgroundLibraryMock type="video"/>}
    {variant==="am-thanh-nen"&&<BackgroundLibraryMock type="audio"/>}
    <div className="shot-caption"><span>Giao diện mô phỏng từ app thật</span><b>Vùng sáng là nơi bạn thao tác</b></div>
  </div>;

  return <div className="app-shot preview-shot" aria-label="Minh họa khu vực xem trước">
    <div className="app-shot-top"><i/><i/><i/><span>Threads Video Maker · Xem trước</span></div>
    <div className="preview-demo"><div className="preview-demo-toolbar"><b>Xem trước</b><span>9 : 16</span></div><div className={`phone-preview ${variant}`}>
      <div className="game-bg"><i/><i/><i/></div>
      {variant==="khung-9-16"?<div className="empty-phone"><b>📱</b><span>Khung video dọc 9:16</span><small>Video nền phủ toàn bộ khung</small></div>:<MockThreadCard/>}
      {variant==="chinh-anh-sticker"&&<div className="mock-sticker"><i/><b>💡</b><i/><i/><i/></div>}
    </div><div className="preview-controls"><button>{variant==="play-tam-dung"?"⏸ Tạm dừng":"▶ Play"}</button><button>↻</button><div className="demo-track"><i style={{width:variant==="tua-va-phat-lai"?"62%":"28%"}}/></div><span>{variant==="tua-va-phat-lai"?"18.6s / 30.0s":"8.4s / 30.0s"}</span><em>12 credit</em></div><div className="preview-meta"><span>gameplay.mp4</span><span>1920×1080 · 30.0s</span></div></div>
    <div className="shot-caption"><span>Giao diện mô phỏng từ app thật</span><b>{variant==="tua-va-phat-lai"?"Kéo chấm tròn để tua tới đoạn cần xem":variant==="chinh-anh-sticker"?"Chọn rồi kéo ảnh hoặc sticker trực tiếp":"Quan sát thay đổi ngay trong khung"}</b></div>
  </div>;
}

function MockHead({n,title,done=false}:{n:string,title:string,done?:boolean}){return <div className="mock-head"><b>{n}</b><span>{title}</span><i className={done?"done":""}/><em>⌄</em></div>}
function BackgroundLibraryMock({type}:{type:"video"|"audio"}){return <div className={`background-modal-mock ${type}`}><header><h3>{type==="video"?"Thư viện video nền":"Thư viện âm thanh nền"}</h3><button>✕ Đóng</button></header><button className="background-add-mock">＋ Thêm {type==="video"?"video":"âm thanh"} vào thư viện</button>{type==="video"?<div className="background-video-grid-mock">{[1,2,3,4,5,6].map((n)=><div className={n===2?"selected":""} key={n}><span>▶</span><b>background-{n}.mp4</b></div>)}</div>:<div className="background-audio-list-mock">{["tiktok_audio.mp3","backgroundmusic.mp3","music-short.mp3"].map((name,n)=><div className={n===0?"selected":""} key={name}><button>{n===0?"⏸":"▶"}</button><b>{name}</b><small>{n===0?"Đang nghe thử · đã chọn":"Bấm để nghe và chọn"}</small></div>)}</div>}<footer><button>Huỷ</button><button>Chọn {type==="video"?"video":"âm thanh"} này</button></footer></div>}
function MiniPreview({active=false}:{active?:boolean}){return <div className="mini-preview"><div><b>Xem trước</b><span>9 : 16</span></div><section><div className="game-bg"><i/><i/><i/></div>{active&&<MockThreadCard/>}<small>PREVIEW</small></section></div>}
function MockThreadCard(){return <div className="mock-thread"><i/><div><b className="mock-name">nguyenquochuy</b><p>Chỉ cần nhập nội dung, công cụ sẽ tự dựng video short.</p><span>♡ 24　◯ 6　⌁</span></div></div>}

function ScriptMock({variant}:{variant:string}){
  const modal=variant==="card-post"||variant==="card-comment-reply"||variant==="card-anh-video"||variant==="card-sticker"||variant==="card-am-thanh";
  return <div className="app-shot script-shot" aria-label="Minh họa giao diện Kịch bản">
    <div className="app-shot-top"><i/><i/><i/><span>Threads Video Maker · Kịch bản (các step)</span></div>
    <div className={`script-demo ${variant==="card-messenger"?"messenger-script-demo":""}`}>
      <div className="script-demo-head"><b>KỊCH BẢN (CÁC STEP)</b><span>⭳ Xuất JSON</span><span>⭱ Nạp JSON</span></div>
      <div className="script-addbar"><b>＋ Post</b><b>＋ Comment</b><b>＋ Reply</b><b>＋ Ảnh</b><b>＋ Âm thanh</b><b>＋ Tin nhắn</b><b>＋ Sticker</b></div>
      {variant==="tong-quan-kich-ban"&&<div className="script-empty-mock">Chưa có step nào.<br/><span>Bấm một nút ＋ ở trên để thêm.</span></div>}
      {variant==="cau-tao-card"&&<MockStep type="POST" text="@huy: Công cụ tạo video short tự động" detailed/>}
      {variant==="card-post"&&<><MockStep type="POST" text="@linh: Có ai từng mất hàng giờ để dựng một video?"/><MockModal kind="post"/></>}
      {variant==="card-comment-reply"&&<><div className="mock-step-pair"><MockStep type="COMMENT 🧵" text="@minh: Dùng công cụ này nhanh hơn nhiều."/><MockStep type="REPLY 🎵" text="@an: Có tạo được TikTok không?"/></div><MockModal kind="comment"/></>}
      {variant==="card-anh-video"&&<><MockStep type="ẢNH" text="🖼️ reaction-video.mp4" media/><MockModal kind="image"/></>}
      {variant==="card-sticker"&&<><MockStep type="STICKER" text="🏷️ sticker-wow.png" media/><MockModal kind="sticker"/></>}
      {variant==="card-am-thanh"&&<><MockStep type="ÂM THANH" text="🔊 bruh-sound.mp3" audio/><MockModal kind="audio"/></>}
      {variant==="card-song-song"&&<div className="parallel-wrap"><div className="parallel-handle">⠿⠿<small>KÉO CẢ CẶP</small></div><div className="parallel-row"><MockStep type="COMMENT 🧵" text="@huy: Nghe âm thanh này nhé"/><MockStep type="ÂM THANH ⏱" text="🔊 bruh-sound.mp3" audio parallel/></div></div>}
      {variant==="card-messenger"&&<><div className="box-panel-narrow"><MockMessengerBox/></div><MessengerModalMock/></>}
      {variant==="sap-xep-va-luu"&&<><div className="drag-note">↕ Kéo để đổi thứ tự · vùng tím cho biết vị trí sẽ thả</div><MockStep type="POST" text="1 · Mở đầu câu chuyện"/><div className="drop-target">THẢ CARD VÀO ĐÂY</div><MockStep type="COMMENT 🧵" text="2 · Phần bình luận"/></>}
      {modal&&<div className="modal-note">Cửa sổ bên dưới mở ra sau khi chọn loại card</div>}
    </div>
    <div className="shot-caption"><span>Giao diện mô phỏng từ app thật</span><b>{variant==="card-song-song"?"Hai card cùng hàng = phát cùng lúc":variant==="card-messenger"?"Box giữ cả cuộc hội thoại trong một nhóm":"Quan sát đúng nút và trạng thái của từng card"}</b></div>
  </div>
}

function MockStep({type,text,detailed=false,media=false,audio=false,parallel=false}:{type:string,text:string,detailed?:boolean,media?:boolean,audio?:boolean,parallel?:boolean}){return <div className={`script-card ${media?"media":""} ${audio?"audio":""} ${parallel?"parallel":""}`}><div className="script-card-head"><i>1</i><b>{type}</b><span>0.0s → {audio?"0.5":"3.0"}s</span></div><p>{text}</p>{!audio&&<small>🔊 BV421_Việt Nam</small>}{(detailed||media)&&<div className="script-dpad"><div><button className="up">▲</button><button className="left">◀</button><button className="reset">⟲</button><button className="right">▶</button><button className="down">▼</button></div><section><button>↶</button><button>↷</button></section><em>x:0 y:0 0°</em></div>}<div className="script-card-controls"><label>Thời lượng <b>{audio?"0.50":"3.00"}</b></label><label>Gap sau <b>0</b></label>{!type.startsWith("TIN")&&!audio&&<label>{media?"☑":"☐"} Xoá nội dung cũ</label>}<span>{media&&text.includes("mp4")?"▶ Phát video　":""}{audio||!media?"⟲ Reset time　":""}✎　{parallel?"↳　":""}🗑</span></div></div>}

function MockModal({kind}:{kind:string}){
  if(kind==="sticker")return <div className="script-modal-mock sticker-real"><div className="script-modal-title">Chọn bộ sticker <span>Đóng</span></div><div className="sticker-pack-card-mock"><div className="sticker-grid"><b>😆</b><b>🔥</b><b>💡</b><b>👏</b><b>❤️</b><b>✨</b></div><strong>Reaction vui <small>24 sticker　›</small></strong></div></div>;
  const title=kind==="post"?"POST":kind==="comment"?"COMMENT":kind==="image"?"ẢNH":"ÂM THANH";
  return <div className="script-modal-mock"><div className="script-modal-title">Thêm step — {title}</div>
    {kind==="comment"&&<><label>Nền tảng</label><div className="modal-platform"><b>🧵 Threads</b><span>🎵 TikTok</span></div><div className="modal-check">□ Là tác giả bài gốc (badge “Tác giả”)</div></>}
    {(kind==="post"||kind==="comment")&&<><label>Nội dung</label><div className="modal-textarea">Nhập nội dung...</div><label className="modal-label-row"><span>🔊 Nội dung đọc (TTS)</span><small>mặc định = nội dung hiển thị, có thể sửa riêng</small></label><div className="modal-textarea">Để trống = đọc y hệt nội dung hiển thị</div><div className="modal-check">□　✨ Hiệu ứng vang (nhấn nhá câu này cho hài/gây cười)</div><label>🔊 Giọng đọc</label><div className="modal-select">BV421_Việt Nam <span>▾</span></div><label>Ảnh đính kèm (tuỳ chọn)</label><div className="modal-upload small">📁 Kéo-thả file vào đây, hoặc bấm để chọn</div><button className="modal-library">📂 Chọn từ thư viện có sẵn</button><label>Chỉ số tương tác</label><div className="modal-stat-row"><span>♡ 24</span><span>◯ 6</span><span>↻ 2</span><span>⌁ 4</span></div></>}
    {kind==="image"&&<><p className="modal-help">Ảnh phủ giữa khung trong lúc step chạy, kèm giọng đọc TTS phát đúng lúc ảnh hiện.</p><label>🔗 Ảnh từ URL (dán link ảnh có sẵn, tuỳ chọn)</label><div className="modal-input">https://...</div><div className="modal-or">— hoặc chọn ảnh từ máy bên dưới —</div><div className="modal-upload">📁 Kéo-thả file vào đây, hoặc bấm để chọn</div><button className="modal-library">📂 Chọn từ thư viện có sẵn</button><label>Nội dung đọc (TTS)</label><div className="modal-textarea">Chữ sẽ được đọc khi ảnh hiện lên...</div><div className="modal-check">□　✨ Hiệu ứng vang</div><label>🔊 Giọng đọc</label><div className="modal-select">BV421_Việt Nam <span>▾</span></div></>}
    {kind==="audio"&&<><p className="modal-help">Âm thanh hiệu ứng (meme sound). Không có hình, chỉ phát tiếng. Tạo xong có thể kéo thả lên card khác để chạy song song với card đó.</p><label>File âm thanh</label><div className="modal-upload">📁 Kéo-thả file vào đây, hoặc bấm để chọn</div><button className="modal-library">📂 Chọn từ thư viện có sẵn</button><div className="audio-library-row selected"><button>⏸</button><span>bruh-sound.mp3 <small>✓ Đã chọn khi nghe thử</small></span></div></>}
    <div className="modal-actions-mock"><button>Huỷ</button><button>Thêm vào kịch bản</button></div></div>
}

function MockMessengerBox(){return <div className="mess-box-mock"><div className="mess-box-head-mock"><i>1</i><b>BOX TIN NHẮN</b><span>0.0s → 8.4s</span><em>⠿ Kéo cả Box</em></div><div className="mess-box-actions-mock"><span>☑ Xóa nội dung cũ</span><button>Xem hội thoại</button><button>Bỏ nhóm</button><button>Xóa cả nhóm</button></div><div className="mess-person"><i/><div><b>Min Hiếu</b><span>4 tin nhắn · 1 âm thanh · phát theo thứ tự bên dưới</span></div></div><div className="mess-bubbles"><p>Chào bạn, công cụ này dùng sao?</p><p>Mình chỉ cần nhập nội dung thôi nhé.</p><p>Hay vậy, có giọng đọc luôn hả?</p></div><div className="mess-child"><span>TIN NHẮN 1</span><span>TIN NHẮN 2</span><span>ÂM THANH ⏱</span></div></div>}

function MessengerModalMock(){const avatar="https://hunggiaco.com/wp-content/uploads/2026/03/avatar-mac-dinh-facebook-1-1.jpg";return <div className="mess-modal-real"><h3>Thêm đoạn chat Messenger</h3><div className="mess-editor-real"><section className="mess-compose-real"><div className="mess-import-real"><span>Nhập tay hoặc nạp danh sách tin từ JSON</span><div><button>⭱ Nạp file</button><button>⌘ Dán mã JSON</button></div></div><div className="mess-voices-real"><label>Giọng mặc định — Đối phương<div>BV421_Việt Nam <span>▾</span></div></label><label>Giọng mặc định — Tôi<div>BV074_Việt Nam <span>▾</span></div></label></div><label className="mess-speed-real">Tốc độ đọc toàn bộ hội thoại: <b>1.00×</b><i><span/></i></label><div className="mess-sides-real"><label>Đối phương<div><span>Nhập tin bên trái...</span><button>🖼️</button></div></label><label>Tôi<div><span>Nhập tin bên phải...</span><button>🖼️</button></div></label></div><label className="mess-tts-real">Nội dung đọc TTS<div>Tự đồng bộ theo tin nhắn...</div></label><p className="mess-echo-real">□　✨ Hiệu ứng vang (nhấn nhá tin nhắn này cho hài/gây cười)</p><button className="mess-add-real">＋ Thêm tin nhắn</button><div className="mess-drafts-real"><span>1</span><p><b>Đối phương</b> Chào bạn, công cụ này dùng sao?</p><em>✎　🗑</em></div><div className="mess-drafts-real"><span>2</span><p><b>Tôi</b> Chỉ cần nhập nội dung thôi nhé.</p><em>✎　🗑</em></div></section><section className="mess-preview-real"><div className="mess-preview-toolbar-real"><b>PREVIEW ĐOẠN CHAT</b><span>☑ Hiện ô nhập tin nhắn</span><button>Messenger　⌄</button></div><div className="mess-auto-tones-real"><span>☑ Thêm âm thanh nhận vào tất cả tin nhận</span><span>☑ Thêm âm thanh gửi vào tất cả tin gửi</span></div><div className="mess-live-real"><div className="mess-app-preview"><header><div className="mess-avatar-real"><img src={avatar} alt="Avatar mặc định Facebook"/><span/></div><b>Min Hiếu <i/><small>Nhấn tên hoặc avatar để sửa</small></b><div className="mess-head-actions"><MessSvg type="phone"/><MessSvg type="video"/><MessSvg type="minus"/><MessSvg type="close"/></div></header><main><div className="mess-time-real">19:38</div><div className="mess-row-real mine first"><div className="mess-audio-real">🔊 1　×</div><div className="mess-more-real">•••</div><p>Ừ, công cụ này dựng giống Messenger luôn á.</p></div><div className="mess-row-real theirs first"><span className="avatar-space-real"/><div className="mess-more-real">•••</div><p>Thật không?</p></div><div className="mess-row-real theirs last"><div className="mess-mini-avatar-real"><img src={avatar} alt=""/></div><div className="mess-more-real">•••</div><p>Nhìn như đoạn chat thật vậy 😆</p></div><div className="mess-row-real mine first"><div className="mess-more-real">•••</div><p>Đúng rồi</p></div><div className="mess-row-real mine middle"><div className="mess-more-real">•••</div><p>Nhập nội dung rồi AI đọc luôn.</p></div><div className="mess-row-real mine last"><div className="mess-more-real">•••</div><p>Không cần dựng từng tin nữa.</p></div><div className="mess-row-real theirs sticker-row"><div className="mess-mini-avatar-real"><img src={avatar} alt=""/></div><div className="mess-sticker-real">😆</div></div><button className="mess-append-real">＋ Thêm tin ở cuối</button></main><footer><span><MessSvg type="mic"/></span><span><MessSvg type="photo"/></span><span><MessSvg type="sticker"/></span><span><MessSvg type="gif"/></span><div>Aa <b><MessSvg type="smile"/></b></div><strong><MessSvg type="like"/></strong></footer></div></div><p className="fidelity-note">Bản xem này dùng chính SVG, avatar mặc định, tỷ lệ, màu và cấu trúc xuất video của app.</p></section></div><div className="mess-modal-actions-real"><button>Huỷ</button><button>Tạo kịch bản Messenger</button></div></div>}

function MessSvg({type}:{type:string}){
  const paths:Record<string,string[]>={
    phone:["M4.776 1.111a1.728 1.728 0 0 0-2.56-.127l-.472.472a4.516 4.516 0 0 0-.739 5.415 21.46 21.46 0 0 0 8.123 8.123 4.516 4.516 0 0 0 5.415-.738L15 13.8a1.75 1.75 0 0 0-.13-2.591l-2.131-1.745a1.75 1.75 0 0 0-2.143-.056L9.22 10.416a.052.052 0 0 1-.06.002 12.077 12.077 0 0 1-3.578-3.58.052.052 0 0 1 .002-.058l1.008-1.375a1.75 1.75 0 0 0-.056-2.143l-1.76-2.15z"],
    video:["M6.304 2h-.108c-1.133 0-2.058 0-2.79.098-.763.103-1.425.325-1.954.854C.923 3.48.7 4.142.598 4.907.5 5.637.5 6.563.5 7.697v.607c0 1.133 0 2.058.098 2.79.103.763.325 1.425.854 1.954.529.529 1.19.751 1.955.854.73.098 1.656.098 2.79.098h.107c1.133 0 2.058 0 2.79-.098.763-.103 1.425-.325 1.954-.854.529-.529.751-1.19.854-1.955.038-.286.062-.602.076-.949l1.93 1.418a1 1 0 0 0 1.592-.806V5.228a1 1 0 0 0-1.57-.822l-1.956 1.357a9.984 9.984 0 0 0-.072-.856c-.103-.764-.325-1.426-.854-1.955-.529-.529-1.19-.751-1.955-.854C8.363 2 7.437 2 6.303 2z"],
    minus:["M3 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"],close:["M13.457 3.957a1 1 0 0 0-1.414-1.414L8 6.586 3.957 2.543a1 1 0 0 0-1.414 1.414L6.586 8l-4.043 4.043a1 1 0 1 0 1.414 1.414L8 9.414l4.043 4.043a1 1 0 0 0 1.414-1.414L9.414 8l4.043-4.043z"],
    mic:["M8 .5A3.5 3.5 0 0 0 4.5 4v4a3.5 3.5 0 1 0 7 0V4A3.5 3.5 0 0 0 8 .5z","M8.749 13.954 8.75 14v.75a.75.75 0 0 1-1.5 0V14l.001-.046A6.001 6.001 0 0 1 2 8v-.25a.75.75 0 0 1 1.5 0V8a4.5 4.5 0 1 0 9 0v-.25a.75.75 0 0 1 1.5 0V8a6.001 6.001 0 0 1-5.251 5.954z"],
    photo:["M7 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z","M9.302.5H6.698C5.8.5 5.05.5 4.456.58c-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65C2 3.55 2 4.3 2 5.199v5.604c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65a2.3 2.3 0 0 0 .81.522c.237.092.489.152.752.192.571.086 1.281.091 2.122.092h3.174c.795-.002 1.472-.011 2.023-.1.573-.094 1.088-.285 1.509-.705.455-.456.64-1.023.725-1.65.08-.595.08-1.344.08-2.243V5.198c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65C12.74.85 12.172.663 11.544.58 10.95.5 10.2.5 9.302.5zm2.602 6.427a1.75 1.75 0 0 0-2.475 0L7 9.356l-.43-.43a1.75 1.75 0 0 0-2.474 0l-.596.597V5.25c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3C5.138 2.003 5.786 2 6.75 2h2.5c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v2.272l-.596-.595z"],
    sticker:["M8.305 1h-.61c-1.368 0-2.47 0-3.337.116-.9.121-1.658.38-2.26.982-.602.602-.86 1.36-.982 2.26C1 5.225 1 6.327 1 7.695v.61c0 1.367 0 2.47.116 3.336.121.9.38 1.658.982 2.26.602.602 1.36.861 2.26.982.867.117 1.97.117 3.337.117.268 0 .537.002.805-.004v-1.034c0-.764 0-1.423.028-1.99a5.007 5.007 0 0 1-3.761-1.149.75.75 0 0 1 .966-1.147c.61.513 1.4.823 2.267.823.212 0 .419-.018.62-.053a.754.754 0 0 1 .137-.012c.127-.404.32-.755.621-1.056.475-.474 1.076-.684 1.812-.783.714-.096 1.626-.096 2.772-.095h1.034c.006-.269.004-.537.004-.805 0-1.368 0-2.47-.117-3.337-.12-.9-.38-1.658-.982-2.26-.601-.602-1.36-.86-2.26-.982C10.774.999 9.673.999 8.306 1zm3.693 4.747a1.249 1.249 0 1 1-2.498 0 1.249 1.249 0 0 1 2.498 0zM5.248 7a1.249 1.249 0 1 1 0-2.498 1.249 1.249 0 0 1 0 2.498z","M14.87 9.5H14c-1.193 0-2.037 0-2.677.087-.625.084-.98.24-1.238.498-.257.258-.414.613-.498 1.238-.086.64-.087 1.484-.087 2.676v.87c.076-.022.15-.048.224-.079.508-.21.899-.602 1.392-1.096l2.578-2.578c.494-.493.886-.884 1.096-1.393.03-.073.057-.148.08-.223z"],
    gif:["M7.695 1h.61c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.61c0 1.367 0 2.47-.117 3.337-.12.9-.38 1.658-.981 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-.61c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26C1 10.775 1 9.672 1 8.305v-.61c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981C5.225 1 6.328 1 7.695 1zM4.812 5.008A2.062 2.062 0 0 0 2.75 7.07v1.942a1.995 1.995 0 0 0 3.99 0v-.727a.75.75 0 0 0-1.5 0v.727a.495.495 0 0 1-.99 0V7.07c0-.31.252-.562.562-.562H5a.75.75 0 1 0 0-1.5h-.188zm3.438 0a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75zm2.5 0a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-1.5h.5a.75.75 0 0 0 0-1.5h-.5v-.75h1a.75.75 0 0 0 0-1.5h-1.75z"],
    smile:["M26.5 18c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5m2.072 6.549C26.428 26.742 22.938 28 19 28s-7.428-1.258-9.572-3.451a1.5 1.5 0 0 1 2.144-2.098C13.133 24.047 15.909 25 19 25s5.867-.953 7.428-2.549a1.5 1.5 0 0 1 2.144 2.098M11.5 13c1.379 0 2.5 1.121 2.5 2.5S12.879 18 11.5 18 9 16.879 9 15.5s1.121-2.5 2.5-2.5M19 0C8.523 0 0 8.523 0 19s8.523 19 19 19 19-8.523 19-19S29.477 0 19 0z"],
    like:["M16 9.1c0-.8-.3-1.1-.6-1.3.2-.3.3-.7.3-1.2 0-1-.8-1.7-2.1-1.7h-3.1c.1-.5.2-1.3.2-1.8 0-1.1-.3-2.4-1.2-3C9.3.1 9 0 8.7 0c-.6 0-1 .2-1.1.4-.1.1-.1.2-.1.3L7.6 3c0 .2 0 .4-.1.5L5.7 6.6l-.1.1-.3.1c-.2.2-.3.4-.3.6v6.1c0 .2.1.4.2.5.1.1 1 1 2 1h5.2c.9 0 1.4-.3 1.8-.9.3-.5.2-1 .1-1.4.5-.2.9-.5 1.1-1.2.1-.4 0-.8-.2-1 .4-.2.8-.6.8-1.4z","M3.3 6H.7C.3 6 0 6.3 0 6.7v8.5c0 .5.3.8.7.8h2.5c.5 0 .8-.3.8-.7V6.7c0-.4-.3-.7-.7-.7z"]
  };
  return <svg viewBox={type==="smile"?"0 0 38 38":"0 0 16 16"} aria-hidden="true">{(paths[type]||[]).map((d,i)=><path d={d} key={i}/>)}</svg>
}

export default function GuidePage(){return <main><Header active="guide"/>
  <section className="guide-hero"><div className="shell guide-hero-inner"><div><div className="eyebrow"><span/> Hướng dẫn từ cơ bản</div><h1>Làm quen với<br/><em>Threads Video Maker.</em></h1><p>Tài liệu dành cho người mới, giải thích từng khu vực, từng nút và đúng thứ tự thao tác để tạo video đầu tiên.</p></div><div className="guide-map"><div className="guide-map-title">Giao diện được chia thành 3 khu vực</div><div className="guide-map-cards"><a href="#chuc-nang" className="ready"><b>01</b><span>Chức năng</span><small>Đã có hướng dẫn</small></a><a href="#xem-truoc" className="ready"><b>02</b><span>Xem trước</span><small>Đã có hướng dẫn</small></a><a href="#kich-ban" className="ready"><b>03</b><span>Kịch bản</span><small>Đang xem · Đã có hướng dẫn</small></a></div></div></div></section>
  <section className="shell guide-layout" id="chuc-nang">
    <aside className="guide-toc"><span className="kicker">Mục lục hướng dẫn</span><a className="toc-section-link" href="#chuc-nang"><b>01</b><span>Chức năng</span></a>{controlGroups.map(g=><a href={`#${g.id}`} key={g.id}><b>{g.number}</b><span>{g.title}</span></a>)}<a className="toc-section-link" href="#xem-truoc"><b>02</b><span>Xem trước</span></a>{previewGroups.map(g=><a href={`#${g.id}`} key={g.id}><b>{g.number}</b><span>{g.title}</span></a>)}<a className="toc-section-link" href="#kich-ban"><b>03</b><span>Kịch bản</span></a>{scriptGroups.map(g=><a href={`#${g.id}`} key={g.id}><b>{g.number}</b><span>{g.title}</span></a>)}</aside>
    <div className="guide-content"><header className="guide-section-title"><span>PHẦN 01</span><h2>Chức năng</h2><p>Cột Chức năng nằm ở bên trái ứng dụng. Đây là nơi chuẩn bị lớp nền, nhạc, kết nối giọng đọc, xuất file và quản lý dữ liệu tạm.</p></header>
      {controlGroups.map((group)=><article className="manual-block" id={group.id} key={group.id}>
        <div className="manual-heading"><span className={`manual-icon ${group.tone}`}>{group.icon}</span><div><small>CHỨC NĂNG {group.number}</small><h2>{group.title}</h2></div></div>
        <p className="manual-intro">{group.intro}</p>
        <AppMock variant={group.id}/>
        <section className="manual-purpose"><h3>Chức năng chính</h3><ul>{group.purpose.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></section>
        <section className="control-explain"><h3>Các nút và tùy chọn</h3><div>{group.controls.map(([name,text])=><div className="control-row" key={name}><b>{name}</b><p>{text}</p></div>)}</div></section>
        <section className="beginner-steps"><div className="steps-title"><span>Thực hành</span><h3>Các bước dành cho người mới</h3></div><ol>{group.steps.map((step,i)=><li key={step}><span>{i+1}</span><p>{step}</p></li>)}</ol></section>
        <aside className="manual-tip"><b>Ghi nhớ</b><p>{group.tip}</p></aside>
      </article>)}
      <header className="guide-section-title guide-section-break" id="xem-truoc"><span>PHẦN 02</span><h2>Xem trước</h2><p>Khu vực ở giữa ứng dụng dùng để nhìn, nghe và kiểm tra toàn bộ dự án theo thời gian. Bạn có thể phát, tạm dừng, tua, xem lại từ đầu và chỉnh trực tiếp vị trí ảnh hoặc sticker.</p></header>
      {previewGroups.map((group)=><article className="manual-block" id={group.id} key={group.id}>
        <div className="manual-heading"><span className={`manual-icon ${group.tone}`}>{group.icon}</span><div><small>XEM TRƯỚC {group.number}</small><h2>{group.title}</h2></div></div>
        <p className="manual-intro">{group.intro}</p>
        <AppMock variant={group.id}/>
        <section className="manual-purpose"><h3>Chức năng chính</h3><ul>{group.purpose.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></section>
        <section className="control-explain"><h3>Các nút và trạng thái</h3><div>{group.controls.map(([name,text])=><div className="control-row" key={name}><b>{name}</b><p>{text}</p></div>)}</div></section>
        <section className="beginner-steps"><div className="steps-title"><span>Thực hành</span><h3>Các bước dành cho người mới</h3></div><ol>{group.steps.map((step,i)=><li key={step}><span>{i+1}</span><p>{step}</p></li>)}</ol></section>
        <aside className="manual-tip"><b>Ghi nhớ</b><p>{group.tip}</p></aside>
      </article>)}
      <header className="guide-section-title guide-section-break" id="kich-ban"><span>PHẦN 03</span><h2>Kịch bản</h2><p>Khu vực nhiều chức năng nhất của ứng dụng. Phần này đi từ cấu tạo một card đơn giản tới ảnh, video, sticker, âm thanh song song và Box Messenger phức tạp.</p></header>
      {scriptGroups.map((group)=><article className="manual-block" id={group.id} key={group.id}>
        <div className="manual-heading"><span className={`manual-icon ${group.tone}`}>{group.icon}</span><div><small>KỊCH BẢN {group.number}</small><h2>{group.title}</h2></div></div>
        <p className="manual-intro">{group.intro}</p>
        <ScriptMock variant={group.id}/>
        <section className="manual-purpose"><h3>Chức năng chính</h3><ul>{group.purpose.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></section>
        <section className="control-explain"><h3>Các nút và trạng thái</h3><div>{group.controls.map(([name,text])=><div className="control-row" key={name}><b>{name}</b><p>{text}</p></div>)}</div></section>
        <section className="beginner-steps"><div className="steps-title"><span>Thực hành</span><h3>Các bước dành cho người mới</h3></div><ol>{group.steps.map((step,i)=><li key={step}><span>{i+1}</span><p>{step}</p></li>)}</ol></section>
        <aside className="manual-tip"><b>Ghi nhớ</b><p>{group.tip}</p></aside>
      </article>)}
      <section className="guide-next"><span>Hoàn thành toàn bộ hướng dẫn giao diện</span><h2>Từ card đầu tiên tới video hoàn chỉnh</h2><p>Bạn đã biết ba khu vực chính: chuẩn bị tài nguyên trong Chức năng, kiểm tra bằng Xem trước và xây dựng nội dung trong Kịch bản. Hãy bắt đầu bằng một dự án ngắn, sau đó mới thêm media song song và Box Messenger.</p><div><span>01 · Chức năng ✓</span><span>02 · Xem trước ✓</span><span>03 · Kịch bản ✓</span></div></section>
    </div>
  </section><Footer/></main>}
