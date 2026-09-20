export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Upload Your File
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
        Choose a spreadsheet or text file to clean up.
      </p>
      <input
        type="file"
        className="text-sm sm:text-base"
      />
    </main>
  );
}