export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Data Cleaner
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
        Upload a messy spreadsheet or text file, and we&apos;ll clean it up
        for you — removing duplicates, fixing formatting, and explaining
        exactly what changed.
      </p>
      <a
        href="/upload"
        className="rounded-full bg-black text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
      >
        Get Started
      </a>
    </main>
  );
}
