import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const data = await res.json()
        const formattedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }))
        setPosts(formattedPosts)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </>
  )
}