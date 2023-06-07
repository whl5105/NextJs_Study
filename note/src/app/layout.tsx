import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "제품 사이트",
  description: "제품을 판매하는 곳입니다. ",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <a href="">Contact</a>
            <a href="">About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
