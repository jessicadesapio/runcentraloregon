import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

interface TrailRun {
  id: number;
  name: string;
  date: string;
  location: string;
  distance: string;
  externalLink?: string;
}

const trailRuns: TrailRun[] = [
  { id: 1, name: "Peterson Ridge Rumble", date: "April 13, 2025", location: "Sisters, Oregon", distance: "20 Miles, Marathon, 40 Miles", externalLink: "https://ultrasignup.com/register.aspx?did=120129" },
  { id: 2, name: "Bend Trail Series", date: "April 17 - July 17, 2025", location: "Trail Locations TBD", distance: "Ranging from 4-7 Miles", externalLink: "https://www.bendtrailseries.com" },
  { id: 3, name: "Happy Girls Sisters", date: "October 25, 2025", location: "Sisters, Oregon", distance: "5K, 10K, Half Marathon", externalLink: "https://runsignup.com/Race/OR/Sisters/2024HappyGirlsSisters" },
  { id: 4, name: "Happy Girls Bend", date: "May 10, 2025", location: "Bend, Oregon", distance: "5k, 10k, Half Marathon", externalLink: "https://thelittlewoody.com/beer-run/" },
  { id: 5, name: "Salmon Run", date: "April 19, 2025", location: "Bend, Oregon", distance: "5k, 10k, Half Marathon", externalLink: "https://bendraces.com/salmon-run/" },
  { id: 6, name: "Haulin' Aspen", date: "August 9, 2025", location: "Wanoga Sno Park", distance: "Half As - 6.5 miles, Half Marathon, Marathon", externalLink: "https://bendraces.com/haulin-aspen/" }
]

export default function TrailRunsPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/closeuptrail.webp"
        alt="Trail runner on a scenic forest path along a river during sunset"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 min-h-screen flex flex-col bg-black/40">
        <header className="bg-primary/70 text-primary-foreground shadow-lg">
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

        <main className="flex-grow container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Trail Runs in Central Oregon</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trailRuns.map((run) => (
              <Card key={run.id} className="bg-white/60 backdrop-blur-sm transition-all hover:bg-white/80">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {run.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Date:</strong> {run.date}</p>
                  <p><strong>Location:</strong> {run.location}</p>
                  <p><strong>Distance:</strong> {run.distance}</p>
                  {run.externalLink ? (
                    <Button asChild className="mt-4 w-full">
                      <a href={run.externalLink} target="_blank" rel="noopener noreferrer">
                        View Details
                      </a>
                    </Button>
                  ) : (
                    <Button className="mt-4 w-full">
                      <Link href={`/trail-runs/${run.id}`}>View Details</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <footer className="bg-gray-900/80 text-white text-center py-4">
          <p>&copy; 2024 Central Oregon Runners. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}