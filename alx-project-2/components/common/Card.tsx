
import { CardProps } from '@/interfaces'

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
