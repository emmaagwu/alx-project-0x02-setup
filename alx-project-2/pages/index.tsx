import Head from 'next/head'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-semibold">Welcome to ALX Project 0x02</h1>
      </main>
    </>
  );
}