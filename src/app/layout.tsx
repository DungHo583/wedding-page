import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xuân Dũng & Thuỳ Trang Wedding site",
  description:
    "Xuân Dũng & Thuỳ Trang - Our wedding date: 2023-12-03 | Tình yêu đích thực và chân chính hiếm đến nỗi khi bạn bắt gặp nó dưới bất kỳ hình thức nào, đó là một điều tuyệt vời, được trân trọng hoàn toàn dưới bất kỳ hình thức nào",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="wrapper-layout">
            <Header />
            {children}
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
