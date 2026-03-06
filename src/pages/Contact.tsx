import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mt-2">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <p className="text-4xl mb-4">✅</p>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                <p className="text-muted-foreground">We've received your message and will respond within 24 hours.</p>
                <Button className="mt-4" onClick={() => setSent(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-card space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input placeholder="+91 98765 43210" required />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@email.com" required />
                </div>
                <div>
                  <Label>Subject</Label>
                  <Input placeholder="How can we help?" required />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea placeholder="Tell us more..." rows={4} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 space-y-5">
            <div className="bg-card rounded-xl p-5 shadow-card space-y-4">
              <h3 className="font-display font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Office Address</p>
                    <p>Dwaraka Nagar, Visakhapatnam, AP 530016</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>hello@pickyourstay.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
