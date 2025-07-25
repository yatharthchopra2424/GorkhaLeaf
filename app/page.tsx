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
import { ProductCard } from "@/components/ProductCard"
import { products, Product } from "@/lib/products"
import { Header } from "@/components/Header"
import LabelSection from "@/components/LabelSection"

export default function HomePage() {

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
      <Header />

      {/* Hero Section */}
      <section className="relative h-[550px]">
        <div className="grid lg:grid-cols-3 gap-4 p-4 h-full">
          {/* Main Hero */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
            <Image
              src="/maincollage.jpg"
              alt="Fresh Tea Production"
              fill
              className="z-0 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="relative z-20 flex flex-col items-start justify-start h-full p-8 pt-16 text-white">
              <Badge className="mb-4 bg-green-600 text-white border-none">Fresh Production</Badge>
              <h1 className="text-6xl font-bold mb-4">Darjeeling Second Flush Tea 2025</h1>
              <p className="text-3xl mb-6">UPTO 32% OFF</p>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Side Banners */}
          <div className="flex flex-col gap-4">
            <Card className="text-white overflow-hidden relative flex-1">
              <Image
                src="/darjeeling-500x500.jpg"
                alt="Fresh Production Offer"
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
              <CardContent className="p-6 relative z-20 flex flex-col justify-center items-start h-full">
                <h3 className="text-4xl font-bold mb-2">Fresh Production Offer</h3>
                <p className="text-gray-200 mb-4">on Second Flush Teas up to 32% OFF</p>
                <Button variant="secondary" size="sm">
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="text-white overflow-hidden relative flex-1">
              <Image
                src="/home2.png"
                alt="Sample Packs"
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
              <CardContent className="p-6 relative z-20 flex flex-col justify-center items-start h-full">
                <h3 className="text-4xl font-bold mb-2">Sample Packs</h3>
                <p className="text-gray-200 mb-4">"Try before you buy"</p>
                <Button variant="secondary" size="sm">
                  Shop Samples
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


      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Tea Collection</h2>
            <p className="text-green-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the finest Darjeeling teas, from classic flushes to exclusive blends.
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
      <section id="featured-products" className="py-12 bg-gray-50">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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

      {/* Label Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
           <LabelSection />
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
                  <div className="text-2xl font-bold text-green-800">5+</div>
                  <div className="text-sm text-green-600">Years of Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">40+</div>
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
                src="/aboutsectionhomepage.jpg"
                alt="Gorkha Leaf Tea Garden"
                width={500}
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
                  <Link href="/our-story" className="hover:text-white transition-colors">
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
