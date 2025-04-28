"use client"

import { useBlogContext } from "@/context/blog-context"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function PopularPosts() {
  const { blogs } = useBlogContext()

  // Sort blogs by view count
  const popularBlogs = [...blogs].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 4)

  if (popularBlogs.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-muted-foreground">No popular posts yet</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {popularBlogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="w-24 h-24 shrink-0">
                <img
                  src={blog.image || "/placeholder.svg?height=100&width=100"}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-1 line-clamp-2">{blog.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">{formatDate(blog.date)}</p>
                  {blog.views !== undefined && (
                    <span className="text-xs text-muted-foreground">{blog.views} views</span>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
