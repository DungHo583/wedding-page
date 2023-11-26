"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "./header";
import Footer from "./footer";
import MusicBackground from "./music-background";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Xuân Dũng & Thuỳ Trang Wedding site</title>
        <meta
          name="description"
          content="Xuân Dũng & Thuỳ Trang - Our wedding date: 2023-12-03 | Tình yêu đích thực và chân chính hiếm đến nỗi khi bạn bắt gặp nó dưới bất kỳ hình thức nào, đó là một điều tuyệt vời, được trân trọng hoàn toàn dưới bất kỳ hình thức nào"
        />
        <meta property="og:title" content="Xuân Dũng & Thuỳ Trang Wedding site"/>
        <meta property="og:image" content="https://res.cloudinary.com/dhicxwcqh/image/upload/v1700980498/metadata_k6ecfg.jpg"/>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Theme>
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
          </div>
          <div className="wrapper-layout">
            <Header />
            {children}
            <Footer />
          </div>
          <MusicBackground />
        </Theme>
      </body>
    </html>
  );
}
