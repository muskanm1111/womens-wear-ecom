import FeaturedProducts from '@/components/featureproduct'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Newsletter from '@/components/newsletter'
import ShopByCategory from '@/components/shopbycategory'
import React from 'react'
import {
 
  FeatureBannerExample,
  CollectionBannerExample,
  StatsBannerExample,
} from "@/components/BannerExamples";
import WhyChooseUs from '@/components/whychooseus'

const Page = () => {
  // return (
  //   <div>
  //     <Navbar />
  //     <Hero />
  //     <ShopByCategory />
  //     <FeaturedProducts />
  //     <Newsletter />
  //     <Footer />
  //   </div>
  // )
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ShopByCategory />

        <FeaturedProducts
          title="New Arrivals"
          subtitle="Discover our most popular and in-demand fashion pieces"
        />

        <CollectionBannerExample />
        <FeaturedProducts
          title="Trending Product"
          subtitle="Be the first to shop our latest collection"
        />
        {/* <FeatureBannerExample /> */}
        <WhyChooseUs />
        {/* <StatsBannerExample /> */}
        {/* <Newsletter /> */}
      </main>
    </div>
  );
}

export default Page