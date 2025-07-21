import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  Truck,
  Shield,
  Award,
  Leaf,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Filter,
  Grid,
  List,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Darjeeling First Flush FTGFOP1",
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.8,
      reviews: 124,
      image: "/product-front.jpg",
      badge: "FRESH ARRIVAL",
      inStock: true,
      weight: "100g",
    },
    {
      id: 2,
      name: "Darjeeling Second Flush SFTGFOP1",
      price: 749,
      originalPrice: 999,
      discount: 25,
      rating: 4.9,
      reviews: 89,
      image: "/product-front.jpg",
      badge: "BEST SELLER",
      inStock: true,
      weight: "100g",
    },
    {
      id: 3,
      name: "Himalayan Green Tea",
      price: 599,
      originalPrice: 799,
      discount: 25,
      rating: 4.7,
      reviews: 156,
      image: "/product-front.jpg",
      badge: "ORGANIC",
      inStock: true,
      weight: "100g",
    },
    {
      id: 4,
      name: "Gorkha Warrior Black Tea",
      price: 849,
      originalPrice: 1199,
      discount: 29,
      rating: 4.8,
      reviews: 203,
      image: "/product-front.jpg",
      badge: "LIMITED EDITION",
      inStock: true,
      weight: "100g",
    },
    {
      id: 5,
      name: "Darjeeling White Tea",
      price: 1299,
      originalPrice: 1699,
      discount: 24,
      rating: 4.9,
      reviews: 67,
      image: "/product-front.jpg",
      badge: "PREMIUM",
      inStock: true,
      weight: "50g",
    },
    {
      id: 6,
      name: "Monsoon Flush Special",
      price: 649,
      originalPrice: 899,
      discount: 28,
      rating: 4.6,
      reviews: 98,
      image: "/product-front.jpg",
      badge: "SEASONAL",
      inStock: true,
      weight: "100g",
    },
    {
      id: 7,
      name: "Heritage Blend 1870",
      price: 999,
      originalPrice: 1399,
      discount: 29,
      rating: 4.9,
      reviews: 145,
      image: "/product-front.jpg",
      badge: "SIGNATURE",
      inStock: true,
      weight: "100g",
    },
    {
      id: 8,
      name: "Himalayan Oolong",
      price: 1149,
      originalPrice: 1499,
      discount: 23,
      rating: 4.8,
      reviews: 78,
      image: "/product-front.jpg",
      badge: "ARTISAN",
      inStock: true,
      weight: "75g",
    },
  ]

  const categories = [
    { name: "First Flush", count: 24, image: "/placeholder.svg?height=100&width=100" },
    { name: "Second Flush", count: 32, image: "/placeholder.svg?height=100&width=100" },
    { name: "Green Tea", count: 18, image: "/placeholder.svg?height=100&width=100" },
    { name: "White Tea", count: 12, image: "/placeholder.svg?height=100&width=100" },
    { name: "Oolong", count: 15, image: "/placeholder.svg?height=100&width=100" },
    { name: "Gift Sets", count: 28, image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +91-9800341000
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              info@gorkhaleaf.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span>
            <div className="flex space-x-2">
              <Link href="#" className="hover:text-green-200">
                Track Order
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-green-200">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Gorkha Leaf - Where Every Leaf Tells a Tale"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
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
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs">3</Badge>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-green-100 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <Button variant="ghost" className="flex items-center space-x-1 text-green-700 hover:text-green-900">
                    <span>TEA FLUSH</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative group">
                  <Button variant="ghost" className="flex items-center space-x-1 text-green-700 hover:text-green-900">
                    <span>TEA TYPES</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative group">
                  <Button variant="ghost" className="flex items-center space-x-1 text-green-700 hover:text-green-900">
                    <span>GIFT SETS</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                <Link href="#" className="text-green-700 hover:text-green-900 font-medium">
                  TEA SAMPLES
                </Link>
                <Link href="#" className="text-green-700 hover:text-green-900 font-medium">
                  ACCESSORIES
                </Link>
                <Link href="#" className="text-green-700 hover:text-green-900 font-medium">
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

      {/* Hero Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-3 gap-4 p-4">
          {/* Main Hero */}
          <div className="lg:col-span-2 relative bg-gradient-to-r from-green-50 to-green-100 rounded-lg overflow-hidden">
            <div className="flex items-center h-80">
              <div className="flex-1 p-8">
                <Badge className="mb-4 bg-green-600 text-white">Fresh Production</Badge>
                <h1 className="text-4xl font-bold text-green-800 mb-4">Darjeeling Second Flush Tea 2025</h1>
                <p className="text-xl text-green-600 mb-6">UPTO 32% OFF</p>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Fresh Tea Production"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Side Banners */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fresh Production Offer</h3>
                <p className="text-blue-100 mb-4">on Second Flush Teas up to 32% OFF</p>
                <Button variant="secondary" size="sm">
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sample Packs</h3>
                <p className="text-purple-100 mb-4">"Try before you buy"</p>
                <Button variant="secondary" size="sm">
                  Shop Samples
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Gift Sets</h3>
                <p className="text-orange-100 mb-4">Perfect for tea lovers</p>
                <Button variant="secondary" size="sm">
                  View Gifts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-green-50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">Free Shipping</h4>
              <p className="text-sm text-green-600">On orders above ₹999</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">Secure Payment</h4>
              <p className="text-sm text-green-600">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">Premium Quality</h4>
              <p className="text-sm text-green-600">Direct from gardens</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">Fresh Delivery</h4>
              <p className="text-sm text-green-600">Within 2-3 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Image Gallery Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Tea+Packages"
                alt="Premium Tea Packages"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Tea+Cup"
                alt="Fresh Brewed Tea"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Tea+Accessories"
                alt="Tea Accessories"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Gift+Sets"
                alt="Tea Gift Sets"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Herbal+Tea"
                alt="Herbal Tea Collection"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Premium+Blends"
                alt="Premium Tea Blends"
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 tracking-wide">
              ORDER BEST DARJEELING TEA ONLINE IN INDIA AT BEST PRICES
            </h2>
          </div>

          {/* Herbal Tea Promotional Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-50 to-amber-50 mb-8">
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=400&width=1200&text=Herbal+Tea+Background"
                alt="Herbal Tea Background"
                width={1200}
                height={400}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 py-16 px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-green-800">BUY </span>
                  <span className="text-orange-500">HERBAL</span>
                  <span className="text-green-800"> & </span>
                  <br className="md:hidden" />
                  <span className="text-orange-500">FLOWER</span>
                  <span className="text-green-800"> BLEND TEAS</span>
                </h3>

                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg rounded-full mb-8"
                >
                  SHOP NOW
                </Button>

                <div className="bg-green-700 text-white px-6 py-3 rounded-lg inline-block">
                  <div className="text-2xl font-bold">ChaiDhara</div>
                  <div className="text-sm text-green-100">HERBAL TEAS - FLOWER BLEND TEAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Shop by Category</h2>
            <p className="text-green-600 max-w-2xl mx-auto">
              Discover our premium collection of authentic Darjeeling teas, each with its unique character and flavor
              profile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-green-100"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-green-50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Leaf className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-green-600">{category.count} Products</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Featured Products</h2>
              <p className="text-green-600">Handpicked selections from our premium collection</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-green-100 relative overflow-hidden"
              >
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    className={`text-xs ${
                      product.badge === "FRESH ARRIVAL"
                        ? "bg-green-600"
                        : product.badge === "BEST SELLER"
                          ? "bg-blue-600"
                          : product.badge === "ORGANIC"
                            ? "bg-emerald-600"
                            : product.badge === "LIMITED EDITION"
                              ? "bg-purple-600"
                              : product.badge === "PREMIUM"
                                ? "bg-amber-600"
                                : product.badge === "SEASONAL"
                                  ? "bg-orange-600"
                                  : product.badge === "SIGNATURE"
                                    ? "bg-red-600"
                                    : "bg-teal-600"
                    } text-white`}
                  >
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <Button variant="ghost" size="sm" className="p-2 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {product.discount > 0 && (
                  <div className="absolute top-12 left-3 z-10">
                    <Badge className="bg-red-500 text-white text-xs">-{product.discount}%</Badge>
                  </div>
                )}

                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-green-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">{product.weight}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-green-800">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">In Stock</span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">🌿 Our Heritage</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Rooted in the Misty Hills of Darjeeling
              </h2>
              <div className="prose prose-lg text-green-700 space-y-4">
                <p>
                  Gorkha Leaf brings you handpicked tea crafted with heritage, pride, and purity. A tribute to our
                  Gorkha roots and love for every sip.
                </p>
                <p>
                  From the legendary tea gardens of Darjeeling, where every leaf tells a story of tradition,
                  craftsmanship, and the indomitable Gorkha spirit.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">150+</div>
                  <div className="text-sm text-green-600">Years of Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">50+</div>
                  <div className="text-sm text-green-600">Tea Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">10K+</div>
                  <div className="text-sm text-green-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tea Garden Heritage"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected with Gorkha Leaf</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new arrivals, special offers, and stories from our tea gardens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-green-800 border-0" />
            <Button className="bg-amber-600 hover:bg-amber-700 px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/logo.jpg"
                alt="Gorkha Leaf"
                width={180}
                height={54}
                className="h-10 w-auto brightness-0 invert mb-6"
              />
              <p className="text-green-200 mb-6 max-w-md">
                Authentic Darjeeling tea crafted with the strength, dignity, and resilience of the Gorkha spirit. Where
                every leaf tells a tale.
              </p>
              <div className="space-y-2 text-sm text-green-200">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Darjeeling, West Bengal, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91-9800341000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@gorkhaleaf.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    First Flush
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Second Flush
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Green Tea
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    White Tea
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tea Gardens
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Quality
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-green-200 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Gorkha Leaf. All rights reserved. Made with ❤️ in Darjeeling.
              </p>
              <div className="flex items-center space-x-6 text-sm text-green-200">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
