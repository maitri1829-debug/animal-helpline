import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"
import { mockShelters, type Shelter } from "@/lib/mock-data"
import Image from "next/image"

function ShelterCard({ shelter }: { shelter: Shelter }) {
  const availabilityColors = {
    available: "bg-secondary text-secondary-foreground",
    limited: "bg-accent text-accent-foreground",
    full: "bg-muted text-muted-foreground",
  }

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image src={shelter.imageUrl || "/placeholder.svg"} alt={shelter.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl">{shelter.name}</CardTitle>
            <CardDescription className="mt-1 flex items-center gap-1">
              <Navigation className="h-3 w-3" />
              {shelter.distance} miles away
            </CardDescription>
          </div>
          <Badge className={availabilityColors[shelter.availability]}>
            {shelter.availability === "available" && "Available"}
            {shelter.availability === "limited" && "Limited"}
            {shelter.availability === "full" && "Full"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-muted-foreground">
              {shelter.address}, {shelter.city}, {shelter.state} {shelter.zipCode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
            <a href={`tel:${shelter.phone}`} className="text-primary hover:underline">
              {shelter.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
            <a href={`mailto:${shelter.email}`} className="text-primary hover:underline">
              {shelter.email}
            </a>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {shelter.specialties.map((specialty) => (
              <Badge key={specialty} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
            Contact Shelter
          </Button>
          <Button variant="outline" size="sm">
            Get Directions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function ShelterList() {
  return (
    <section id="shelters" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Nearby Animal Shelters</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Our network of verified shelters ready to provide care and support for animals in need.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {mockShelters.map((shelter) => (
            <ShelterCard key={shelter.id} shelter={shelter} />
          ))}
        </div>
      </div>
    </section>
  )
}
