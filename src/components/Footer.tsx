// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  