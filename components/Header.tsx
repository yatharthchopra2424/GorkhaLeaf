"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

export function Header() {
  const { cartCount } = useCart()

  return (
    <header className="bg-white border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="Gorkha Leaf - Where Every Leaf Tells a Tale"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for teas, gifts, accessories..."
                className="w-full pl-4 pr-12 py-3 border-2 border-green-200 rounded-lg focus:border-green-500"
              />
              <Button size="sm" className="absolute right-1 top-1 bg-green-600 hover:bg-green-700 px-4">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-green-100 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/#featured-products" className="text-green-700 hover:text-green-900 font-medium">
                TEA FLUSH
              </Link>
              <Link href="/#featured-products" className="text-green-700 hover:text-green-900 font-medium">
                TEA TYPES
              </Link>
              <Link href="/" className="text-green-700 hover:text-green-900 font-medium">
                TEA SAMPLES
              </Link>
              <Link href="/our-story" className="text-green-700 hover:text-green-900 font-medium">
                OUR STORY
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800 border-red-200">UPTO 35% OFF</Badge>
              <Badge className="bg-green-100 text-green-800 border-green-200">FRESH ARRIVALS</Badge>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
