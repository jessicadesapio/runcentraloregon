import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RoadRun {
  id: number;
  name: string;
  date: string;
  location: string;
  distance: string;
  externalLink?: string;
}

const roadRuns: RoadRun[] = [
  { id: 1, name: "Bend Marathon and Half", date: "April 13, 2025", location: "Bend, Oregon", distance: "Marathon, Half Marathon, 10K, 5K", externalLink: "https://www.bend-marathon.com" },
  { id: 2, name: "Conquor The Canyon", date: "June 7, 2025", location: "Redmond, Oregon", distance: "5K, 10k, Half Marathon", externalLink: "https://bendraces.com/conquer-the-canyon-half-marathon/" },
  { id: 3, name: "Bend Beer Run", date: "August 30, 2025", location: "Bend, Oregon", distance: "5K with 4 beer stops!", externalLink: "https://thelittlewoody.com/beer-run/" },
]

export default function RoadRunsPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/roadrunning.webp"
        alt="Runner on a scenic paved path along the Deschutes River canyon"
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
          <h2 className="text-3xl font-bold mb-6 text-white">Road Runs in Central Oregon</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roadRuns.map((run) => (
              <Card key={run.id} className="bg-white/60 backdrop-blur-sm transition-all hover:bg-white/80">
                <CardHeader>
                  <CardTitle>{run.name}</CardTitle>
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
                      <Link href={`/road-runs/${run.id}`}>View Details</Link>
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