
import "./globals.css";

export const metadata = {
  title: "CINEMORA",
  description: "اكتشف أحدث وأفضل الأفلام المصرية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
