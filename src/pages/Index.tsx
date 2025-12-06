import { Phone, Clock, Shield, Truck, MapPin, Wrench, Car, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl tracking-wider text-foreground">RAPID TOW</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="hero" size="lg" className="hidden sm:flex">
            <Phone className="h-5 w-5" />
            (555) 123-4567
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 diagonal-stripe opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-primary text-sm font-medium">24/7 Emergency Service Available</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl text-foreground leading-none mb-6">
              FAST. RELIABLE.<br />
              <span className="text-gradient">ALWAYS THERE.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              When you are stranded on the road, every minute counts. Our professional team arrives fast 
              with the right equipment to get you moving again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <Phone className="h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Button variant="heroOutline" size="xl">
                Request Service
              </Button>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: "30 Min Response" },
                { icon: Shield, label: "Fully Insured" },
                { icon: MapPin, label: "50 Mile Radius" },
                { icon: Zap, label: "24/7 Available" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">OUR SERVICES</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From light-duty vehicles to heavy equipment, we have the fleet and expertise to handle any situation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: "Flatbed Towing",
                description: "Safe transport for all vehicle types including luxury and specialty cars.",
              },
              {
                icon: Wrench,
                title: "Roadside Assistance",
                description: "Battery jump, tire change, lockout service, and fuel delivery.",
              },
              {
                icon: Car,
                title: "Accident Recovery",
                description: "Professional accident scene cleanup and vehicle recovery.",
              },
              {
                icon: Truck,
                title: "Heavy-Duty Towing",
                description: "Commercial trucks, buses, RVs, and heavy machinery transport.",
              },
              {
                icon: MapPin,
                title: "Long Distance",
                description: "Cross-state and nationwide vehicle transportation services.",
              },
              {
                icon: Clock,
                title: "Emergency Service",
                description: "Round-the-clock emergency response for urgent situations.",
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
                TRUSTED BY<br />
                <span className="text-gradient">THOUSANDS</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience serving our community, Rapid Tow has built a reputation 
                for fast, professional, and reliable service. Our fully trained operators and modern fleet 
                ensure your vehicle is in the best hands.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "50K+", label: "Vehicles Towed" },
                  { value: "4.9", label: "Star Rating" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="font-display text-4xl text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <Truck className="h-32 w-32 text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <div className="text-center">
                  <div className="font-display text-3xl text-primary-foreground">24/7</div>
                  <div className="text-xs text-primary-foreground/80">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              NEED A TOW?<br />
              <span className="text-gradient">WE ARE ON THE WAY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Do not wait on the side of the road. Call now and our dispatcher will send the nearest available truck to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </Button>
              <Button variant="heroOutline" size="xl">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-5xl text-foreground mb-6">GET IN TOUCH</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have questions? Need a quote? Our team is here to help 24 hours a day, 7 days a week.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Emergency Line", value: "(555) 123-4567" },
                  { icon: MapPin, label: "Service Area", value: "Greater Metro Area & 50 Mile Radius" },
                  { icon: Clock, label: "Hours", value: "24/7 - Always Available" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-lg font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">REQUEST SERVICE</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your current location"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Service Needed</label>
                  <select className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Flatbed Towing</option>
                    <option>Roadside Assistance</option>
                    <option>Accident Recovery</option>
                    <option>Heavy-Duty Towing</option>
                    <option>Long Distance Transport</option>
                  </select>
                </div>
                <Button variant="hero" size="lg" className="w-full mt-4">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-display text-xl tracking-wider text-foreground">RAPID TOW</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Rapid Tow. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
