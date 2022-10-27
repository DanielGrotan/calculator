import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head></head>
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
