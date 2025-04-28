"use client"

import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { useBlogContext } from "@/context/blog-context"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function BlogPage() {
  const params = useParams()
  const { blogs, incrementViews } = useBlogContext()
  const viewIncremented = useRef(false)

  const foundBlog = blogs.find((blog) => blog.id === params.id)

  useEffect(() => {
    if (foundBlog && !viewIncremented.current) {
      incrementViews(foundBlog.id)
      viewIncremented.current = true
    }
  }, [foundBlog, incrementViews])

  if (!foundBlog) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Link href="/" className="text-blue-500 hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Link href="/" className="text-blue-500 hover:underline flex items-center mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <div className="max-w-3xl mx-auto">
        <img
          src={foundBlog.image || "/placeholder.svg"}
          alt={foundBlog.title}
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{foundBlog.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
          <span>{format(new Date(foundBlog.date), "MMMM d, yyyy")}</span>
          <span>•</span>
          <span>{foundBlog.views || 0} views</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {foundBlog.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{foundBlog.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
