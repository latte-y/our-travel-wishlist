"use client"

import { MapPin, Plus, Check, Heart, Plane, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      title: "Santorini Sunset",
      location: "Santorini, Greece",
      image: "/images/ritz.jpeg",
      note: "Watch the sunset from Oia village - perfect for our anniversary!",
      visited: false,
    },
    {
      id: 2,
      title: "Cherry Blossom Season",
      location: "Kyoto, Japan",
      image: "/images/ritz.jpeg",
      note: "Spring temple visits and traditional tea ceremonies",
      visited: true,
    },
    {
      id: 3,
      title: "Northern Lights Adventure",
      location: "Reykjavik, Iceland",
      image: "/images/ritz.jpeg",
      note: "Hot springs under the aurora borealis - magical winter getaway",
      visited: false,
    },
    {
      id: 4,
      title: "Safari Dreams",
      location: "Serengeti, Tanzania",
      image: "/images/ritz.jpeg",
      note: "Wildlife photography and luxury camping experience",
      visited: false,
    },
    {
      id: 5,
      title: "Romantic Paris",
      location: "Paris, France",
      image: "/images/ritz.jpeg",
      note: "Seine river cruise and cozy café mornings",
      visited: true,
    },
    {
      id: 6,
      title: "Tropical Paradise",
      location: "Bora Bora, French Polynesia",
      image: "/images/ritz.jpeg",
      note: "Overwater bungalow and crystal clear lagoons",
      visited: false,
    },
    {
      id: 7,
      title: "Ancient Wonders",
      location: "Machu Picchu, Peru",
      image: "/images/ritz.jpeg",
      note: "Hiking the Inca Trail together - adventure of a lifetime",
      visited: false,
    },
    {
      id: 8,
      title: "Desert Romance",
      location: "Marrakech, Morocco",
      image: "/images/ritz.jpeg",
      note: "Camel rides and stargazing in the Sahara",
      visited: false,
    },
  ])

  const totalDestinations = destinations.length
  const visitedCount = destinations.filter((dest) => dest.visited).length
  const unvisitedCount = totalDestinations - visitedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-orange-500">
            <Plane className="h-7 w-7" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Travel Wishlist</h1>
            <Heart className="h-6 w-6 fill-current text-red-400" />
          </div>
          <div className="space-y-2">
            <p className="text-xl text-gray-700 font-medium">
              You&apos;ve saved <span className="text-orange-600 font-bold">{totalDestinations}</span> dream destinations!
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-600">{visitedCount} visited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-gray-600">{unvisitedCount} to explore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add New Destination Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white shadow-lg px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Destination
          </Button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-48">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  {destination.visited ? (
                    <Badge className="bg-green-500 hover:bg-green-500 text-white shadow-lg">
                      <Check className="h-3 w-3 mr-1" />
                      Visited
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 shadow-lg">
                      <Camera className="h-3 w-3 mr-1" />
                      Wishlist
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 left-3">
                  <Checkbox
                    checked={destination.visited}
                    onCheckedChange={() => {
                      setDestinations((prev) =>
                        prev.map((d) =>
                          d.id === destination.id ? { ...d, visited: !d.visited } : d
                        )
                      )
                    }}
                    className="bg-white/90 border-2 border-white shadow-lg data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  />
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                    {destination.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{destination.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational Footer */}
        <div className="text-center py-8 space-y-2">
          <p className="text-gray-600 italic text-lg">
            &quot;The world is a book, and those who do not travel read only one page.&quot;
          </p>
          <p className="text-gray-500 text-sm">Start planning your next adventure together! ✈️</p>
        </div>
      </div>
    </div>
  )
}
