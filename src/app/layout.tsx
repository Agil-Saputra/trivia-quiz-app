import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trivia Quiz App",
  description: "Here you will work on quizzes based on a lot of categories",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
	 <html lang="en">
	   <body
		 className={`${geistSans.variable} ${geistMono.variable} antialiased`}
	   >
		<Header/>
		 {children}
	   </body>
	 </html>
   </ClerkProvider>
  );
}
