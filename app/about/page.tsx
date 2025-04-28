import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1e1e1e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ThinkBlogger</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We help writers create amazing content and get paid what they're worth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Our Mission</h2>
              <p>
                Welcome to BlogCraft, a platform designed to help you share your thoughts, ideas, and stories with the
                world.
              </p>
              <p>
                This platform lets you share your thoughts and ideas by creating blog posts easily. Whether you're a
                seasoned writer or just starting out, BlogCraft provides the tools you need to create engaging content.
              </p>

              <h2>Our Story</h2>
              <p>
                Our simple, intuitive interface allows you to focus on what matters most - your writing. With BlogCraft,
                you can create, preview, and publish your blog posts all in one place.
              </p>
              <p>We believe that everyone has a story to tell, and we're here to help you tell yours.</p>

              <h2>Join Our Community</h2>
              <p>
                Ready to start your blogging journey? Join thousands of writers who are already sharing their ideas and
                making an impact.
              </p>

              <div className="mt-8">
                <Link href="/add-blog">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    Start Writing Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
