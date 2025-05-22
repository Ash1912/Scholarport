export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Scholarport</h1>
      <p className="text-lg text-gray-600 mb-6">
        An AI + Human-powered education consultancy platform.
      </p>

      <div className="space-x-4">
        <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </a>
        <a href="/signup" className="bg-gray-200 px-4 py-2 rounded">
          Signup
        </a>
        <a href="/blog" className="text-blue-600 underline">
          Read our Blog
        </a>
      </div>
    </main>
  );
}
