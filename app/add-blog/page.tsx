"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { useBlogContext } from "@/context/blog-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import MultiSelect from "@/components/multi-select"

export default function AddBlogPage() {
  const router = useRouter()
  const { addBlog } = useBlogContext()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const randomNum = Math.floor(Math.random() * 1000)
    const newBlog = {
      id: uuidv4(),
      title,
      description,
      content,
      image: `https://picsum.photos/600/400?random=${randomNum}`,
      tags,
      date: new Date().toISOString(),
    }

    addBlog(newBlog)
    setIsSubmitting(false)
    router.push("/")
  }

  const tagOptions = [
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "nextjs", label: "Next.js" },
    { value: "frontend", label: "Frontend" },
    { value: 'backend", label:  label: "Next.js' },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "css", label: "CSS" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "ui-design", label: "UI Design" },
    { value: "api", label: "API" },
    { value: "hooks", label: "React Hooks" },
    { value: "state-management", label: "State Management" },
    { value: "redux", label: "Redux" },
    { value: "zustand", label: "Zustand" },
    { value: "react-query", label: "React Query" },
    { value: "figma", label: "Figma" },
  ]

  return (
    <div className="container py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Add New Blog Post</CardTitle>
          <CardDescription>Create a new blog post to share with your readers.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a short description"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here (Markdown supported)"
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <MultiSelect options={tagOptions} selected={tags} onChange={setTags} placeholder="Select tags" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Blog Post"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
