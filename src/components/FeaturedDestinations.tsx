import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import arakuImg from "@/assets/araku-valley-hero.jpg";
import tirupatiImg from "@/assets/tirupati-hero.jpg";
import borraImg from "@/assets/borra-caves.jpg";

const destinations = [
  {
    title: "Araku Valley",
    subtitle: "Hill Station Paradise",
    description: "Lush green valleys, coffee plantations, and tribal culture nestled in the Eastern Ghats.",
    image: arakuImg,
    packages: 12,
    startingPrice: "₹2,999",
  },
  {
    title: "Tirupati",
    subtitle: "Spiritual Capital",
    description: "Home to the sacred Sri Venkateswara Temple, one of the most visited pilgrimage sites in the world.",
    image: tirupatiImg,
    packages: 8,
    startingPrice: "₹1,999",
  },
  {
    title: "Borra Caves",
    subtitle: "Natural Wonder",
    description: "Million-year-old limestone caves with stunning stalactite and stalagmite formations.",
    image: borraImg,
    packages: 5,
    startingPrice: "₹2,999",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Popular Destinations</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Where Would You Like to Go?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From misty hills to sacred temples, explore the best of Andhra Pradesh with our curated travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to="/destinations"
                className="group block relative rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[4/5] relative">
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-1 text-secondary text-sm mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {dest.subtitle}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-card mb-2">{dest.title}</h3>
                    <p className="text-card/80 text-sm mb-3">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-card/70 text-sm">{dest.packages} packages from <strong className="text-secondary">{dest.startingPrice}</strong></span>
                      <ArrowRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
