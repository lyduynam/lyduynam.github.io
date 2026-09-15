# Duy-Nam Ly — Personal website

Bản chỉnh sửa giữ **Next.js App Router** của source gốc. Giao diện dùng CSS thuần, không cần Tailwind, Font Awesome hay tải Google Fonts.

## Chạy website

Yêu cầu Node.js 20.9 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Bản production:

```bash
npm run build
npm start
```

Package và lockfile đi kèm đã được dùng để build bản này. Không có backend/CMS: sau khi sửa file dữ liệu, build và deploy lại như project Next.js hiện tại của bạn.

## Đưa vào project hiện tại

1. Thay thư mục `src` bằng `src` trong ZIP này.
2. **Gộp** nội dung `public` vào `public` hiện tại, giữ các ảnh/PDF gốc của bạn.
3. Giữ alias `@/* → ./src/*` trong `jsconfig.json` hoặc `tsconfig.json`.
4. Nếu muốn chạy bản ZIP như một project độc lập, dùng luôn các file cấu hình và lockfile đi kèm. Nếu ghép vào repository đang có cấu hình riêng, giữ các cấu hình deployment/env của repository đó và đối chiếu dependency trong `package.json`.

## Cấu trúc trang

| URL | Nội dung |
| --- | --- |
| `/` | Giới thiệu ngắn, 3 updates mới nhất, 3 publications mới nhất |
| `/about` | Research interests, Education, Experience, Skills, Academic activities, Other activities |
| `/updates` | News theo năm, mới nhất trước |
| `/projects` | Grid, lọc theo loại và tag, tìm kiếm, URL giữ trạng thái lọc |
| `/projects/[slug]` | Mẫu research hoặc showcase theo `type` |
| `/publications` | Toàn bộ 12 publications gốc, theo năm, liên kết, mở/đóng và copy BibTeX |

Tên/logo trên menu dẫn về trang chủ. Menu chính có đúng About Me, Updates, Projects và Full Publications.

## Chỉnh thông tin cá nhân

Sửa `src/data/profile.js`:

- `profile`: tên, giới thiệu, email, mạng xã hội.
- `interests`, `education`, `experience`, `skills`.
- `academicActivities`, `otherActivities`: mỗi item có `title`, `organization`, `period`, `details` (mảng đoạn văn), và `href` nếu cần.
- Thư mục upload chỉ có `src`, **không có ảnh avatar/PDF CV gốc**. Để khôi phục ảnh cũ, đặt ảnh tại `public/ldnam-avatar.jpg` rồi sửa `profile.avatar = "/ldnam-avatar.jpg"`.
- Đặt CV tại `public/nam-cv.pdf` rồi sửa `profile.cv = "/nam-cv.pdf"`. Nút Download CV sẽ xuất hiện trên About Me.

Ngày học tập/công tác giữ theo source gốc, chưa tự xác nhận hoặc thay đổi các trạng thái “Present”. Academic activities có mục tổng hợp từ các publications hiện có. Other activities để trống vì chưa được cung cấp; giao diện hiển thị một ghi chú ngắn cho mục này.

## Thêm update thường xuyên

Sửa `src/data/updates.js`, thêm một item:

```js
{
  id: "unique-update-id",
  date: "2026-09-12", // YYYY-MM-DD, YYYY-MM hoặc YYYY
  category: "Career", // Tự đặt: Publication, Career, Award, Talk, Personal...
  title: "Tiêu đề news đã xác nhận",
  text: "Nội dung ngắn của update.",
  href: "/about", // Không bắt buộc, có thể dùng link https://...
}
```

Trang chủ tự lấy 3 item mới nhất. Các news hiện có được viết từ publications trong source, chỉ dùng năm vì chưa có ngày/tháng chính xác. Các item cùng ngày/năm giữ thứ tự trong file. Không có news giả về thay đổi công tác hay công bố mới.

## Thêm research project

1. Nếu đã có publication, thêm record theo định dạng cũ vào `src/data/publications.js`.
2. Thêm project vào `researchProjects` trong `src/data/projects.js`.
3. Dùng `publicationLink` khớp chính xác với `Link` của publication. Tác giả, title đầy đủ, venue và BibTeX được lấy tự động từ publication; không phải nhập lại.

```js
{
  slug: "my-research-project", // Duy nhất, chữ thường, không dấu, gạch nối
  title: "Short project name",
  year: "2027",
  publicationLink: "https://doi.org/REPLACE_WITH_REAL_DOI",
  tags: ["VR", "HCI"],
  cover: "/images/projects/my-research.jpg",
  imageAlt: "Mô tả ảnh cho accessibility.",
  coverCaption: "Chú thích của ảnh thật.",
  summary: "Mô tả ngắn hiện trên card.",
  abstract: "Abstract chính thức của publication.",
  youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  codeUrl: "https://github.com/your-account/your-project",
  sections: [
    { heading: "Method", paragraphs: ["Đoạn 1...", "Đoạn 2..."] },
    { heading: "Findings", bullets: ["Kết quả đã xác nhận..."] },
  ],
  gallery: [
    { src: "/images/projects/figure-1.jpg", alt: "Mô tả ảnh", caption: "Chú thích" },
  ],
}
```

