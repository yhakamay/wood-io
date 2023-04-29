import "./globals.css";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
