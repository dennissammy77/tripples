import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers/providers";
import Header from "./components/Header";

export const metadata = {
  title: "Tripples",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <Header />
            {children}
        </Providers>
      </body>
    </html>
  );
}
