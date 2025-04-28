"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Blog {
  id: string
  title: string
  description: string
  content: string
  image: string
  tags: string[]
  date: string
  views?: number
}

interface BlogContextType {
  blogs: Blog[]
  addBlog: (blog: Blog) => void
  deleteBlog: (id: string) => void
  updateBlog: (id: string, blog: Blog) => void
  incrementViews: (id: string) => void
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<Blog[]>([])

  // Load blogs from localStorage on initial render
  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs")
    if (storedBlogs) {
      try {
        setBlogs(JSON.parse(storedBlogs))
      } catch (error) {
        console.error("Failed to parse blogs from localStorage:", error)
      }
    } else {
      // Add sample blogs if none exist
      const sampleBlogs: Blog[] = [
        {
          id: "1",
          title: "Unlocking the Power of React Hooks: A Developer's Guide for 2025",
          description:
            "Discover how to leverage React Hooks to build more maintainable, efficient, and powerful components in your React applications.",
          content:
            "# Unlocking the Power of React Hooks: A Developer's Guide for 2025\n\nReact Hooks have revolutionized how we build React applications since their introduction in React 16.8. As we move into 2025, they've become even more powerful and essential for modern React development. In this guide, I'll walk you through the most important hooks, advanced patterns, and new features that every React developer should know.\n\n## The Evolution of Hooks\n\nWhen hooks were first introduced, they gave us a way to use state and other React features without writing classes. Fast forward to 2025, and the React team has expanded the hooks API significantly, making functional components the standard approach for React development.\n\n## Essential Hooks for 2025\n\n### 1. useState: Beyond the Basics\n\nWhile `useState` seems simple, there are advanced patterns that can make your code more efficient:\n\n```jsx\n// Instead of this\nconst [count, setCount] = useState(0);\nconst increment = () => setCount(count + 1);\n\n// Do this for more reliable state updates\nconst increment = () => setCount(prev => prev + 1);\n```\n\nThe functional update pattern ensures you're always working with the most current state, especially important in async operations.\n\n### 2. useEffect: Cleaning Up Your Side Effects\n\nProper cleanup in `useEffect` is crucial for preventing memory leaks and unexpected behavior.\n\n### 3. useCallback and useMemo: Performance Optimization\n\nThese hooks are essential for preventing unnecessary re-renders in complex applications.\n\n## Custom Hooks: Building Your Toolkit\n\nCreating custom hooks is one of the most powerful ways to reuse logic across components.",
          image: "https://picsum.photos/600/400?random=1",
          tags: ["react", "hooks", "frontend"],
          date: new Date().toISOString(),
          views: 125,
        },
        {
          id: "2",
          title: "Redux Toolkit or Zustand? My Honest Take After 2 Years in Frontend",
          description:
            "A detailed comparison of Redux Toolkit and Zustand based on real-world experience in production applications.",
          content:
            "# Redux Toolkit or Zustand? My Honest Take After 2 Years in Frontend\n\nState management is a critical aspect of any React application, and choosing the right library can significantly impact your development experience and application performance. After using both Redux Toolkit and Zustand extensively in production applications for the past two years, I want to share my insights on their strengths, weaknesses, and ideal use cases.\n\n## Redux Toolkit: The Established Solution\n\nRedux has been the go-to state management solution for React applications for years, and Redux Toolkit (RTK) has significantly improved the developer experience by reducing boilerplate and providing sensible defaults.\n\n### Strengths of Redux Toolkit\n\n1. **Mature Ecosystem**: The Redux ecosystem is vast, with numerous middleware, extensions, and developer tools available.\n2. **Predictable State Updates**: The strict unidirectional data flow makes debugging and testing easier.\n3. **DevTools**: The Redux DevTools Extension provides powerful debugging capabilities.\n4. **RTK Query**: Built-in data fetching and caching solution that reduces the need for additional libraries.\n\n### Weaknesses of Redux Toolkit\n\n1. **Learning Curve**: Despite improvements, RTK still has concepts that can be challenging for beginners.\n2. **Verbosity**: Even with RTK, you still write more code compared to simpler alternatives.\n3. **Performance Considerations**: Without careful implementation, Redux can lead to unnecessary re-renders.\n\n## Zustand: The Modern Contender\n\nZustand has gained significant popularity as a lightweight, hook-based state management solution that aims to simplify global state management in React applications.\n\n### Strengths of Zustand\n\n1. **Simplicity**: Zustand's API is minimal and intuitive, making it easy to learn and use.\n2. **Performance**: Zustand uses a subscription model that can result in fewer re-renders.\n3. **TypeScript Support**: Excellent TypeScript integration out of the box.\n4. **Middleware System**: Flexible middleware system similar to Redux but with less boilerplate.\n\n### Weaknesses of Zustand\n\n1. **Smaller Ecosystem**: Fewer extensions and integrations compared to Redux.\n2. **Less Structured**: The flexibility can lead to inconsistent patterns across larger applications.\n3. **DevTools**: While supported, the developer tools aren't as comprehensive as Redux DevTools.\n\n## When to Choose Redux Toolkit\n\nRedux Toolkit remains an excellent choice for:\n\n1. **Large, Complex Applications**: When you need a strict, predictable state management pattern.\n2. **Team Environments**: When you have a larger team that benefits from enforced patterns and conventions.\n3. **Data-Heavy Applications**: When you need RTK Query for efficient data fetching and caching.\n\n## When to Choose Zustand\n\nZustand shines in these scenarios:\n\n1. **Small to Medium Applications**: When you want to avoid boilerplate and get up and running quickly.\n2. **Performance-Critical Applications**: When you need fine-grained control over re-renders.\n3. **Modern React Codebases**: When you prefer a hooks-first approach that aligns with modern React patterns.",
          image: "https://picsum.photos/600/400?random=2",
          tags: ["redux", "zustand", "state-management"],
          date: new Date(Date.now() - 86400000).toISOString(),
          views: 98,
        },
        {
          id: "3",
          title: "Tailwind Magic: How I Built a Pixel-Perfect UI in Half the Time",
          description:
            "Learn how Tailwind CSS can dramatically speed up your UI development process while maintaining design fidelity.",
          content:
            '# Tailwind Magic: How I Built a Pixel-Perfect UI in Half the Time\n\nWhen I first encountered Tailwind CSS, I was skeptical. The utility-first approach seemed verbose and counterintuitive compared to the semantic CSS I was used to writing. Fast forward to today, and I can confidently say that Tailwind has revolutionized how I build user interfaces, cutting development time in half while achieving pixel-perfect results.\n\n## The Traditional Approach vs. Tailwind\n\nBefore Tailwind, my workflow typically involved:\n\n1. Creating semantic HTML structure\n2. Writing custom CSS with carefully chosen class names\n3. Constantly switching between HTML and CSS files\n4. Dealing with specificity issues and CSS conflicts\n5. Managing growing CSS files as the project expanded\n\nWith Tailwind, my workflow transformed to:\n\n1. Building components directly in HTML/JSX with utility classes\n2. Staying in one file for both structure and styling\n3. Achieving consistent spacing, colors, and responsive behavior\n4. Reusing patterns without writing custom CSS\n\n## Real-World Example: Dashboard Redesign\n\nRecently, I was tasked with redesigning a client\'s dashboard interface. The design was complex, with intricate card layouts, custom dropdowns, and responsive behavior requirements. Using traditional CSS, this would have taken me at least a week to implement accurately.\n\nWith Tailwind, I completed the entire interface in just 3 days. Here\'s how:\n\n### 1. Rapid Prototyping\n\nTailwind\'s utility classes allowed me to quickly prototype layouts and components directly in the browser:\n\n```jsx\n<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n  <div className="bg-white rounded-lg shadow-md p-6">\n    {/* Card content */}\n  </div>\n  {/* More cards */}\n</div>\n```\n\n### 2. Consistent Design System\n\nTailwind\'s configuration allowed me to establish a consistent design system based on the client\'s brand:\n\n```js\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: \'#0047AB\',\n        secondary: \'#6B7280\',\n        // other brand colors\n      },\n      // custom spacing, border radius, etc.\n    }\n  }\n}\n```\n\n### 3. Responsive Design Made Simple\n\nImplementing responsive behavior was straightforward with Tailwind\'s responsive modifiers:\n\n```jsx\n<div className="flex flex-col sm:flex-row items-center justify-between">\n  <div className="w-full sm:w-1/2 mb-4 sm:mb-0">\n    {/* Content */}\n  </div>\n  <div className="w-full sm:w-1/2">\n    {/* Content */}\n  </div>\n</div>\n```\n\n## Overcoming Common Tailwind Objections\n\n### "But the HTML looks messy!"\n\nThis is often the first reaction to Tailwind. However, when working with component-based frameworks like React, you\'re breaking your UI into small, reusable components anyway. The utility classes stay with their components, making the relationship between structure and style clear and maintainable.',
          image: "https://picsum.photos/600/400?random=3",
          tags: ["tailwind", "css", "ui-design"],
          date: new Date(Date.now() - 172800000).toISOString(),
          views: 156,
        },
        {
          id: "4",
          title: "Stop Overthinking! API Integration in React Made Simple",
          description:
            "A practical guide to simplifying API integrations in React applications with custom hooks and best practices.",
          content:
            "# Stop Overthinking! API Integration in React Made Simple\n\nAPI integration is a fundamental aspect of modern web development, yet it's an area where many React developers overcomplicate things. After years of building React applications with various API integration patterns, I've settled on an approach that strikes the perfect balance between simplicity, reusability, and maintainability.\n\n## The Problem with Common Approaches\n\nMany React developers fall into these common traps when integrating APIs:\n\n1. **Directly calling APIs in useEffect**: This leads to duplicated code across components and makes error handling inconsistent.\n2. **Over-engineering with complex state management**: Using Redux or other state management libraries for simple data fetching adds unnecessary complexity.\n3. **Reinventing the wheel**: Building custom solutions when existing libraries would suffice.\n\n## A Simpler Approach: Custom Hooks + React Query\n\nThe approach I've found most effective combines custom hooks with React Query (or SWR). Here's how it works:\n\n### 1. Create an API Client\n\nFirst, establish a centralized API client using a library like Axios:\n\n```jsx\n// api/client.js\nimport axios from 'axios';\n\nconst apiClient = axios.create({\n  baseURL: '/api', // Use relative URL instead of environment variable\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});\n\n// Add request/response interceptors for auth, error handling, etc.\napiClient.interceptors.request.use(config => {\n  const token = localStorage.getItem('token');\n  if (token) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  return config;\n});\n\nexport default apiClient;\n```\n\n### 2. Create API Service Modules\n\nNext, create service modules for different API domains:\n\n```jsx\n// api/services/userService.js\nimport apiClient from '../client';\n\nexport const userService = {\n  getUser: (id) => apiClient.get(`/users/${id}`),\n  updateUser: (id, data) => apiClient.put(`/users/${id}`, data),\n  // other user-related API calls\n};\n```\n\n### 3. Create Custom Hooks with React Query\n\nFinally, create custom hooks that use React Query to handle caching, loading states, and error handling:\n\n```jsx\n// hooks/useUser.js\nimport { useQuery, useMutation, useQueryClient } from 'react-query';\nimport { userService } from '../api/services/userService';\n\nexport function useUser(id) {\n  return useQuery(['user', id], () => \n    userService.getUser(id).then(res => res.data)\n  );\n}\n\nexport function useUpdateUser() {\n  const queryClient = useQueryClient();\n  \n  return useMutation(\n    (data) => userService.updateUser(data.id, data).then(res => res.data),\n    {\n      onSuccess: (data) => {\n        queryClient.invalidateQueries(['user', data.id]);\n      },\n    }\n  );\n}\n```\n\n### 4. Use the Hooks in Components\n\nNow, using these hooks in components becomes incredibly simple:\n\n```jsx\nfunction UserProfile({ userId }) {\n  const { data: user, isLoading, error } = useUser(userId);\n  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();\n  \n  if (isLoading) return <Spinner />;\n  if (error) return <ErrorMessage error={error} />;\n  \n  const handleSubmit = (formData) => {\n    updateUser({ id: userId, ...formData });\n  };\n  \n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <UserForm initialData={user} onSubmit={handleSubmit} isSubmitting={isUpdating} />\n    </div>\n  );\n}\n```\n\n## Benefits of This Approach\n\n1. **Separation of Concerns**: API logic is separated from UI components.\n2. **Reusability**: Hooks can be reused across multiple components.\n3. **Built-in Caching**: React Query handles caching, reducing unnecessary network requests.\n4. **Loading and Error States**: Consistent handling of loading and error states.\n5. **Optimistic Updates**: React Query makes it easy to implement optimistic UI updates.",
          image: "https://picsum.photos/600/400?random=4",
          tags: ["react", "api", "react-query"],
          date: new Date(Date.now() - 259200000).toISOString(),
          views: 87,
        },
        {
          id: "5",
          title: "My Journey from Figma Designs to Fully Functional React Apps",
          description:
            "A step-by-step walkthrough of my process for transforming Figma designs into polished React applications.",
          content:
            "# My Journey from Figma Designs to Fully Functional React Apps\n\nTransforming a beautiful Figma design into a fully functional React application can be a daunting task, especially when you're working with complex designs and intricate interactions. Over the years, I've refined my process to make this journey smoother and more efficient. In this post, I'll walk you through my step-by-step approach, from receiving Figma designs to delivering a polished React application.\n\n## Step 1: Understanding the Design\n\nBefore writing a single line of code, I spend time thoroughly understanding the design:\n\n### Design Analysis\n\n1. **Identify Components**: I break down the design into potential React components, looking for repeating elements and patterns.\n2. **Analyze Design System**: I note the color palette, typography, spacing, and other design tokens.\n3. **Understand Interactions**: I review any prototypes or interaction notes to understand how elements should behave.\n\n### Designer Collaboration\n\nI schedule a call with the designer to discuss:\n\n- Any areas that might be technically challenging\n- How certain interactions should work\n- Responsive behavior expectations\n- Edge cases not covered in the design\n\n## Step 2: Setting Up the Project\n\nWith a clear understanding of the design, I set up my React project:\n\n### Project Initialization\n\n```bash\n# Using Create React App with TypeScript\nnpx create-react-app my-app --template typescript\n\n# Or using Next.js (my preferred choice for most projects)\nnpx create-next-app my-app --typescript\n```\n\n### Design System Implementation\n\nI set up the design tokens from Figma as CSS variables or a theme configuration:\n\n```jsx\n// For Tailwind CSS (my preferred approach)\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: {\n          50: '#f0f9ff',\n          100: '#e0f2fe',\n          // ... colors from Figma\n          900: '#0c4a6e',\n        },\n        // other color scales\n      },\n      fontFamily: {\n        sans: ['Inter', 'sans-serif'],\n        // other font families\n      },\n      // other design tokens\n    },\n  },\n  // other config\n};\n```\n\n## Step 3: Component Architecture\n\nBefore diving into implementation, I plan my component architecture:\n\n### Component Hierarchy\n\nI create a component hierarchy diagram, identifying:\n\n- Page components\n- Layout components\n- UI components\n- Shared components\n\n### State Management Planning\n\nI determine what state management approach is appropriate:\n\n- Local component state using useState\n- Context API for shared state\n- Redux/Zustand/Jotai for more complex applications\n\n## Step 4: Building the UI Layer\n\nNow I start implementing the UI, focusing on appearance before functionality:\n\n### Component Implementation\n\nI start with the smallest UI components and work my way up:\n\n```jsx\n// Button component example\nfunction Button({ variant = 'primary', size = 'md', children, ...props }) {\n  const variantClasses = {\n    primary: 'bg-primary-600 hover:bg-primary-700 text-white',\n    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',\n    // other variants\n  };\n  \n  const sizeClasses = {\n    sm: 'px-3 py-1.5 text-sm',\n    md: 'px-4 py-2',\n    lg: 'px-6 py-3 text-lg',\n  };\n  \n  return (\n    <button\n      className={`rounded-md font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]}`}\n      {...props}\n    >\n      {children}\n    </button>\n  );\n}\n```\n\n### Layout Implementation\n\nI implement the layout components that will structure the pages:\n\n```jsx\nfunction DashboardLayout({ children }) {\n  return (\n    <div className=\"min-h-screen bg-gray-50\">\n      <Sidebar />\n      <div className=\"ml-64 p-8\">\n        <TopBar />\n        <main>{children}</main>\n      </div>\n    </div>\n  );\n}\n```\n\n## Step 5: Adding Functionality\n\nWith the UI components in place, I add functionality:\n\n### Data Fetching\n\nI implement API integration using React Query or SWR:\n\n```jsx\nfunction UserList() {\n  const { data, isLoading, error } = useQuery('users', fetchUsers);\n  \n  if (isLoading) return <Spinner />;\n  if (error) return <ErrorMessage error={error} />;\n  \n  return (\n    <div className=\"space-y-4\">\n      {data.map(user => (\n        <UserCard key={user.id} user={user} />\n      ))}\n    </div>\n  );\n}\n```\n\n### Form Handling\n\nI implement forms using React Hook Form or Formik:\n\n```jsx\nfunction ProfileForm({ onSubmit, initialData }) {\n  const { register, handleSubmit, formState: { errors } } = useForm({\n    defaultValues: initialData,\n  });\n  \n  return (\n    <form onSubmit={handleSubmit(onSubmit)} className=\"space-y-6\">\n      <div>\n        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700\">Name</label>\n        <input\n          id=\"name\"\n          {...register('name', { required: 'Name is required' })}\n          className=\"mt-1 block w-full rounded-md border-gray-300 shadow-sm\"\n        />\n        {errors.name && <p className=\"mt-1 text-sm text-red-600\">{errors.name.message}</p>}\n      </div>\n      \n      {/* Other form fields */}\n      \n      <Button type=\"submit\">Save Changes</Button>\n    </form>\n  );\n}\n```\n\n## Step 6: Animation and Interaction\n\nI add animations and interactions to match the Figma prototypes:\n\n### Animation Implementation\n\nI use Framer Motion for animations:\n\n```jsx\nimport { motion } from 'framer-motion';\n\nfunction FadeIn({ children }) {\n  return (\n    <motion.div\n      initial={{ opacity: 0 }}\n      animate={{ opacity: 1 }}\n      transition={{ duration: 0.3 }}\n    >\n      {children}\n    </motion.div>\n  );\n}\n```\n\n## Step 7: Testing and Refinement\n\nFinally, I test and refine the implementation:\n\n### Testing\n\n1. **Component Testing**: Using React Testing Library\n2. **Integration Testing**: Testing component interactions\n3. **Visual Testing**: Comparing the implementation with Figma designs\n\n### Refinement\n\nI make adjustments based on testing and feedback:\n\n1. **Performance Optimization**: Using React.memo, useMemo, and useCallback where needed\n2. **Accessibility Improvements**: Ensuring proper ARIA attributes and keyboard navigation\n3. **Responsive Adjustments**: Fine-tuning responsive behavior\n\n## Conclusion\n\nTransforming Figma designs into React applications is a journey that requires both technical skill and creative problem-solving. By following a structured process and maintaining close collaboration with designers, you can create faithful implementations that not only look great but also provide excellent user experiences.",
          image: "https://picsum.photos/600/400?random=5",
          tags: ["figma", "react", "ui-design"],
          date: new Date(Date.now() - 345600000).toISOString(),
          views: 210,
        },
      ]
      setBlogs(sampleBlogs)
      localStorage.setItem("blogs", JSON.stringify(sampleBlogs))
    }
  }, [])

  // Save blogs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs))
  }, [blogs])

  const addBlog = (blog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog])
  }

  const deleteBlog = (id: string) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
  }

  const updateBlog = (id: string, updatedBlog: Blog) => {
    setBlogs((prevBlogs) => prevBlogs.map((blog) => (blog.id === id ? updatedBlog : blog)))
  }

  const incrementViews = (id: string) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => {
        if (blog.id === id) {
          return {
            ...blog,
            views: (blog.views || 0) + 1,
          }
        }
        return blog
      }),
    )
  }

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, updateBlog, incrementViews }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlogContext() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error("useBlogContext must be used within a BlogProvider")
  }
  return context
}
