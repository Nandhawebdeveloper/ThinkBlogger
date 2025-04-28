"use client"

import { useBlogContext } from "@/context/blog-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface BlogListProps {
  limit?: number
  category?: string
}

export default function BlogList({ limit, category }: BlogListProps) {
  const { blogs } = useBlogContext()

  // Filter blogs by category if provided
  let filteredBlogs = blogs
  if (category && category !== "all") {
    filteredBlogs = blogs.filter((blog) => Array.isArray(blog.tags) && blog.tags.includes(category))
  }

  // Apply limit if provided
  const displayBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs

  if (displayBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No blogs yet</h3>
        <p className="text-muted-foreground mb-6">
          {category ? `No posts found in the "${category}" category.` : "Create your first blog post to get started"}
        </p>
        <Link href="/add-blog">
          <Button className="bg-orange-500 hover:bg-orange-600">Create New Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {displayBlogs.map((blog, index) => (
        <div key={blog.id} className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">{blog.title}</h3>
            <p className="text-lg">{blog.description}</p>
            <p className="text-muted-foreground">{formatDate(blog.date)}</p>
            <Link href={`/blog/${blog.id}`}>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-2">Read More</Button>
            </Link>
          </div>
          <div>
            <img
              src={blog.image || "/placeholder.svg?height=400&width=600"}
              alt={blog.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
