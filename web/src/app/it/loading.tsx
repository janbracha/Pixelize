export default function ITLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Skeleton for title */}
        <div className="h-12 bg-gradient-to-r from-sky-200 to-blue-200 rounded-lg mb-12 animate-pulse"></div>
        
        {/* Skeleton for intro paragraph */}
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg mb-12">
          <div className="space-y-3">
            <div className="h-4 bg-sky-100 rounded animate-pulse"></div>
            <div className="h-4 bg-sky-100 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-sky-100 rounded animate-pulse w-4/6"></div>
          </div>
        </div>
        
        {/* Skeleton for sections */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg">
              <div className="h-8 bg-sky-200 rounded-lg mb-4 w-2/3 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-3 bg-sky-100 rounded animate-pulse"></div>
                <div className="h-3 bg-sky-100 rounded animate-pulse w-5/6"></div>
                <div className="h-3 bg-sky-100 rounded animate-pulse w-4/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
