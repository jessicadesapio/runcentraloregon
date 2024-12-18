import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ShoppingBag, Users } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/runningresource.webp"
        alt="Group of runners on a scenic trail through Central Oregon&apos;s high desert landscape"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
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
                  <li>
                    <a 
                      href="https://www.footzonebend.com/content/community-runs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      FootZone Community Runs
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://corkclub.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Central Oregon Running Klub (CORK)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/groups/301993255318992/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Sisters Country Running Club
                    </a>
                  </li>
                </ul>
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
                  <li>
                    <a 
                      href="https://www.footzonebend.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      FootZone Bend
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.rei.com/stores/bend" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      REI Bend
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stores.dickssportinggoods.com/or/bend/676/?seo=localpack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Dick&apos;s Sporting Goods Bend
                    </a>
                  </li>
                </ul>
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
                  <li>
                    <a 
                      href="https://www.bendparksandrec.org/trail/deschutes-river-trail-old-mill-reach/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Deschutes River Trail
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.traillink.com/trail/dry-canyon-trail/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Dry Canyon Trail
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=36" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Smith Rock State Park
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.trailrunproject.com/directory/8018554/three-sisters-wilderness" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      Three Sisters Wilderness Trails
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-gray-900/80 text-white text-center py-4 mt-auto">
          <p>&copy; 2024 Central Oregon Runners. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}