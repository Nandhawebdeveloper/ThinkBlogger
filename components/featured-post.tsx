"use client"

import { useBlogContext } from "@/context/blog-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export default function FeaturedPost() {
  const { blogs } = useBlogContext()

  // Get the blog with the most views as featured
  const featuredBlog = blogs.length > 0 ? [...blogs].sort((a, b) => (b.views || 0) - (a.views || 0))[0] : null

  if (!featuredBlog) {
    return (
      <div className="text-center py-12 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-medium mb-2">No featured post yet</h3>
        <p className="text-muted-foreground mb-6">Create your first blog post to feature it here</p>
        <Link href="/add-blog">
          <Button className="bg-orange-500 hover:bg-orange-600">Create New Blog</Button>
        </Link>
      </div>
    )
  }

  const safeTags = Array.isArray(featuredBlog.tags) ? featuredBlog.tags : []

  return (
    <div className="grid md:grid-cols-5 gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="md:col-span-3">
        <img
          src={featuredBlog.image || "/placeholder.svg?height=600&width=800"}
          alt={featuredBlog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-2 p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {safeTags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4">{featuredBlog.title}</h3>
          <p className="text-muted-foreground mb-2">{formatDate(featuredBlog.date)}</p>
          {featuredBlog.views && <p className="text-sm text-muted-foreground mb-4">{featuredBlog.views} views</p>}
          <p className="text-lg mb-6">{featuredBlog.description}</p>
        </div>
        <Link href={`/blog/${featuredBlog.id}`}>
          <Button className="bg-orange-500 hover:bg-orange-600 w-full">Read Full Post</Button>
        </Link>
      </div>
    </div>
  )
}
