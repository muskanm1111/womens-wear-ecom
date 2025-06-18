import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-400">Fashion</h3>
            <p className="text-gray-300 mb-4">
              Redefining ethnic fashion with contemporary designs for the modern
              woman.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-rose-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-rose-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-rose-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-rose-400">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-rose-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/care-instructions"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/exchange"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Exchange Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-rose-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-rose-400"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Fashion. All rights reserved. | Designed with ❤️ for ethnic
            fashion lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
