import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg text-gray-700">
          This page provides information about this project and showcases reusable components.
        </p>

        <div className="flex flex-col gap-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  )
}