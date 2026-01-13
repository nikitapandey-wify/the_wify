import "@/globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import ReactQueryClientProvider from "@/shared/components/root/react-query-client-provider";
import { Toaster } from "@/shared/components/ui/toaster";

import { APP_ENVS } from "@/shared/constants/envs";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: APP_ENVS.APP_TITLE,
  ...(APP_ENVS.APP_ENV === "production"
    ? {}
    : {
        robots: {
          index: false,
          follow: false,
        },
      }),
  openGraph: {
    title: APP_ENVS.APP_TITLE,
    images: [
      {
        url: process.env.META_IMAGE_URL ?? "",
        width: 800,
        height: 419,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_ENVS.APP_TITLE,
    images: [process.env.META_IMAGE_URL ?? ""],
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans subpixel-antialiased`}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Toaster mobileOffset={8} offset={{ right: 16 }} duration={4 * 1000} />
      </body>
    </html>
  );
}

export default RootLayout;