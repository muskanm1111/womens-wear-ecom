"use client"



import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"


import ProductGrid from "@/components/productgrid"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [suggestions, setSuggestions] = useState([])

  const popularSearches = ["Kurtas", "Lehengas", "Silk sarees", "Wedding collection", "Festive wear", "Co-ord sets"]

  useEffect(() => {
    if (searchQuery.length > 2) {
      // Mock search suggestions
      const mockSuggestions = [
        "Silk kurtas",
        "Cotton kurtas",
        "Embroidered kurtas",
        "Designer lehengas",
        "Bridal lehengas",
      ].filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
      setSuggestions(mockSuggestions)
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-white">
 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Search Products"}
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for kurtas, lehengas, sarees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-20 h-12 text-lg"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rose-600 hover:bg-rose-700"
              >
                Search
              </Button>
            </div>

            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(suggestion)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </form>
        </div>

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <Button key={search} variant="outline" onClick={() => setSearchQuery(search)} className="rounded-full">
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <div>
            <p className="text-gray-600 mb-6">Showing results for &quot;{searchQuery}&quot;</p>
            <ProductGrid />
          </div>
        )}
      </main>


    </div>
  )
}
