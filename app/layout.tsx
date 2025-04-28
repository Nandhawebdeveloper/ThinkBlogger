import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { BlogProvider } from "@/context/blog-context"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BlogCraft - Create and Share Your Ideas",
  description: "A platform to create and share your blog posts easily",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7072507123224189"
         crossorigin="anonymous">
         </script>
      </head>
      <body className={inter.className}>
        <BlogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </BlogProvider>
      </body>
    </html>
  )
}