Các giá trị DOI/YouTube trong ví dụ là chỗ cần thay, không phải dữ liệu đã được thêm vào website. Tag filter tự phát sinh từ `tags`; badge hội nghị lấy từ `publication.Venue` (ví dụ `CHI 2027` sau khi có publication phù hợp). Mẫu research cũng hỗ trợ `pdfUrl`, `paperUrl`, `affiliations`, `videoCaption`, `acknowledgments`.

Với research chưa có publication: thêm một record vào `researchProjects`, có `slug`, `title`, `year`, `tags`, `summary`, `overview`, `cover`; có thể thêm `authors`, `paperUrl`, `bibtex`. Không dùng `publicationLink` giả. Trang research hoạt động cả khi chưa có record bibliography.

## Thêm project showcase

Thêm vào `otherProjects` trong `src/data/projects.js`:

```js
{
  slug: "my-showcase",
  type: "other",
  title: "Tên project",
  year: "2026",
  tags: ["Web", "Design"],
  cover: "/images/projects/my-showcase.jpg",
  imageAlt: "Mô tả ảnh",
  summary: "Mô tả ngắn trên card.",
  overview: "Giới thiệu project.",
  role: "Design & development",
  tools: ["React", "CSS"],
  youtubeUrl: "", // Điền URL video thật khi có
  liveUrl: "https://your-project.example",
  sections: [
    { heading: "The process", paragraphs: ["Quá trình thực hiện..."] },
    { heading: "The result", paragraphs: ["Kết quả..."] },
  ],
  gallery: [],
}
```

Bản này có một showcase về chính website để bạn xem mẫu. Có thể xóa hoặc sửa record `personal-website`.

## Video YouTube

`youtubeUrl` nhận dạng các dạng `youtube.com/watch?v=...`, `youtu.be/...`, `youtube.com/shorts/...`, `youtube.com/live/...`, `youtube.com/embed/...`, hoặc video ID. Cả hai loại Project Detail sử dụng cùng component responsive 16:9, hỗ trợ fullscreen và lazy loading.

Không có link video thật trong source gửi kèm, nên chưa gắn video vào các project mẫu. Khi URL hợp lệ, section Video và nút Video tự xuất hiện. Khi trường rỗng hoặc không hợp lệ, section được ẩn. Video phải cho phép nhúng trên YouTube. Chưa kiểm chứng việc phát video thật do chưa có link được cung cấp.

## Ảnh và nội dung nghiên cứu

- Các ảnh SVG đi kèm là **minh họa concept**, không phải screenshot hệ thống hoặc figure nghiên cứu. Thay bằng ảnh thật trong `public/images/projects/`, cập nhật `cover`, `imageAlt`, `coverCaption`.
- Overview được viết ngắn dựa trên tiêu đề và metadata của source. Chưa tự tạo abstract, phương pháp, kết quả, hay số liệu nghiên cứu. Điền `abstract` và `sections` bằng nội dung chính thức khi sẵn sàng.
- Không tự thêm publication CHI 2027; đây chỉ là ví dụ format badge trong yêu cầu.
- Thông tin 12 publications và thứ tự năm được giữ. Hai BibTeX của **VOI-VR** và **Evaluation of AI-Based Assistant Representations...** bị tráo nhau trong source đã được đổi lại đúng record; một dấu `}` thừa ở BibTeX bài Virtual Reality 2025 đã được bỏ. Đây là sửa lỗi nội bộ trong source, không phải kiểm chứng bibliography với nhà xuất bản.

## Các file chính

- `src/app/globals.css`: toàn bộ giao diện và breakpoint responsive.
- `src/components/header.jsx`: menu desktop/mobile.
- `src/components/project-grid.jsx`: tìm kiếm, bộ lọc và empty state.
- `src/components/project-detail.jsx`: research/showcase templates.
- `src/components/youtube-embed.jsx`: YouTube player.
- `src/components/publication-component.jsx`: hiển thị publications.
- `src/components/bibtex.jsx`: mở/đóng/copy citation, có fallback copy thủ công.

Dữ liệu nhúng trực tiếp trong website public: chỉ đưa nội dung bạn muốn hiển thị vào các file data. Website chưa được deploy trong tác vụ chỉnh source này.

## Kiểm tra bản này

- `npm run build`: thành công; đã tạo 5 trang chính và 13 trang project.
- 18 đường dẫn nội dung trả HTTP 200; project không tồn tại trả trang 404.
- Kiểm tra các liên kết nội bộ và 24 tài nguyên ảnh/script/CSS được tham chiếu trong HTML: thành công.
- Kiểm tra logic lọc loại/tag, tìm kiếm, kết quả rỗng, sắp xếp news và định dạng YouTube: thành công.
- Chưa hoàn tất kiểm tra tương tác và bố cục bằng trình duyệt: trình duyệt của môi trường không truy cập được preview cục bộ. CSS đã có breakpoint desktop/tablet/mobile, nhưng cần xem trực tiếp trong trình duyệt của bạn.
