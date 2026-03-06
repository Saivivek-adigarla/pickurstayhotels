import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book a trip with Pick Your Stay?", a: "Simply browse our packages or hotels, select your preferred option, and fill in the booking form. You can pay online or request a callback for assistance." },
  { q: "What is the cancellation policy?", a: "Free cancellation up to 7 days before the trip. 50% refund for cancellations 3-7 days prior. No refund within 3 days of departure." },
  { q: "Are the packages customizable?", a: "Yes! Contact us to customize any package — adjust duration, accommodation, activities, or add extra stops to your itinerary." },
  { q: "What should I pack for Araku Valley?", a: "Light woolens (Oct-Feb), comfortable walking shoes, rain gear (Jun-Sep), sunscreen, camera, and any personal medications." },
  { q: "Is Tirupati darshan guaranteed?", a: "We arrange special/VIP darshan tickets which have shorter wait times. However, exact darshan time depends on temple crowd management." },
  { q: "Do you offer group discounts?", a: "Yes! Groups of 10+ get 10% off, and groups of 20+ get 15% off. Contact us for custom group pricing." },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-5 border shadow-sm">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
