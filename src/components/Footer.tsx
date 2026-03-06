import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-4">Pick Your Stay</h3>
            <p className="text-sm leading-relaxed">
              Your trusted travel partner in Vizag. We craft unforgettable journeys to Araku Valley, Tirupati, and beyond with personalized service.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-secondary transition-colors">Packages</Link></li>
              <li><Link to="/hotels" className="hover:text-secondary transition-colors">Hotels</Link></li>
              <li><Link to="/booking" className="hover:text-secondary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Araku Valley</Link></li>
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Tirupati</Link></li>
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Borra Caves</Link></li>
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Vizag Beaches</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Dwaraka Nagar, Visakhapatnam, AP 530016</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@pickyourstay.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center text-sm text-background/50">
          <p>© 2026 Pick Your Stay. All rights reserved. | Based in Vizag with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
