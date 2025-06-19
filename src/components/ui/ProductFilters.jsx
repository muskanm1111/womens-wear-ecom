"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  const categories = ["Kurtas", "Lehengas", "Dresses", "Sarees", "Co-ords", "Accessories"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = ["Red", "Blue", "Green", "Pink", "Yellow", "Black", "White", "Purple"]

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleSizeChange = (size, checked) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size])
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size))
    }
  }

  const handleColorChange = (color, checked) => {
    if (checked) {
      setSelectedColors([...selectedColors, color])
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 20000])
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked )}
              />
              <Label htmlFor={category} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={20000} min={0} step={500} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={size}
                checked={selectedSizes.includes(size)}
                onCheckedChange={(checked) => handleSizeChange(size, checked )}
              />
              <Label htmlFor={size} className="text-sm">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Color</h4>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={color}
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) => handleColorChange(color, checked )}
              />
              <Label htmlFor={color} className="text-sm">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Availability</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ready-to-ship" />
            <Label htmlFor="ready-to-ship" className="text-sm">
              Ready to Ship
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}
