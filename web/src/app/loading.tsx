export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {/* Spinner */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-sky-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-sky-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-xl text-sky-700 font-semibold animate-pulse">
          Načítání...
        </p>
      </div>
    </div>
  );
}
