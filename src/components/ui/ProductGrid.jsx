"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Eye, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx"
import { usePathname } from "next/navigation"
import { useShop } from "@/context/ShopContext"


// Mock product data generator
const generateProducts = (count, category) => {
  const categories = ["Kurtas", "Lehengas", "Dresses", "Sarees", "Co-ords", "Accessories"]
  const productImages = [
    "/product1.webp",
    "/product2.webp",
    "/product3.webp",
    "/product4.webp",
    "/product5.webp",
    "/product6.webp",
    "/sarees.webp",
    "/kurta.avif",
    "/dresses.avif",
    "/lehnga.webp",
  ]

  return Array.from({ length: count }, (_, i) => {
    const productCategory = category || categories[Math.floor(Math.random() * categories.length)]
    const isNew = Math.random() > 0.7
    const price = Math.floor(Math.random() * 10000) + 1000
    const discount = Math.floor(Math.random() * 30) + 10
    const originalPrice = Math.floor(price * (100 / (100 - discount)))

    // Select image based on category or use random image
    let image
    if (productCategory === "Sarees") {
      image = "/sarees.webp"
    } else if (productCategory === "Kurtas") {
      image = "/kurta.avif"
    } else if (productCategory === "Dresses") {
      image = "/dresses.avif"
    } else if (productCategory === "Lehengas") {
      image = "/lehnga.webp"
    } else {
      // For other categories, use random product image
      image = productImages[Math.floor(Math.random() * productImages.length)]
    }

    return {
      id: i + 1,
      name: `${productCategory === "Accessories" ? "Designer" : "Elegant"} ${productCategory.slice(0, -1)} ${i + 1}`,
      price,
      originalPrice,
      image,
      category: productCategory,
      isNew,
      rating: Math.floor(Math.random() * 5) + 1,
      reviews: Math.floor(Math.random() * 100) + 1,
    }
  })
}

const extractCategory = (pathname) => {
  if (pathname.includes("/womenswear/")) {
    const categorySlug = pathname.split("/womenswear/")[1]
    if (categorySlug && categorySlug !== "all") {
      let category = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
      if (category.endsWith("s")) category = category.slice(0, -1) + "s"
      return category
    }
  } else if (pathname.includes("/ready-to-ship/")) {
    const categorySlug = pathname.split("/ready-to-ship/")[1]
    if (categorySlug && categorySlug !== "all") {
      let category = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
      if (category.endsWith("s")) category = category.slice(0, -1) + "s"
      return category
    }
  } else if (pathname.includes("/bridal/")) {
    const categorySlug = pathname.split("/bridal/")[1]
    if (categorySlug && categorySlug !== "all") {
      let category = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
      if (category.endsWith("s")) category = category.slice(0, -1) + "s"
      return category
    }
  } else if (pathname.includes("/jewellery")) {
    return "Accessories"
  }
  return undefined
}

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState("newest")
  const [products, setProducts] = useState([])
  const { toggleWishlist, isInWishlist, addToCart } = useShop()
  const pathname = usePathname()
  useEffect(() => {
    const category = extractCategory(pathname)
    const count = Math.floor(Math.random() * 12) + 12 // 12-24 products
    const productsData = generateProducts(count, category || undefined)
    setProducts(productsData)
  }, [pathname])

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "M", // Default size
      color: "Default", // Default color
      quantity: 1,
    })
  }

  // Sort products based on sortBy value
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popularity":
        return b.reviews - a.reviews
      default: // newest
        return b.id - a.id
    }
  })

  return (
    <div>
      {/* Sort Options */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">{products.length} products found</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden">              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded">NEW</span>}
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                onClick={() =>
                  toggleWishlist({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    category: product.category,
                  })
                }
              >
                <Heart
                  className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-rose-600 text-rose-600" : "text-gray-600"}`}
                />
              </Button>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end px-1  gap-2">
                <Button size="sm" variant="secondary">
                  <Eye className="h-4 w-4 mr-2" />
                  Quick View
                </Button>
                <Button size="sm" className="bg-rose-600 hover:bg-rose-700" onClick={() => handleAddToCart(product)}>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link href={`/product/${product.id}`} className="hover:text-rose-600">
                  {product.name}
                </Link>
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
