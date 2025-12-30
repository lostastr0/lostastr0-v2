import "./globals.css";
import Shell from "@/components/Shell";

export const metadata = {
  title: "LostAstr0",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-black text-white">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
