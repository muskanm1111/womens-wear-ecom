"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useShop } from "../../context/ShopContext";

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      color: "Default",
      quantity: 1,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) *
                  100
              )}
              % OFF
            </span>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-500 mb-4">{product.category}</p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      selectedSize === size
                        ? "border-rose-600 text-rose-600"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              A beautiful piece crafted with attention to detail and premium materials.
              Perfect for special occasions and everyday elegance.
            </p>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            {/* Additional Info */}
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <p>• Free Delivery on orders above ₹999</p>
              <p>• 7 days easy returns</p>
              <p>• Express delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
