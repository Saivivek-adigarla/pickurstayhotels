import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { packages } from "@/data/packages";
import arakuImg from "@/assets/araku-valley-hero.jpg";
import tirupatiImg from "@/assets/tirupati-hero.jpg";

const imageMap: Record<string, string> = { araku: arakuImg, tirupati: tirupatiImg };

const Packages = () => {
  const [destination, setDestination] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [accommodation, setAccommodation] = useState("all");

  let filtered = [...packages];
  if (destination !== "all") filtered = filtered.filter((p) => p.destination === destination);
  if (accommodation !== "all") filtered = filtered.filter((p) => p.accommodationType === accommodation);

  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "duration") filtered.sort((a, b) => a.days - b.days);
  else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-foreground">Trip Packages</h1>
          <p className="text-muted-foreground mt-2">Choose from our curated travel packages</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-card rounded-xl shadow-sm border">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Destination" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Destinations</SelectItem>
              <SelectItem value="araku">Araku Valley</SelectItem>
              <SelectItem value="tirupati">Tirupati</SelectItem>
            </SelectContent>
          </Select>
          <Select value={accommodation} onValueChange={setAccommodation}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Accommodation" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Sort By" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={imageMap[pkg.image]} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full capitalize">
                  {pkg.accommodationType}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{pkg.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-secondary text-secondary" /> {pkg.rating}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pkg.description}</p>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground mb-1">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.inclusions.slice(0, 3).map((inc) => (
                      <span key={inc} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{inc}</span>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{pkg.inclusions.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Itinerary preview */}
                <div className="mb-4 border-t pt-3">
                  <p className="text-xs font-semibold text-foreground mb-2">Itinerary:</p>
                  {pkg.itinerary.map((day) => (
                    <p key={day.day} className="text-xs text-muted-foreground mb-1">
                      <strong>Day {day.day}:</strong> {day.title}
                    </p>
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-muted-foreground line-through text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="text-xl font-bold text-primary ml-2">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs"> /person</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No packages found with the selected filters.</p>
            <Button variant="outline" className="mt-4" onClick={() => { setDestination("all"); setAccommodation("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
