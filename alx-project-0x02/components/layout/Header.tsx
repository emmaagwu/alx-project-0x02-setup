import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}