import Header from '@/components/layout/Header'

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="text-lg text-gray-700 mt-4">
          This is the posts page. You can list or manage blog posts here.
        </p>
      </main>
    </>
  );
}