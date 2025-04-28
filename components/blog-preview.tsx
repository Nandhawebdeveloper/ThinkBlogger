import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

interface BlogPreviewProps {
  blog: {
    id: string
    title: string
    description: string
    content: string
    image: string
    tags: string[]
    date: string
  }
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  // Ensure tags is always an array
  const safeTags = Array.isArray(blog.tags) ? blog.tags : []

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Preview</h2>
        <div className="border-t pt-4">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-[300px] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <p className="text-muted-foreground">{formatDate(blog.date)}</p>
            <div className="flex flex-wrap gap-2">
              {safeTags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-lg text-muted-foreground mb-8">{blog.description}</div>

          <div className="prose max-w-none">
            {blog.content.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
