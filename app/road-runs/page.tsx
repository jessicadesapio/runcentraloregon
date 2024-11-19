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
}

const roadRuns: RoadRun[] = [
  { id: 1, name: "Bend Marathon", date: "April 20, 2024", location: "Bend, Oregon", distance: "Marathon, Half Marathon, 10K, 5K" },
  { id: 2, name: "Redmond 5K Series", date: "May 1, 2024", location: "Redmond, Oregon", distance: "5K" },
  { id: 3, name: "Sunriver Half Marathon", date: "June 15, 2024", location: "Sunriver, Oregon", distance: "Half Marathon, 10K, 5K" },
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
                  <Button className="mt-4 w-full">
                    <Link href={`/road-runs/${run.id}`}>View Details</Link>
                  </Button>
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