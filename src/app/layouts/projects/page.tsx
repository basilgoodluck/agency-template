export default function Projects() {
    return (
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example project card */}
            <div className="bg-white dark:bg-neutral-700 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Project One
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                A brief description of the project goes here.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-700 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Project Two
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                A brief description of the project goes here.
              </p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>
    )
  }
  