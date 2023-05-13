import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

import Header from "@/components/header";

import { Providers } from "./providers";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "Wood.io",
  description: "製材所と林業家をつなぐ木の売買プラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {/* https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup */}
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
