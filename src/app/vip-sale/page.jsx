
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function VIPSalePage() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Sale Banner */}
      <div className="bg-rose-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">VIP SALE</h1>
          <p className="text-xl md:text-2xl mb-6">
            Up to 70% off on selected items
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 rounded-lg p-4 text-center min-w-[70px]">
              <span className="block text-3xl font-bold">02</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center min-w-[70px]">
              <span className="block text-3xl font-bold">12</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center min-w-[70px]">
              <span className="block text-3xl font-bold">45</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center min-w-[70px]">
              <span className="block text-3xl font-bold">30</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sale Items</h2>
            <p className="text-gray-600 mt-2">
              Limited time offers on premium ethnic wear
            </p>
          </div>

          <Button variant="outline" className="lg:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
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
