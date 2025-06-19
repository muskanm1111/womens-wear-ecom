"use client";

import { useState } from "react";


import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-white">
    

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-600 mt-2">
              Discover our complete collection
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
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
