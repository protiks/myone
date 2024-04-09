import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <header className="text-4xl font-bold mb-8">Protik Sarkar</header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in transform hover:scale-105">
            <Image src="/psone/app/omw.png" alt="Project 1" width={400} height={300} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Circles & Squares</h2>
              <p className="text-gray-600">Description of project 1 goes here.</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in transform hover:scale-105">
            <Image src="/project2.jpg" alt="Project 2" width={400} height={300} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project 2</h2>
              <p className="text-gray-600">Description of project 2 goes here.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-gray-500 mt-auto py-4">
        © 2024 Protik Sarkar. All rights reserved.
      </footer>
    </div>
  );
}
