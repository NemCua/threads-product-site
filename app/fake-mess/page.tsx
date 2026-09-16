import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fake Messenger — ToolVideos",
  description: "Tạo và xuất ảnh hội thoại Messenger ngay trong trình duyệt.",
};

export default function FakeMessengerPage() {
  return <main className="tool-embed"><Link href="/home" className="tool-return" aria-label="Quay lại ToolVideos"><span aria-hidden="true">←</span><b>ToolVideos</b></Link><iframe src="/fake-mess/index.html" title="Fake Messenger" /></main>;
}
