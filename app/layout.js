import "./globals.css";

export const metadata = {
  title: "Tolulope Olaniyan | Software Engineer",
  description:
    "Software engineer focused on backend systems, fintech infrastructure, AI powered products, and reliable web platforms."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
