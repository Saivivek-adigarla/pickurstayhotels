import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import arakuImg from "@/assets/araku-valley-hero.jpg";
import tirupatiImg from "@/assets/tirupati-hero.jpg";

const imageMap: Record<string, string> = { araku: arakuImg, tirupati: tirupatiImg };

const FeaturedPackages = () => {
  const featured = packages.filter((p) => p.featured);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Best Sellers</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Featured Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={imageMap[pkg.image]}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {pkg.featured && (
                  <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                  {pkg.destination === "araku" ? "Araku Valley" : "Tirupati"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{pkg.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-secondary text-secondary" /> {pkg.rating}
                    <span className="text-muted-foreground/60">({pkg.reviews})</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-muted-foreground line-through text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="text-xl font-bold text-primary ml-2">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm"> /person</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link to={`/packages`}>View <ChevronRight className="h-4 w-4 ml-0.5" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/packages">View All Packages <ChevronRight className="h-5 w-5 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
