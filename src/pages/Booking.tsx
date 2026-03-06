import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { packages } from "@/data/packages";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", travelDate: "", packageId: "", travelers: "2", paymentMode: "callback", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.travelDate || !form.packageId) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Booking Request Sent! 🎉", description: "We'll contact you within 2 hours to confirm." });
  };

  if (submitted) {
    return (
      <div className="py-20">
        <div className="container max-w-lg text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          </motion.div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">Booking Request Received!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you, <strong>{form.name}</strong>! Our travel expert will contact you at <strong>{form.phone}</strong> within 2 hours to confirm your trip details and payment.
          </p>
          <div className="bg-card rounded-xl p-5 shadow-card text-left mb-6">
            <h3 className="font-semibold text-foreground mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">Package:</span> <strong>{packages.find(p => p.id === form.packageId)?.title}</strong></p>
              <p><span className="text-muted-foreground">Travel Date:</span> <strong>{form.travelDate}</strong></p>
              <p><span className="text-muted-foreground">Travelers:</span> <strong>{form.travelers}</strong></p>
              <p><span className="text-muted-foreground">Payment:</span> <strong>{form.paymentMode === "online" ? "Online Payment" : "Callback Requested"}</strong></p>
            </div>
          </div>
          <Button onClick={() => setSubmitted(false)}>Book Another Trip</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-foreground">Book Your Trip</h1>
          <p className="text-muted-foreground mt-2">Fill in your details and we'll handle the rest</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
              <h3 className="font-display font-semibold text-foreground text-lg">Traveler Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                </div>
                <div>
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select value={form.travelers} onValueChange={(v) => setForm({ ...form, travelers: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Person" : "People"}</SelectItem>
                      ))}
                      <SelectItem value="10+">10+ (Group)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
              <h3 className="font-display font-semibold text-foreground text-lg">Trip Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="package">Select Package *</Label>
                  <Select value={form.packageId} onValueChange={(v) => setForm({ ...form, packageId: v })}>
                    <SelectTrigger><SelectValue placeholder="Choose a package" /></SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id}>{pkg.title} — ₹{pkg.price.toLocaleString()}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Preferred Travel Date *</Label>
                  <Input id="date" type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} required />
                </div>
              </div>
              <div>
                <Label htmlFor="payment">Payment Preference</Label>
                <Select value={form.paymentMode} onValueChange={(v) => setForm({ ...form, paymentMode: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="callback">Request Callback / Quote</SelectItem>
                    <SelectItem value="online">Pay Online (UPI/Card)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Special Requests</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any special requirements..." rows={3} />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Submit Booking Request
            </Button>
          </form>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-card rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-3">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@pickyourstay.in</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Dwaraka Nagar, Vizag</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
              <h3 className="font-semibold text-foreground text-sm mb-2">✨ Why Book With Us?</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>✓ Best price guarantee</li>
                <li>✓ Free cancellation (7 days before)</li>
                <li>✓ 24/7 travel support</li>
                <li>✓ Verified hotels & transport</li>
                <li>✓ No hidden charges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
