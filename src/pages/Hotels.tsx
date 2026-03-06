import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Wifi, UtensilsCrossed, Car, Waves, Dumbbell, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { hotels } from "@/data/packages";
import hotelRoomImg from "@/assets/hotel-room.jpg";
import hotelExtImg from "@/assets/hotel-exterior.jpg";

const imgMap: Record<string, string> = { "hotel-room": hotelRoomImg, "hotel-exterior": hotelExtImg };

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi, Restaurant: UtensilsCrossed, Parking: Car, Pool: Waves, Gym: Dumbbell,
};

const Hotels = () => {
  const [dest, setDest] = useState("all");
  const filtered = dest === "all" ? hotels : hotels.filter((h) => h.destination === dest);

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-foreground">Partner Hotels</h1>
          <p className="text-muted-foreground mt-2">Handpicked accommodations for your comfort</p>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Select value={dest} onValueChange={setDest}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Filter by location" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="araku">Araku Valley</SelectItem>
              <SelectItem value="tirupati">Tirupati</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((hotel, i) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
            >
              <div className="md:flex">
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={imgMap[hotel.image]} alt={hotel.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 md:w-3/5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">{hotel.name}</h3>
                      <p className="text-sm text-muted-foreground">{hotel.location}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-md">
                      <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      <span className="text-sm font-semibold text-primary">{hotel.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 5).map((a) => {
                      const Icon = amenityIcons[a];
                      return (
                        <span key={a} className="text-xs bg-muted px-2 py-1 rounded-full flex items-center gap-1 text-muted-foreground">
                          {Icon && <Icon className="h-3 w-3" />} {a}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">₹{hotel.pricePerNight.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm"> /night</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="font-display">{hotel.name}</DialogTitle>
                        </DialogHeader>
                        <img src={imgMap[hotel.image]} alt={hotel.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>

                        <h4 className="font-semibold text-foreground mb-2">Room Types</h4>
                        <div className="space-y-2 mb-4">
                          {hotel.roomTypes.map((room) => (
                            <div key={room.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <div>
                                <p className="font-medium text-sm text-foreground">{room.name}</p>
                                <p className="text-xs text-muted-foreground">Up to {room.capacity} guests</p>
                              </div>
                              <p className="font-bold text-primary">₹{room.price.toLocaleString()}</p>
                            </div>
                          ))}
                        </div>

                        <h4 className="font-semibold text-foreground mb-2">Amenities</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.map((a) => (
                            <span key={a} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{a}</span>
                          ))}
                        </div>

                        <Button asChild className="w-full">
                          <Link to="/booking">Book This Hotel</Link>
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
