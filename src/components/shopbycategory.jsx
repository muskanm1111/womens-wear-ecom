import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Kurtas",
    image: "/kurta.avif",
    href: "/products",
  },
  {
    name: "Lehengas",
    image: "/lehnga.webp",
    href: "/products",
  },
  {
    name: "Dresses",
    image: "/dresses.avif",
    href: "/products",
  },
  {
    name: "Sarees",
    image: "/sarees.webp",
    href: "/products",
  },
  {
    name: "Co-ords",
    image: "/cor.webp",
    href: "/products",
  },
  {
    name: "Accessories",
    image: "/kurta.avif",
    href: "/products",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of ethnic and fusion wear
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
