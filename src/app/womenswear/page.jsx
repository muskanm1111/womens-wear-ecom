
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "All",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/all",
  },
  {
    name: "Kurtas",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/kurtas",
  },
  {
    name: "Lehengas",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/lehengas",
  },
  {
    name: "Dresses",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/dresses",
  },
  {
    name: "Sarees",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/sarees",
  },
  {
    name: "Co-ords",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/co-ords",
  },
  {
    name: "Bandi",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/bandi",
  },
  {
    name: "Sherwani Sets",
    image: "/placeholder.svg?height=400&width=300",
    href: "/womenswear/sherwani-sets",
  },
];

export default function WomenswearPage() {
  return (
    <div className="min-h-screen bg-white">
 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Womenswear Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our stunning collection of ethnic and fusion wear designed
            for the modern woman
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700" asChild>
            <Link href="/womenswear/all">View All Womenswear</Link>
          </Button>
        </div>
      </main>

      
    </div>
  );
}
