"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
      <div
        className="relative w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/arah_web_1.jpg"
          alt="Ethnic Wear Collection"
          fill
          className={`object-cover object-top transition-transform duration-700s`}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ethnic Elegance
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Discover our stunning collection of ethnic and fusion wear
              designed for the modern woman
            </p>
            <Button
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
