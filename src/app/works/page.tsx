import { Intro } from "@/components/intro";

export default function Works() {
  return (
    <div className="">
      <Intro />
      <main className="max-w-xl mx-auto my-4 px-4">
        <div className="py-4">
          <h2 className="text-xl font-semibold mb-4">My Works</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Project One</h3>
              <p className="text-gray-600 mb-2">
                A brief description of this project and what technologies were used to build it.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Next.js</span>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Project Two</h3>
              <p className="text-gray-600 mb-2">
                Another project showcasing different skills and technologies in my toolkit.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Machine Learning</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">TensorFlow</span>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Project Three</h3>
              <p className="text-gray-600 mb-2">
                A third project demonstrating my experience with backend development and APIs.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">PostgreSQL</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">REST API</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
