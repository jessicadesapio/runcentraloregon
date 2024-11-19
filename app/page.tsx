import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Image
        src="/deschutesrivertrail.webp"
        alt="Scenic view of Deschutes River Trail"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="relative z-10 flex flex-col min-h-screen bg-black/40">
        <header className="bg-primary/90 text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Run Central Oregon</h1>
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

        <main className="flex-grow container mx-auto px-4 py-8 text-white">
          <div className="max-w-3xl mb-12">
            <h2 className="text-5xl font-bold mb-6">Welcome to Central Oregon Runners</h2>
            <p className="text-xl">Your gateway to the best running experiences in Central Oregon&apos;s breathtaking landscapes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm transition-all hover:bg-white/80">
              <CardHeader>
                <CardTitle className="text-gray-800">Upcoming Trail Runs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Smith Rock Ascent - May 15, 2024</li>
                  <li>Bend Trail Series - June 5, 2024</li>
                  <li>Sisters Mountain Marathon - July 10, 2024</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="/trail-runs">View All Trail Runs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm transition-all hover:bg-white/80">
              <CardHeader>
                <CardTitle className="text-gray-800">Upcoming Road Runs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Bend Marathon - April 20, 2024</li>
                  <li>Redmond 5K Series - May 1, 2024</li>
                  <li>Sunriver Half Marathon - June 15, 2024</li>
                </ul>
                <Button className="mt-4 w-full">
                  <Link href="/road-runs">View All Road Runs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-gray-900/80 text-white text-center py-4">
          <p>&copy; 2024 Central Oregon Runners. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}