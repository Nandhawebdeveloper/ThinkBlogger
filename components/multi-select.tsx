"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Option {
  label: string
  value: string
}

interface MultiSelectProps {
  options?: Option[]
  selected?: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
}

export function MultiSelect({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select items...",
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Ensure we're working with arrays
  const safeOptions = Array.isArray(options) ? options : []
  const safeSelected = Array.isArray(selected) ? selected : []

  // Handle clicking outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Remove an item from selection
  const handleRemove = (value: string) => {
    onChange(safeSelected.filter((item) => item !== value))
  }

  // Add an item to selection
  const handleSelect = (value: string) => {
    if (!safeSelected.includes(value)) {
      onChange([...safeSelected, value])
    }
    setIsOpen(false)
  }

  // Filter out already selected options
  const availableOptions = safeOptions.filter((option) => !safeSelected.includes(option.value))

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Selected items and input */}
      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-10 cursor-text" onClick={() => setIsOpen(true)}>
        {safeSelected.length > 0 ? (
          safeSelected.map((value) => {
            const option = safeOptions.find((o) => o.value === value)
            return (
              <Badge key={value} variant="secondary" className="flex items-center gap-1">
                {option?.label || value}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(value)
                  }}
                />
              </Badge>
            )
          })
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && availableOptions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-md max-h-60 overflow-auto">
          <div className="p-1">
            {availableOptions.map((option) => (
              <div
                key={option.value}
                className="px-2 py-1.5 text-sm rounded hover:bg-muted cursor-pointer"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiSelect
