"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useShop } from "../../context/ShopContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSearch, openCart, wishlistCount, cartCount } = useShop();

  const womenswearCategories = [
    "All",
    "Kurtas",
    "Lehengas",
    "Dresses",
    "Sarees",
    "Co-ords",
    "Bandi",
    "Sherwani Sets",
  ];

  const readyToShipCategories = [
    "All Ready to Ship",
    "Kurtas",
    "Dresses",
    "Co-ords",
    "Accessories",
  ];

  const bridalCategories = [
    "All Bridal",
    "Lehengas",
    "Sarees",
    "Sharara Sets",
    "Anarkalis",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-xs sm:text-sm">
        Ready-to-Ship Styles Ship in 3 Business Days
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-rose-600">
                  Fashion
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1  text-nowrap xl:space-x-8 flex-1 justify-center">
              <Link
                href="/new-in"
                className="px-6 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors"
              >
                New In
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors">
                  Womenswear <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {womenswearCategories.map((category) => (
                    <DropdownMenuItem key={category} className="py-2">
                      <Link
                        href={`/womenswear/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="w-full hover:text-rose-600"
                      >
                        {category}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors">
                  Ready to Ship <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {readyToShipCategories.map((category) => (
                    <DropdownMenuItem key={category} className="py-2">
                      <Link
                        href={`/ready-to-ship/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="w-full hover:text-rose-600"
                      >
                        {category}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors">
                  Bridal <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {bridalCategories.map((category) => (
                    <DropdownMenuItem key={category} className="py-2">
                      <Link
                        href={`/bridal/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="w-full hover:text-rose-600"
                      >
                        {category}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/jewellery"
                className="px-3 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors"
              >
                Jewellery
              </Link>
              <Link
                href="/celebrity-spotlight"
                className="px-3 py-2 text-gray-700 hover:text-rose-600 font-medium text-sm xl:text-base transition-colors whitespace-nowrap"
              >
                Celebrity Spotlight
              </Link>
              <Link
                href="/vip-sale"
                className="px-3 py-2 text-red-600 hover:text-red-700 font-medium text-sm xl:text-base transition-colors"
              >
                VIP Sale
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={openSearch}
                className="hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/account">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>
           <Link href="/wishlist">
           <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-gray-100"
                onClick={openCart}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/new-in"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                New In
              </Link>
              <Link
                href="/womenswear"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Womenswear
              </Link>
              <Link
                href="/ready-to-ship"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Ready to Ship
              </Link>
              <Link
                href="/bridal"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Bridal
              </Link>
              <Link
                href="/jewellery"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Jewellery
              </Link>
              <Link
                href="/celebrity-spotlight"
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Celebrity Spotlight
              </Link>
              <Link
                href="/vip-sale"
                className="block px-4 py-3 text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                VIP Sale
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
