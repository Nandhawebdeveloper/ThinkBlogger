import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Think<span className="text-[#ff7311]">Blogger</span>
            </h3>
            <p className="text-gray-400">
             Turning Ideas Into Reality Through Code, Design, and Daily Growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#4BB4E6]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#4BB4E6]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#4BB4E6]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         {/* <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/add-blog" className="text-gray-400 hover:text-[#4BB4E6]">
                  Create Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#4BB4E6]">
                  Writing Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#4BB4E6]">
                  Free Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#4BB4E6]">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#4BB4E6]">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#4BB4E6]">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>*/}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ThinkBlogger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
