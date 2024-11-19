import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ShoppingBag, Users, BookOpen } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/runningresource.webp"
        alt="Group of runners on a scenic trail through Central Oregon&apos;s high desert landscape"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 min-h-screen flex flex-col bg-black/40">
        <header className="bg-primary/90 text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Central Oregon Runners</h1>
            <nav className="mt-4">
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/trail-runs" className="hover:underline">Trail Runs</Link></li>
                <li><Link href="/road-runs" className="hover:underline">Road Runs</Link></li>
                <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Runner&apos;s Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Local Running Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bend Running Club</li>
                  <li>Central Oregon Running Klub (CORK)</li>
                  <li>Sisters Trail Runners</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="#">Find a Club</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="mr-2" />
                  Gear Shops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>FootZone Bend</li>
                  <li>Fleet Feet Bend</li>
                  <li>REI Bend</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="#">Shop Local</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Training Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Altitude Training Strategies</li>
                  <li>Trail Running Safety</li>
                  <li>Winter Running in Central Oregon</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" />
                  Popular Running Routes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Deschutes River Trail</li>
                  <li>Phil&apos;s Trail Complex</li>
                  <li>Smith Rock State Park Loops</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="#">Explore Routes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-gray-900/80 text-white text-center py-4 mt-8">
          <p>&copy; 2024 Central Oregon Runners. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}