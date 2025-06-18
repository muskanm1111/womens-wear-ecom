
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "All Bridal",
    image: "/placeholder.svg?height=400&width=300",
    href: "/bridal/all",
  },
  {
    name: "Lehengas",
    image: "/placeholder.svg?height=400&width=300",
    href: "/bridal/lehengas",
  },
  {
    name: "Sarees",
    image: "/placeholder.svg?height=400&width=300",
    href: "/bridal/sarees",
  },
  {
    name: "Sharara Sets",
    image: "/placeholder.svg?height=400&width=300",
    href: "/bridal/sharara-sets",
  },
  {
    name: "Anarkalis",
    image: "/placeholder.svg?height=400&width=300",
    href: "/bridal/anarkalis",
  },
];

export default function BridalPage() {
  return (
    <div className="min-h-screen bg-white">
     

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bridal Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exquisite bridal wear for your special day, crafted with love and
            attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Link href="/bridal/all">View All Bridal Collection</Link>
          </Button>
        </div>
      </main>

    
    </div>
  );
}
