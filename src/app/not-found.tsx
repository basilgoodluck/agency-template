import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/" className="mt-4 text-primary underline">
        Go back home
      </Link>
    </div>
  )
}
