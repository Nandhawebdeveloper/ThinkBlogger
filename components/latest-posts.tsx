"use client"

import { useBlogContext } from "@/context/blog-context"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function LatestPosts() {
  const { blogs } = useBlogContext()

  // Get the 3 most recent blogs
  const latestBlogs = blogs.slice(0, 3)

  if (latestBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No posts yet</h3>
        <p className="text-muted-foreground mb-6">Create your first blog post to get started</p>
        <Link href="/add-blog">
          <Button className="bg-orange-500 hover:bg-orange-600">Create New Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {latestBlogs.map((blog) => {
        const safeTags = Array.isArray(blog.tags) ? blog.tags : []

        return (
          <Card key={blog.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <img
                src={blog.image || "/placeholder.svg?height=300&width=500"}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="flex-grow pt-6">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  {safeTags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-sm text-muted-foreground">{formatDate(blog.date)}</p>
                <p className="line-clamp-3">{blog.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${blog.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
