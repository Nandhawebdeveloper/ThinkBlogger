export default function BlogMarquee() {
  return (
    <div className="bg-[#4BB4E6] text-white py-2 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        Welcome to ThinkBlogger - Your source for the latest web development insights and tutorials. Learn React,
        Next.js, TypeScript, and more with our expert guides and practical examples.
      </marquee>
    </div>
  )
}
