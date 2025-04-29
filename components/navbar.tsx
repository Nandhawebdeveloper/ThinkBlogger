"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Blog", path: "/" },
    { name: "About", path: "/about" },
  ]

  return (
    <header className="bg-[#1e1e1e] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold">
              Think<span className="text-[#ff7311]">Blogger</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#4BB4E6]",
                  pathname === item.path ? "text-[#4BB4E6]" : "text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/add-blog">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full">Create Blog</Button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e1e1e] pb-4">
          <div className="container px-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block py-2 text-base font-medium",
                  pathname === item.path ? "text-[#4BB4E6]" : "text-white",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/add-blog" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full w-full mt-2">Create Blog</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
