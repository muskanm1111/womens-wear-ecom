"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
    

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is
            being processed.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-500 mb-2">Order Number</p>
            <p className="text-xl font-semibold">{orderNumber}</p>
          </div>

          <p className="text-gray-600 mb-8">
            We&apos;ve sent a confirmation email with your order details and tracking
            information.
          </p>

          <div className="space-y-4">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/account">Track Your Order</Link>
            </Button>
            <div>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}
