import FeaturedPost from "@/components/featured-post"
import LatestPosts from "@/components/latest-posts"
import PopularPosts from "@/components/popular-posts"
import SearchBar from "@/components/search-bar"
import CategoryTabs from "@/components/category-tabs"
import NewsletterSignup from "@/components/newsletter-signup"
import AboutBlog from "@/components/about-blog"
import BlogMarquee from "@/components/blog-marquee"

export default function HomePage() {
  return (
    <main>
      <BlogMarquee />
      <div className="bg-[#1e1e1e] text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: '#4BB4E6' }}
            >WELCOME BLOGGERS</h1>
            <p className="text-xl md:text-2xl mb-8">
             Turning Ideas Into Reality Through Code, Design, and Daily Growth — A Blog for Dreamers and Developers.
            </p>
           {/* <div>
              <p className="text-lg mb-4">Premium training. Yours for free.</p>
              <a
                href="#newsletter"
                className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-md font-medium hover:bg-[#e55a2a] transition-colors"
              >
                YES PLEASE
              </a>
            </div>*/}
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <FeaturedPost />
            <CategoryTabs />
            <LatestPosts />
          </div>
          <div className="space-y-8">
            <SearchBar />
            <AboutBlog />
            <NewsletterSignup />
            <PopularPosts />
          </div>
        </div>
      </div>
    </main>
  )
}
