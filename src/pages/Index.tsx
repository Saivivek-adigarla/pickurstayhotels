import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import FeaturedPackages from "@/components/FeaturedPackages";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Headphones, CreditCard, MapPin } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Verified Hotels", desc: "All properties personally inspected" },
  { icon: Headphones, label: "24/7 Support", desc: "Always here when you need us" },
  { icon: CreditCard, label: "Secure Payments", desc: "SSL encrypted transactions" },
  { icon: MapPin, label: "Local Experts", desc: "Vizag-based travel specialists" },
];

const Index = () => {
  return (
    <div>
      <HeroSection />

      {/* Trust strip */}
      <section className="py-8 bg-card border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedDestinations />
      <FeaturedPackages />
      <TestimonialsSection />
      <FAQSection />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Let us plan the perfect trip for you. From Araku's misty hills to Tirupati's sacred temples.
          </p>
          <div className="flex justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/packages">Browse Packages</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
