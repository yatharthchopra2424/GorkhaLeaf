"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Heart, Check } from "lucide-react"
import { Product } from "@/lib/products"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addToCart({ ...product, quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group transition-all duration-300 relative overflow-hidden cursor-pointer">
      <Link href={`/products/${product.slug}`}>
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-green-600 text-white">FRESH</Badge>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <Button variant="ghost" size="sm" className="p-2 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative overflow-hidden h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6 text-center">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-xl text-green-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-md text-gray-500 mb-4">{product.subname}</p>
        </Link>
        <div className="flex items-center justify-center space-x-4 mb-5">
          <span className="text-2xl font-bold text-green-800">₹{product.price}</span>
          <span className="text-md text-gray-500 line-through">₹{product.originalPrice}</span>
        </div>

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
          onClick={handleAddToCart}
        >
          {added ? (
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Added!
            </div>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    </div>
  )
}
