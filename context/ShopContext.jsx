"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create context with a default value that matches the shape of the actual value
const ShopContext = createContext({
  cart: [],
  wishlist: [],
  isCartOpen: false,
  isSearchOpen: false,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {},
  toggleWishlist: () => {},
  isInWishlist: () => false,
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
  openSearch: () => {},
  closeSearch: () => {},
  cartTotal: 0,
  cartCount: 0,
  wishlistCount: 0,
})

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Load cart and wishlist from localStorage on client side
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedWishlist = localStorage.getItem("wishlist")

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save cart and wishlist to localStorage when they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === product.size && item.color === product.color,
      )

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size && item.color === product.color
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        )
      } else {
        return [...prevCart, product]
      }
    })

    // Open cart when adding item
    setIsCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateCartItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id)

      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id)
      } else {
        return [...prevWishlist, product]
      }
    })
  }

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id)
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((prev) => !prev)

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const wishlistCount = wishlist.length

  const value = {
    cart,
    wishlist,
    isCartOpen,
    isSearchOpen,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    openCart,
    closeCart,
    toggleCart,
    openSearch,
    closeSearch,
    cartTotal,
    cartCount,
    wishlistCount,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider")
  }
  return context
}
