export interface Shelter {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  distance: number
  capacity: number
  specialties: string[]
  availability: "available" | "limited" | "full"
  imageUrl: string
}

export interface AnimalReport {
  id: string
  type: string
  condition: string
  location: string
  description: string
  urgency: "low" | "medium" | "high" | "critical"
  reportedAt: Date
  status: "pending" | "assigned" | "rescued" | "closed"
  imageUrl: string
}

export const mockShelters: Shelter[] = [
  {
    id: "1",
    name: "Paws & Hearts Animal Rescue",
    address: "123 Compassion Lane",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    phone: "(415) 555-0123",
    email: "contact@pawsandhearts.org",
    distance: 2.3,
    capacity: 45,
    specialties: ["Dogs", "Cats", "Emergency Care"],
    availability: "available",
    imageUrl: "/modern-animal-shelter-building-with-dogs-and-cats.jpg",
  },
  {
    id: "2",
    name: "Safe Haven Wildlife Center",
    address: "456 Nature Drive",
    city: "Oakland",
    state: "CA",
    zipCode: "94601",
    phone: "(510) 555-0456",
    email: "help@safehavenwildlife.org",
    distance: 5.7,
    capacity: 30,
    specialties: ["Wildlife", "Birds", "Rehabilitation"],
    availability: "available",
    imageUrl: "/wildlife-rehabilitation-center-with-birds-and-natu.jpg",
  },
  {
    id: "3",
    name: "Furry Friends Foster Network",
    address: "789 Kindness Boulevard",
    city: "Berkeley",
    state: "CA",
    zipCode: "94704",
    phone: "(510) 555-0789",
    email: "foster@furryfriends.org",
    distance: 8.1,
    capacity: 60,
    specialties: ["Dogs", "Cats", "Small Animals", "Foster Care"],
    availability: "limited",
    imageUrl: "/cozy-animal-foster-home-with-happy-dogs-and-cats.jpg",
  },
  {
    id: "4",
    name: "Emergency Animal Response Team",
    address: "321 Rescue Road",
    city: "San Jose",
    state: "CA",
    zipCode: "95110",
    phone: "(408) 555-0321",
    email: "emergency@animalresponse.org",
    distance: 12.4,
    capacity: 25,
    specialties: ["Emergency Care", "24/7 Service", "Critical Cases"],
    availability: "available",
    imageUrl: "/emergency-animal-rescue-vehicle-and-medical-facili.jpg",
  },
]

export const mockReports: AnimalReport[] = [
  {
    id: "R001",
    type: "Dog",
    condition: "Injured leg, limping badly",
    location: "456 Oak Street, San Francisco, CA",
    description:
      "Medium-sized brown dog with white patches. Appears to be in pain and unable to put weight on front left leg. Very friendly but scared.",
    urgency: "high",
    reportedAt: new Date("2025-01-05T14:30:00"),
    status: "pending",
    imageUrl: "/brown-dog-with-white-patches-looking-sad-and-injur.jpg",
  },
  {
    id: "R002",
    type: "Cat",
    condition: "Malnourished, dehydrated",
    location: "789 Pine Avenue, Oakland, CA",
    description:
      "Small orange tabby cat, very thin and weak. Found near dumpster behind restaurant. Appears to have been abandoned.",
    urgency: "medium",
    reportedAt: new Date("2025-01-05T12:15:00"),
    status: "assigned",
    imageUrl: "/thin-orange-tabby-cat-looking-malnourished.jpg",
  },
  {
    id: "R003",
    type: "Bird",
    condition: "Injured wing, cannot fly",
    location: "Golden Gate Park, near Stow Lake",
    description: "Large seagull with damaged right wing. Bird is alert but unable to fly. Sitting near water.",
    urgency: "medium",
    reportedAt: new Date("2025-01-05T10:45:00"),
    status: "pending",
    imageUrl: "/seagull-with-injured-wing-sitting-near-water.jpg",
  },
  {
    id: "R004",
    type: "Dog",
    condition: "Hit by car, bleeding",
    location: "Mission Street & 24th Street intersection",
    description:
      "Large black dog hit by vehicle. Conscious but bleeding from leg. Traffic stopped. URGENT - needs immediate medical attention.",
    urgency: "critical",
    reportedAt: new Date("2025-01-05T16:20:00"),
    status: "pending",
    imageUrl: "/large-black-dog-lying-down-looking-injured.jpg",
  },
  {
    id: "R005",
    type: "Cat",
    condition: "Trapped in tree",
    location: "123 Elm Street backyard, Berkeley, CA",
    description: "Gray and white cat stuck in tall oak tree for 2 days. Meowing constantly. Owner unable to reach.",
    urgency: "low",
    reportedAt: new Date("2025-01-04T18:00:00"),
    status: "rescued",
    imageUrl: "/gray-and-white-cat-stuck-in-tree-looking-scared.jpg",
  },
  {
    id: "R006",
    type: "Wildlife",
    condition: "Baby raccoon, orphaned",
    location: "Tilden Regional Park, Berkeley",
    description:
      "Very young raccoon found alone, no mother in sight for several hours. Appears healthy but too young to survive alone.",
    urgency: "high",
    reportedAt: new Date("2025-01-05T09:30:00"),
    status: "assigned",
    imageUrl: "/baby-raccoon-looking-cute-and-vulnerable.jpg",
  },
]
