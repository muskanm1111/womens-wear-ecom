
import ProductFilters from "@/components/ProductFilters"
import ProductGrid from "@/components/ProductGrid"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { notFound } from "next/navigation"

const categories = ["all", "kurtas", "lehengas", "dresses", "sarees", "co-ords", "bandi", "sherwani-sets"]

const categoryNames = {
  all: "All Womenswear",
  kurtas: "Kurtas",
  lehengas: "Lehengas",
  dresses: "Dresses",
  sarees: "Sarees",
  "co-ords": "Co-ord Sets",
  bandi: "Bandi",
  "sherwani-sets": "Sherwani Sets",
}

export default function CategoryPage({ params }) {
  const category = params.category.toLowerCase()

  if (!categories.includes(category)) {
    notFound()
  }

  const categoryName = categoryNames[category] || "Products"

  return (
    <div className="min-h-screen bg-white">
     

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-gray-600 mt-2">Discover our collection of {categoryName.toLowerCase()}</p>
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
  )
}
