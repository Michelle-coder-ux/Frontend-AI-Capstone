export default function ExportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Download Your File
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
        Your cleaned file will be ready to download here.
      </p>
      <button className="rounded-full bg-black text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors">
        Download
      </button>
    </main>
  );
}