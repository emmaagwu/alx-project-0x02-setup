import { type PostProps } from '@/interfaces'

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  )
}