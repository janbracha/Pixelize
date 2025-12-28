export default function KontaktLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Skeleton for title */}
        <div className="h-12 bg-gradient-to-r from-sky-200 to-blue-200 rounded-lg mb-12 animate-pulse"></div>
        
        {/* Skeleton for description */}
        <div className="h-6 bg-sky-100 rounded mb-12 w-3/4 mx-auto animate-pulse"></div>
        
        {/* Skeleton for form */}
        <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100 mb-12">
          <div className="h-8 bg-sky-200 rounded-lg mb-6 w-1/3 animate-pulse"></div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-12 bg-sky-100 rounded-lg animate-pulse"></div>
              <div className="h-12 bg-sky-100 rounded-lg animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-12 bg-sky-100 rounded-lg animate-pulse"></div>
              <div className="h-12 bg-sky-100 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-32 bg-sky-100 rounded-lg animate-pulse"></div>
            <div className="h-14 bg-gradient-to-r from-sky-200 to-blue-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
        
        {/* Skeleton for contact cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl">
              <div className="h-8 bg-sky-200 rounded-lg mb-6 w-2/3 animate-pulse"></div>
              <div className="space-y-4">
                <div className="h-4 bg-sky-100 rounded animate-pulse"></div>
                <div className="h-4 bg-sky-100 rounded animate-pulse w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
