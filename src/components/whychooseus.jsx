"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Shield,
  RotateCcw,
  Heart,
  Star,
  Award,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹5000 across India",
      highlight: "Pan India",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your payments are protected with bank-level security",
      highlight: "SSL Encrypted",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free 30-day return & exchange policy",
      highlight: "No Questions",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Dedicated customer support team always ready to help",
      highlight: "Always Available",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
  ];

  const benefits = [
    "Premium Quality Fabrics",
    "Handcrafted with Love",
    "Authentic Designs",
    "Size Customization",
    "Express Delivery",
    "Gift Wrapping",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Fashion
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Experience the Difference
           
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just another fashion brand. We&apos;re your trusted partner in
            celebrating tradition with modern elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 h-full relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Highlight */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                        >
                          <feature.icon
                            className={`w-8 h-8 ${feature.iconColor}`}
                          />
                        </div>
                        <Badge
                          className={`${feature.bgColor} ${feature.iconColor} border-0 px-3 py-1 text-xs font-medium`}
                        >
                          {feature.highlight}
                        </Badge>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Benefits & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/cor.webp"
                  alt="Premium Quality"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating Stats */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>

                <div className="absolute bottom-6 right-6 bg-rose-600 text-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="font-bold">50K+</span>
                  </div>
                  <p className="text-sm opacity-90">Happy Customers</p>
                </div>
              </div>
            </div>

         
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.2"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us for their
                ethnic fashion needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/products">Start Shopping Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white/10 px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
