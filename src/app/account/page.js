"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Edit,
  Trash,
  Plus,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function AccountPage() {
  const router = useRouter();
  const { wishlist } = useShop();
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg?height=100&width=100",
  };

  const orders = [
    {
      id: "ORD001",
      date: "2024-06-10",
      status: "Delivered",
      total: 4999,
      items: 2,
      products: [
        {
          name: "Embroidered Silk Kurta",
          image: "/placeholder.svg?height=100&width=80",
          price: 2999,
        },
        {
          name: "Palazzo Pants",
          image: "/placeholder.svg?height=100&width=80",
          price: 1999,
        },
      ],
    },
    {
      id: "ORD002",
      date: "2024-06-05",
      status: "Shipped",
      total: 12999,
      items: 1,
      products: [
        {
          name: "Designer Lehenga Set",
          image: "/placeholder.svg?height=100&width=80",
          price: 12999,
        },
      ],
    },
    {
      id: "ORD003",
      date: "2024-05-28",
      status: "Processing",
      total: 7999,
      items: 3,
      products: [
        {
          name: "Fusion Maxi Dress",
          image: "/placeholder.svg?height=100&width=80",
          price: 3999,
        },
        {
          name: "Statement Earrings",
          image: "/placeholder.svg?height=100&width=80",
          price: 1999,
        },
        {
          name: "Embellished Clutch",
          image: "/placeholder.svg?height=100&width=80",
          price: 2001,
        },
      ],
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Priya Sharma",
      address: "123 MG Road, Bangalore, Karnataka 560001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Priya Sharma",
      address: "456 Tech Park, Whitefield, Bangalore, Karnataka 560066",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      cardNumber: "**** **** **** 4567",
      expiryDate: "09/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "UPI",
      upiId: "priya.sharma@upi",
      isDefault: false,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-rose-100">
                  <AvatarImage
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold text-lg">{user.name}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>
              </div>

              <Separator className="my-4" />

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button
                  variant={activeTab === "addresses" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("addresses")}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button
                  variant={activeTab === "payments" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payments")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "settings" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>

                <Separator className="my-4" />

                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h1 className="text-2xl font-bold mb-6">My Profile</h1>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={user.name} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" value={user.phone} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" className="mt-1" />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Change Password
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="mt-1"
                        />
                      </div>
                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="new-password">New Password</Label>
                          <Input
                            id="new-password"
                            type="password"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>

                <div className="space-y-6">
                  {orders.map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <CardHeader className="bg-gray-50 p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Order #{order.id}
                            </p>
                            <p className="text-sm text-gray-500">
                              Placed on{" "}
                              {new Date(order.date).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge
                              className={`${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              Track Order <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          {order.products.map((product, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4"
                            >
                              <div className="relative w-16 h-20 bg-gray-100 rounded-md overflow-hidden">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-gray-500 text-sm">
                                  ₹{product.price.toLocaleString()}
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                Buy Again
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t">
                          <div>
                            <p className="text-sm text-gray-500">
                              {order.items} item{order.items > 1 ? "s" : ""}
                            </p>
                            <p className="font-medium">
                              Total: ₹{order.total.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Need Help?
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Your wishlist is empty
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Items added to your wishlist will appear here
                    </p>
                    <Button
                      className="bg-rose-600 hover:bg-rose-700"
                      onClick={() => router.push("/products")}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                      <div
                        key={item.id}
                        className="group relative bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-500 mb-1">
                            {item.category}
                          </p>
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">
                              ₹{item.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">My Addresses</h1>
                  <Button className="bg-rose-600 hover:bg-rose-700">
                    <Plus className="h-4 w-4 mr-2" /> Add New Address
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <Card key={address.id} className="relative">
                      {address.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-rose-100 text-rose-800">
                          Default
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <span className="bg-gray-100 p-2 rounded-full mr-2">
                            {address.type === "Home" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  width="16"
                                  height="16"
                                  x="4"
                                  y="4"
                                  rx="2"
                                />
                                <path d="M9 9h6v6H9z" />
                                <path d="M15 4v4" />
                                <path d="M9 4v4" />
                                <path d="M9 15v5" />
                                <path d="M15 15v5" />
                                <path d="M4 9h5" />
                                <path d="M4 15h5" />
                                <path d="M15 9h5" />
                                <path d="M15 15h5" />
                              </svg>
                            )}
                          </span>
                          {address.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{address.name}</p>
                        <p className="text-gray-600 mt-1">{address.address}</p>
                        <p className="text-gray-600 mt-1">{address.phone}</p>

                        <div className="flex gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Edit className="h-4 w-4 mr-2" /> Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-red-600 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4 mr-2" /> Delete
                          </Button>
                          {!address.isDefault && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                            >
                              Set as Default
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Payment Methods Tab */}
            {activeTab === "payments" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Payment Methods</h1>
                  <Button className="bg-rose-600 hover:bg-rose-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Payment Method
                  </Button>
                </div>

                <div className="space-y-4">
                  {paymentMethods.map((payment) => (
                    <Card key={payment.id} className="relative">
                      {payment.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-rose-100 text-rose-800">
                          Default
                        </Badge>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            {payment.type === "Credit Card" ? (
                              <CreditCard className="h-6 w-6" />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 2H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z" />
                                <path d="M12 18v-8" />
                                <path d="M8 14l4 4 4-4" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{payment.type}</h3>
                            {payment.type === "Credit Card" ? (
                              <p className="text-gray-600">
                                {payment.cardNumber} • Expires{" "}
                                {payment.expiryDate}
                              </p>
                            ) : (
                              <p className="text-gray-600">{payment.upiId}</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Notifications
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-gray-500">
                            Receive updates about your orders
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotions</p>
                          <p className="text-sm text-gray-500">
                            Receive emails about new promotions
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Arrivals</p>
                          <p className="text-sm text-gray-500">
                            Get notified about new products
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-lg font-semibold mb-4">Privacy</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            Two-Factor Authentication
                          </p>
                          <p className="text-sm text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Data Sharing</p>
                          <p className="text-sm text-gray-500">
                            Control how your data is used
                          </p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-red-600">
                      Danger Zone
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Delete Account</p>
                          <p className="text-sm text-gray-500">
                            Permanently delete your account and all associated
                            data
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
y
    </div>
  );
}
