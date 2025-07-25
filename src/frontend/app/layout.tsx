import type { Metadata } from "next";

import { FAVICON_URI } from "@/config/app";

import "@/assets/styles/index.scss";

export const metadata: Metadata = {
  title: "v2.0-Alpha-1",
  description: "v2.0-Alpha-1",
  icons: {
    icon: [{ url: FAVICON_URI, type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthorized = true;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
