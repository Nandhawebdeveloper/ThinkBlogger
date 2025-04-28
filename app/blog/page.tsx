import BlogList from "@/components/blog-list"
import SearchBar from "@/components/search-bar"
import CategoryTabs from "@/components/category-tabs"

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1e1e1e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore our collection of articles, tips, and insights</p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SearchBar />
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Browse by Category</h3>
              <CategoryTabs />
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">All Posts</h2>
          <BlogList />
        </div>
      </section>
    </div>
  )
}
