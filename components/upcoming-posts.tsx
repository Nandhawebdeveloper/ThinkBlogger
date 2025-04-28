export default function UpcomingPosts() {
  const upcomingPosts = [
    {
      title: "Why Your React App is Slow — And How You Can Fix It Today",
      date: "Coming next week",
      description: "Learn practical techniques to identify and fix performance bottlenecks in your React applications.",
    },
    {
      title: "React Server Components Explained (Without the Boring Theory)",
      date: "Coming soon",
      description: "A practical guide to understanding and implementing React Server Components in your projects.",
    },
    {
      title: "Modern JavaScript Tricks That Saved Me Hours of Coding",
      date: "In the works",
      description:
        "Discover time-saving JavaScript techniques that will make you more productive and your code more elegant.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {upcomingPosts.map((post, index) => (
        <div key={index} className="border rounded-lg p-6 bg-gray-50">
          <p className="text-sm font-medium text-orange-500 mb-2">{post.date}</p>
          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
          <p className="text-muted-foreground">{post.description}</p>
        </div>
      ))}
    </div>
  )
}
