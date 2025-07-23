import { useState } from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'

interface Post {
  title: string
  content: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Card One', content: 'This is the content of the first card.' },
    { title: 'Card Two', content: 'Another card with different content.' },
    { title: 'Card Three', content: 'This shows how reusable the Card component is.' },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost])
  }

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-6 text-lg text-gray-700">
          This is the home route of the project. Add your own cards dynamically!
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add New Post
        </button>

        {/* Render Post Cards */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {/* Modal Component */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  )
}