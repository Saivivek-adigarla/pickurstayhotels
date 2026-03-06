import { motion } from "framer-motion";
import { Users, Award, MapPin, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: Award, value: "50+", label: "Curated Packages" },
  { icon: MapPin, value: "20+", label: "Partner Hotels" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Pick Your Stay</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Your trusted travel partner based in Visakhapatnam, Andhra Pradesh
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-card rounded-xl p-8 shadow-card space-y-4 text-muted-foreground">
            <p>
              Founded in Vizag, <strong className="text-foreground">Pick Your Stay</strong> was born from a simple idea: make travel to Andhra Pradesh's 
              most beautiful destinations effortless and memorable. Whether it's the misty heights of Araku Valley 
              or the sacred hills of Tirupati, we handle every detail so you can focus on making memories.
            </p>
            <p>
              Our team of local travel experts personally inspects every hotel, tests every route, and refines 
              every itinerary. We partner only with verified accommodations and trusted transport providers to 
              ensure your safety and comfort throughout the journey.
            </p>
            <p>
              What sets us apart is our deep knowledge of the region. As Vizag locals, we know the hidden gems, 
              the best seasons to visit, the most scenic viewpoints, and the authentic local experiences that 
              make a trip truly special.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-5 text-center shadow-card"
            >
              <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto mb-2">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Best Prices</h3>
              <p className="text-sm text-muted-foreground">We negotiate the best rates directly with hotels and transport partners.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">No Hidden Fees</h3>
              <p className="text-sm text-muted-foreground">What you see is what you pay. Complete transparency in pricing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Our team is always available before, during, and after your trip.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
