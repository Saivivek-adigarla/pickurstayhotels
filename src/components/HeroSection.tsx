import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import vizagHero from "@/assets/vizag-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <img
        src={vizagHero}
        alt="Beautiful coastline of Vizag"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-primary-foreground/80 text-sm font-body">Trusted by 5000+ happy travelers</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Discover the Beauty of{" "}
            <span className="text-secondary">Andhra Pradesh</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-body mb-8 max-w-lg">
            Curated trips to Araku Valley & Tirupati from Vizag. Handpicked hotels, seamless bookings, unforgettable memories.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="secondary" asChild className="text-base font-semibold">
              <Link to="/packages">
                Explore Packages <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link to="/booking">Book Your Trip</Link>
            </Button>
          </div>

          <div className="flex gap-6 mt-10 text-primary-foreground/80 text-sm font-body">
            <div><span className="text-2xl font-bold text-primary-foreground">50+</span><br />Curated Packages</div>
            <div><span className="text-2xl font-bold text-primary-foreground">20+</span><br />Partner Hotels</div>
            <div><span className="text-2xl font-bold text-primary-foreground">5K+</span><br />Happy Travelers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
