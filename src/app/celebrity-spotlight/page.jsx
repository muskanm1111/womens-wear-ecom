
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/productgrid";

const celebrities = [
  {
    name: "Alia Bhatt",
    image: "/placeholder.svg?height=600&width=400",
    collection: "The Festive Edit",
    description: "Discover Alia's favorite picks for the festive season",
  },
  {
    name: "Deepika Padukone",
    image: "/placeholder.svg?height=600&width=400",
    collection: "Wedding Collection",
    description: "Elegant pieces inspired by Deepika's timeless style",
  },
  {
    name: "Priyanka Chopra",
    image: "/placeholder.svg?height=600&width=400",
    collection: "Global Fusion",
    description: "East meets West in this stunning collection",
  },
  {
    name: "Sonam Kapoor",
    image: "/placeholder.svg?height=600&width=400",
    collection: "Fashion Forward",
    description: "Bold and contemporary designs for the modern woman",
  },
];

export default function CelebritySpotlightPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Celebrity Spotlight
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore exclusive collections curated by your favorite celebrities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {celebrities.map((celebrity) => (
            <div
              key={celebrity.name}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={celebrity.image || "/placeholder.svg"}
                  alt={celebrity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{celebrity.name}</h3>
                  <p className="text-xl font-medium mb-2">
                    {celebrity.collection}
                  </p>
                  <p className="text-gray-200 mb-4">{celebrity.description}</p>
                  <Button className="bg-rose-600 hover:bg-rose-700">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Celebrity Picks
          </h2>
          <ProductGrid />
        </div>
      </main>

    
    </div>
  );
}
