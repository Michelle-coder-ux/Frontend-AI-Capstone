export default async function HealthCheck() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Health Check
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-4">
        This page proves data-fetching is working.
      </p>
      <pre className="text-left bg-gray-100 text-gray-800 rounded-lg p-4 text-sm sm:text-base max-w-md w-full overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}