"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useBlogContext } from "@/context/blog-context"

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { blogs } = useBlogContext()

  // Extract all unique categories from blog tags
  const allCategories = new Set<string>()
  allCategories.add("all")

  blogs.forEach((blog) => {
    if (Array.isArray(blog.tags)) {
      blog.tags.forEach((tag) => allCategories.add(tag))
    }
  })

  const categories = Array.from(allCategories)

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={activeCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
          onClick={() => setActiveCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </div>
  )
}
