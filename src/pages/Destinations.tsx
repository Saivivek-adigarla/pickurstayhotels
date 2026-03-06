import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Sun, Camera, Coffee, ChevronRight } from "lucide-react";
import arakuImg from "@/assets/araku-valley-hero.jpg";
import tirupatiImg from "@/assets/tirupati-hero.jpg";
import borraImg from "@/assets/borra-caves.jpg";
import hotelImg from "@/assets/hotel-exterior.jpg";

const arakuHighlights = [
  { icon: Mountain, title: "Borra Caves", desc: "Million-year-old limestone formations deep inside the Eastern Ghats." },
  { icon: Coffee, title: "Coffee Plantations", desc: "Visit Arabica coffee estates and taste freshly brewed local coffee." },
  { icon: Camera, title: "Padmapuram Gardens", desc: "Beautiful botanical garden with a unique tree-top hut made entirely of a single tree." },
  { icon: Sun, title: "Chaparai Waterfalls", desc: "Scenic waterfall surrounded by dense forest, perfect for a refreshing dip." },
];

const tirupatiHighlights = [
  { icon: Sun, title: "Sri Venkateswara Temple", desc: "The richest and most visited temple in the world, atop the Tirumala hills." },
  { icon: Mountain, title: "Sri Kalahasti Temple", desc: "Ancient Shiva temple known for Rahu-Ketu puja and stunning Dravidian architecture." },
  { icon: Camera, title: "Silathoranam", desc: "A natural rock arch formation, one of its kind in Asia, near the temple." },
  { icon: MapPin, title: "Talakona Waterfalls", desc: "The highest waterfall in Andhra Pradesh, set in the Seshachalam hills." },
];

const Destinations = () => {
  return (
    <div>
      {/* Araku Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Hill Station</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">Araku Valley</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nestled at 1300m in the Eastern Ghats, Araku Valley is Andhra Pradesh's most enchanting hill station. 
                Known for its coffee plantations, tribal culture, and the spectacular Borra Caves, it's the perfect 
                escape from Vizag — just 115 km away via one of India's most scenic train routes.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span>📍 115 km from Vizag</span>
                <span>🌡️ 15°C - 30°C</span>
                <span>🗓️ Best: Oct - Mar</span>
              </div>
              <Button asChild>
                <Link to="/packages">View Araku Packages <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={arakuImg} alt="Araku Valley" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-14">
            {arakuHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-5 shadow-card"
              >
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-4">
        <div className="container">
          <div className="grid grid-cols-3 gap-3 rounded-xl overflow-hidden">
            <img src={borraImg} alt="Borra Caves" className="w-full h-48 md:h-64 object-cover" />
            <img src={hotelImg} alt="Araku Resort" className="w-full h-48 md:h-64 object-cover" />
            <img src={arakuImg} alt="Araku Landscape" className="w-full h-48 md:h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Tirupati Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
              <img src={tirupatiImg} alt="Tirupati Temple" className="rounded-xl shadow-elevated w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Pilgrimage</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">Tirupati</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Home to the world-famous Sri Venkateswara Temple atop the seven hills of Tirumala, 
                Tirupati is India's most visited pilgrimage destination. Experience divine blessings, 
                ancient architecture, and the spiritual energy that draws millions every year.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span>📍 650 km from Vizag</span>
                <span>🌡️ 22°C - 38°C</span>
                <span>🗓️ Best: Sep - Feb</span>
              </div>
              <Button asChild>
                <Link to="/packages">View Tirupati Packages <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-14">
            {tirupatiHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-5 shadow-card"
              >
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
