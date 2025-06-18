



import ProductFilters from "@/components/productFilters";
import ProductGrid from "@/components/productgrid";


export default function NewInPage() {
  return (
    <div className="min-h-screen bg-white">
    
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">New Arrivals</h1>
            <p className="text-gray-600 mt-2">
              Discover our latest collection of ethnic and fusion wear
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </main>

    </div>
  );
}
