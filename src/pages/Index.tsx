import { useState, useEffect } from "react";
import { Phone, Clock, Shield, Truck, MapPin, Wrench, Car, Zap, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import truck3 from "@/assets/truck-3.jpg";
import truck4 from "@/assets/truck-4.jpg";
import truck5 from "@/assets/truck-5.jpg";
import truck6 from "@/assets/truck-6.jpg";
import truck7 from "@/assets/truck-7.jpg";
import truck8 from "@/assets/truck-8.jpg";
import truck9 from "@/assets/truck-9.jpg";

const sliderImages = [
  truck1,
  truck2,
  truck3,
  truck4,
  truck5,
  truck6,
  truck7,
  truck8,
  truck9,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Sky Auto and Towing" 
              className="h-12 md:h-14 w-12 md:w-14 object-contain rounded-full" 
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors font-medium">Gallery</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
          
          <a href="tel:2894891024" className="hidden sm:flex">
            <Button variant="hero" size="lg">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </a>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="tel:2894891024" className="w-full">
                <Button variant="hero" size="lg" className="w-full">
                  <Phone className="h-5 w-5" />
                  Call Now: (289) 489-1024
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: `url(${truck1})` }}
        />
        <div className="absolute inset-0 bg-background/30" />
        
        {/* Spacer to push content to bottom */}
        <div className="flex-1" />
        
        {/* Bottom Content Bar */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-3 md:p-6 animate-slide-up">
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Top on mobile / Left on desktop - Trust Badges */}
                <div className="grid grid-cols-4 gap-1.5 md:flex md:flex-wrap md:gap-3">
                  {[
                    { icon: Clock, label: "Fast Response" },
                    { icon: Shield, label: "Fully Insured" },
                    { icon: MapPin, label: "Hamilton" },
                    { icon: Zap, label: "24/7 Service" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 py-1.5 md:px-3 md:py-2 rounded-lg bg-primary/20 border border-primary/50 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-[10px] md:text-xs font-medium text-white text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Bottom on mobile / Right on desktop - Main Text & CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                  <h1 className="font-display text-base sm:text-lg md:text-2xl text-primary leading-tight font-bold text-center md:text-right">
                    Fast Reliable Towing Services in Hamilton
                  </h1>
                  <a href="tel:2894891024" className="w-full md:w-auto">
                    <Button variant="hero" size="default" className="w-full md:w-auto whitespace-nowrap">
                      <Phone className="h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-sm md:text-base">Call Now</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">Our Fleet</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Modern tow trucks ready to assist you anytime, anywhere in Hamilton and surrounding areas.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              {sliderImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Tow truck ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-6" : "bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Comprehensive towing and roadside assistance for all your needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Towing Services",
                description: "Safe and reliable towing for cars, trucks, and motorcycles.",
              },
              {
                icon: Wrench,
                title: "Roadside Assistance",
                description: "Battery jump, tire change, lockout service, and fuel delivery.",
              },
              {
                icon: Car,
                title: "Emergency Towing",
                description: "24/7 emergency response for accidents and breakdowns.",
              },
              {
                icon: MapPin,
                title: "Local & Nearby Coverage",
                description: "Serving Hamilton, Ontario and all surrounding areas.",
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-6 md:p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 font-bold">{service.title}</h3>
                <p className="text-muted-foreground font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-bold">
                Why Choose<br />
                <span className="text-gradient">SkyAuto and Towing?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 font-light">
                With years of experience serving Hamilton and the Greater Ontario area, 
                SkyAuto and Towing has built a reputation for fast, professional, and reliable service. 
                Our fully trained operators and modern fleet ensure your vehicle is in the best hands.
              </p>
              
              <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8">
                {[
                  { value: "24/7", label: "Availability" },
                  { value: "30min", label: "Avg Response" },
                  { value: "5★", label: "Rated Service" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="font-display text-2xl md:text-4xl text-primary mb-1 font-bold">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <a href="tel:2894891024">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5" />
                  Get Help Now
                </Button>
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={truck2} 
                    alt="SkyAuto and Towing truck" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 md:w-32 h-28 md:h-32 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-primary-foreground font-bold">24/7</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-bold">
              Need a Tow?<br />
              <span className="text-gradient">We're On Our Way!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-light">
              Don't wait on the side of the road. Call now and our dispatcher will send 
              the nearest available truck to your location immediately.
            </p>
            <a href="tel:2894891024">
              <Button variant="hero" size="xl" className="shadow-glow">
                <Phone className="h-6 w-6" />
                Call Now: (289) 489-1024
              </Button>
            </a>
            <p className="mt-4 text-primary font-medium text-lg">(289) 489-1024</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-bold">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-8 font-light">
                Have questions? Need a quote? Our team is here to help 24 hours a day, 7 days a week.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Emergency Line", value: "(289) 489-1024", href: "tel:2894891024" },
                  { icon: MapPin, label: "Service Area", value: "Hamilton, Ontario & Nearby Areas" },
                  { icon: Clock, label: "Hours", value: "24/7 - Always Available" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-6 font-bold">Request Service</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 font-medium">Location</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your current location"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 font-medium">Service Needed</label>
                  <select className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Towing Services</option>
                    <option>Roadside Assistance</option>
                    <option>Emergency Towing</option>
                    <option>Battery Jump Start</option>
                    <option>Tire Change</option>
                    <option>Lockout Service</option>
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
      <footer className="py-8 md:py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Sky Auto and Towing" 
                className="h-10 w-10 object-contain rounded-full" 
              />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground">SkyAuto and Towing</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm font-light">
                Service Area: Hamilton, Ontario & Surrounding Areas
              </p>
              <a href="tel:2894891024" className="text-primary font-medium hover:underline">
                (289) 489-1024
              </a>
            </div>
            <p className="text-muted-foreground text-sm font-light">
              © 2024 SkyAuto and Towing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;