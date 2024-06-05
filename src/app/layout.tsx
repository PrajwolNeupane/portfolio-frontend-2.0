import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { MousePointer } from "@/components/shared";
import { ViewTransitions } from "next-view-transitions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainMetaData } from "@/enums/meta-data";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = mainMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${jost.className} bg-background text-3xs relative`}>
          {children}
          <MousePointer />
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
