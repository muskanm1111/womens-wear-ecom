"use client";

import FeatureBanner from "./FeatureBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Shield,
  RotateCcw,
  Heart,
  Star,
  Users,
  Award,
  Globe,
  Crown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function HeroBannerExample() {
  return (
    <FeatureBanner
      variant="hero"
      badge="New Collection"
      title="Ethnic Elegance Redefined"
      subtitle="Modern Fusion Wear"
      description="Discover our stunning collection of ethnic and fusion wear designed for the contemporary woman who values tradition with a modern twist."
      image="/placeholder.svg?height=600&width=500"
      buttonText="Shop Now"
      buttonLink="/products"
      secondaryButtonText="View Collection"
      secondaryButtonLink="/womenswear"
      backgroundColor="bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50"
    />
  );
}

export function CollectionBannerExample() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-rose-600 text-white px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Featured Collection
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bridal
                <span className="block text-rose-600">Elegance</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Make your special day unforgettable with our handcrafted bridal
                collection featuring intricate embroidery and luxurious fabrics
                that celebrate tradition with modern sophistication.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Crown, text: "Premium Quality" },
                { icon: Star, text: "Handcrafted" },
                { icon: Award, text: "Award Winning" },
                { icon: Heart, text: "Made with Love" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl"
                >
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-3xl font-bold text-rose-600">₹25,999</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Premium Range</p>
                  <p className="text-xl font-semibold text-gray-900">₹75,999</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/bridal">
                  Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/bridal/lehengas">View Lehengas</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/banner3.webp"
                  alt="Bridal Collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating Rating Card */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  4.9/5 Rating
                </p>
                <p className="text-xs text-gray-600">2,847 Reviews</p>
              </div>

              {/* Floating Offer Card */}
              <div className="absolute bottom-6 left-6 bg-rose-600 text-white rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-medium">Limited Time</p>
                <p className="text-lg font-bold">20% OFF</p>
                <p className="text-xs opacity-90">On Bridal Collection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



export function StatsBannerExample() {
  const stats = [
    {
      value: "50K+",
      label: "Happy Customers",
      icon: Users,
      description: "Satisfied customers worldwide",
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "100K+",
      label: "Products Sold",
      icon: Award,
      description: "Premium ethnic wear pieces",
      color: "from-green-500 to-green-600",
    },
    {
      value: "500+",
      label: "Cities Served",
      icon: Globe,
      description: "Across India and beyond",
      color: "from-purple-500 to-purple-600",
    },
    {
      value: "10+",
      label: "Years of Excellence",
      icon: Crown,
      description: "Crafting beautiful traditions",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-rose-600 text-white px-4 py-2 text-sm font-medium mb-4">
            Our Achievements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our growing community of satisfied customers who love our
            ethnic wear collection.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 text-center h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-300 mb-6">
              Be part of our growing family and experience the best in ethnic
              fashion.
            </p>
            <Button
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-semibold shadow-lg"
              asChild
            >
              <Link href="/account">
                Join Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PromotionBannerExample() {
  return (
    <FeatureBanner
      variant="promotion"
      badge="LIMITED TIME OFFER"
      title="MEGA SALE"
      subtitle="Up to 70% OFF"
      description="Don't miss out on our biggest sale of the year. Premium ethnic wear at unbeatable prices."
      image="/placeholder.svg?height=600&width=1200"
      buttonText="Shop Sale"
      buttonLink="/vip-sale"
      secondaryButtonText="View All Offers"
      secondaryButtonLink="/offers"
      overlay={true}
      backgroundColor="bg-rose-600"
    />
  );
}

export function TestimonialBannerExample() {
  return (
    <FeatureBanner
      variant="testimonial"
      badge="Customer Love"
      testimonial={{
        text: "The quality of ethnic wear is exceptional. I've never received so many compliments on an outfit before!",
        author: "Priya Sharma, Mumbai",
        rating: 5,
      }}
      buttonText="Read More Reviews"
      buttonLink="/reviews"
      backgroundColor="bg-gradient-to-r from-green-50 to-emerald-50"
    />
  );
}
