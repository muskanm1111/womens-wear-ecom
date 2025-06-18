"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "../../context/ShopContext";
import QuickViewModal from "./QuickViewModal";
import { useState } from "react";

const featuredProducts = [
	{
		id: 1,
		name: "Embroidered Silk Kurta",
		price: 4999,
		originalPrice: 6999,
		image: "/product1.webp",
		category: "Kurtas",
		isNew: true,
	},
	{
		id: 2,
		name: "Designer Lehenga Set",
		price: 12999,
		originalPrice: 15999,
		image: "/product2.webp",
		category: "Lehengas",
		isNew: false,
	},
	{
		id: 3,
		name: "Fusion Maxi Dress",
		price: 3999,
		originalPrice: 5999,
		image: "/product3.webp",
		category: "Dresses",
		isNew: true,
	},
	{
		id: 4,
		name: "Banarasi Silk Saree",
		price: 8999,
		originalPrice: 11999,
		image: "/product4.webp",
		category: "Sarees",
		isNew: false,
	},
	{
		id: 5,
		name: "Printed Co-ord Set",
		price: 2999,
		originalPrice: 3999,
		image: "/product5.webp",
		category: "Co-ords",
		isNew: true,
	},
	{
		id: 6,
		name: "Embellished Anarkali",
		price: 7999,
		originalPrice: 9999,
		image: "/product6.webp",
		category: "Anarkalis",
		isNew: false,
	},
];

export default function FeaturedProducts({
	title = "Featured Products",
	subtitle = "Handpicked styles that define elegance and comfort",
}) {
	const { toggleWishlist, isInWishlist, addToCart } = useShop();
	const [quickViewProduct, setQuickViewProduct] = useState(null);

	const handleAddToCart = (product) => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			size: "M", // Default size
			color: "Default", // Default color
			quantity: 1,
		});
	};

	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{featuredProducts.map((product) => (
						<Link
							href="/products"
							key={product.id}
							className="block group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							{/* Product Image */}
							<div className="relative aspect-[3/4] overflow-hidden">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Badges */}
								<div className="absolute top-3 left-3 flex flex-col gap-2">
									{product.isNew && (
										<span className="bg-rose-600 text-white text-xs px-2 py-1 rounded">
											NEW
										</span>
									)}
									<span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
										{Math.round(
											((product.originalPrice - product.price) /
												product.originalPrice) *
												100
										)}
										% OFF
									</span>
								</div>

								{/* Wishlist Button */}
								<Button
									variant="ghost"
									size="icon"
									className="absolute top-3 right-3 bg-white/80 hover:bg-white z-10"
									onClick={(e) => {
										e.preventDefault();
										toggleWishlist({
											id: product.id,
											name: product.name,
											price: product.price,
											originalPrice: product.originalPrice,
											image: product.image,
											category: product.category,
										});
									}}
								>
									<Heart
										className={`h-4 w-4 ${
											isInWishlist(product.id)
												? "fill-rose-600 text-rose-600"
												: "text-gray-600"
										}`}
									/>
								</Button>

								{/* Hover Actions */}
								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex  items-end mb-2 px-1  justify-center lg:justify-end gap-2 z-10">
									<Button
										size="sm"
										variant="secondary"
										onClick={(e) => {
											e.preventDefault();
											setQuickViewProduct(product);
										}}
									>
										<Eye className="h-4 w-4 mr-2" />
										Quick View
									</Button>
									<Button
										size="sm"
										className="bg-rose-600 hover:bg-rose-700"
										onClick={(e) => {
											e.preventDefault();
											handleAddToCart(product);
										}}
									>
										<ShoppingBag className="h-4 w-4 mr-2" />
										Add to Cart
									</Button>
								</div>
							</div>

							{/* Product Info */}
							<div className="p-4">
								<p className="text-sm text-gray-500 mb-1">
									{product.category}
								</p>
								<h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
									{product.name}
								</h3>
								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-gray-900">
										₹{product.price.toLocaleString()}
									</span>
									<span className="text-sm text-gray-500 line-through">
										₹{product.originalPrice.toLocaleString()}
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="/products">
						<Button
							size="lg"
							variant="outline"
							className="border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
						>
							View All Products
						</Button>
					</Link>
				</div>
			</div>

			{/* Quick View Modal */}
			<QuickViewModal
				product={quickViewProduct}
				isOpen={quickViewProduct !== null}
				onClose={() => setQuickViewProduct(null)}
			/>
		</section>
	);
}
