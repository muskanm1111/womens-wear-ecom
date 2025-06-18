"use client"


import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useShop } from "../../context/ShopContext"


export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useShop()
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [recentSearches, setRecentSearches] = useState([])

  const popularSearches = ["Kurtas", "Lehengas", "Silk sarees", "Wedding collection", "Festive wear", "Co-ord sets"]

  useEffect(() => {
    // Load recent searches from localStorage
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

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

  const handleSearch = (query) => {
    if (!query.trim()) return

    // Save to recent searches
    const updatedSearches = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5)

    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))

    // Close search overlay and redirect
    closeSearch()
    // In a real app, you would redirect to search results page
    console.log("Searching for:", query)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeSearch()
    } else if (e.key === "Enter") {
      handleSearch(searchQuery)
    }
  }

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col"
          onClick={closeSearch}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white w-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6 mt-28">
                <h2 className="text-xl font-bold">Search Products</h2>
                <Button variant="ghost" size="icon" onClick={closeSearch}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for kurtas, lehengas, sarees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-20 h-12 text-lg"
                  autoFocus
                />
                <Button
                  onClick={() => handleSearch(searchQuery)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rose-600 hover:bg-rose-700"
                >
                  Search
                </Button>
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Suggestions</h3>
                  <ul className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSearch(suggestion)}
                          className="flex items-center text-gray-800 hover:text-rose-600"
                        >
                          <Search className="h-4 w-4 mr-2 text-gray-400" />
                          {suggestion}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recent Searches */}
              {recentSearches.length > 0 && !searchQuery && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchQuery(search)}
                        className="rounded-full"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              {!searchQuery && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchQuery(search)}
                        className="rounded-full"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
