export const metadata = {
  title: "선린공인중개사사무소",
  description: "대구 북구 산격로 95 선린공인중개사사무소",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
