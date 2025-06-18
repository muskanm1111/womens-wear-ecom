"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Truck, Shield, RotateCcw, Heart } from "lucide-react"




export default function FeatureBanner({
  variant = "hero",
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  badge,
  features,
  stats,
  testimonial,
  backgroundColor = "bg-gradient-to-r from-rose-50 to-pink-50",
  textColor = "text-gray-900",
  overlay = false,
  className = "",
  imgclass = ""
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  }

  // Hero Banner Variant
  if (variant === "hero") {
    return (
      <section className={`relative overflow-hidden ${backgroundColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInLeft} className="space-y-6">
              {badge && (
                <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-3 py-1">{badge}</Badge>
              )}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight`}>{title}</h1>
              {subtitle && <h2 className={`text-xl md:text-2xl ${textColor} opacity-80`}>{subtitle}</h2>}
              {description && <p className={`text-lg ${textColor} opacity-70 max-w-lg`}>{description}</p>}
              <div className="flex flex-col sm:flex-row gap-4">
                {buttonText && buttonLink && (
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3" asChild>
                    <Link href={buttonLink}>
                      {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-3"
                    asChild
                  >
                    <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                  </Button>
                )}
              </div>
            </motion.div>
            {image && (
              <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative">
                <div className="aspect-square lg:aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={image} alt={title} fill className={`object-cover ${imgclass}`} />
                  {overlay && <div className="absolute inset-0 bg-black/20" />}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Feature Banner Variant
  if (variant === "feature") {
    return (
      <section className={`${backgroundColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
            {badge && (
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-3 py-1 mb-4">{badge}</Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
            {description && <p className={`text-lg ${textColor} opacity-70 max-w-3xl mx-auto`}>{description}</p>}
          </motion.div>

          {features && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                  }}
                  className="text-center"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {index === 0 && <Truck className="h-8 w-8 text-rose-600" />}
                    {index === 1 && <Shield className="h-8 w-8 text-rose-600" />}
                    {index === 2 && <RotateCcw className="h-8 w-8 text-rose-600" />}
                    {index === 3 && <Heart className="h-8 w-8 text-rose-600" />}
                  </div>
                  <h3 className={`font-semibold ${textColor} mb-2`}>{feature}</h3>
                </motion.div>
              ))}
            </div>
          )}

          {buttonText && buttonLink && (
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mt-12">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3" asChild>
                <Link href={buttonLink}>
                  {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  // Promotion Banner Variant
  if (variant === "promotion") {
    return (
      <section className={`relative overflow-hidden ${backgroundColor} ${className}`}>
        {image && (
          <div className="absolute inset-0">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            {overlay && <div className="absolute inset-0 bg-black/50" />}
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            {badge && (
              <Badge className="bg-rose-600 text-white hover:bg-rose-700 text-lg px-4 py-2 mb-6">{badge}</Badge>
            )}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${image ? "text-white" : textColor} mb-6`}>
              {title}
            </h2>
            {subtitle && (
              <h3 className={`text-xl md:text-2xl ${image ? "text-white" : textColor} opacity-90 mb-6`}>{subtitle}</h3>
            )}
            {description && (
              <p className={`text-lg ${image ? "text-white" : textColor} opacity-80 mb-8 max-w-2xl mx-auto`}>
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttonText && buttonLink && (
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg" asChild>
                  <Link href={buttonLink}>
                    {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  size="lg"
                  variant="outline"
                  className={`${
                    image
                      ? "border-white text-white hover:bg-white hover:text-gray-900"
                      : "border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
                  } px-8 py-4 text-lg`}
                  asChild
                >
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Collection Banner Variant
  if (variant === "collection") {
    return (
      <section className={`${backgroundColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInLeft} className="lg:col-span-1 space-y-6">
              {badge && (
                <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-3 py-1">{badge}</Badge>
              )}
              <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h2>
              {subtitle && <h3 className={`text-xl ${textColor} opacity-80`}>{subtitle}</h3>}
              {description && <p className={`text-lg ${textColor} opacity-70`}>{description}</p>}
              {buttonText && buttonLink && (
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3" asChild>
                  <Link href={buttonLink}>
                    {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
            </motion.div>
            {image && (              <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="lg:col-span-2">
                <div className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-xl">
                  <Image 
                    src={image || "/placeholder.svg"} 
                    alt={title} 
                    fill 
                    className={`object-cover ${imgclass || ''}`}
                  />
                  {overlay && <div className="absolute inset-0 bg-black/20" />}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Stats Banner Variant
  if (variant === "stats" && stats) {
    return (
      <section className={`${backgroundColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
            {badge && (
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-3 py-1 mb-4">{badge}</Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
            {description && <p className={`text-lg ${textColor} opacity-70 max-w-3xl mx-auto`}>{description}</p>}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold ${textColor} mb-2`}>{stat.value}</div>
                <div className={`text-sm md:text-base ${textColor} opacity-70`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {buttonText && buttonLink && (
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mt-12">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3" asChild>
                <Link href={buttonLink}>
                  {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  // Testimonial Banner Variant
  if (variant === "testimonial" && testimonial) {
    return (
      <section className={`${backgroundColor} ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            {badge && (
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-3 py-1 mb-6">
                {badge}
              </Badge>
            )}
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote
              className={`text-2xl md:text-3xl font-medium ${textColor} mb-8 italic`}
            >
              &quot;{testimonial.text}&quot;
            </blockquote>
            <cite className={`text-lg ${textColor} opacity-70 not-italic`}>
              — {testimonial.author}
            </cite>
            {buttonText && buttonLink && (
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3"
                  asChild
                >
                  <Link href={buttonLink}>
                    {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default fallback
  return null
}
