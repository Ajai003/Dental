"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Teeth Cleaning",
  "Root Canal",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-linear-to-r from-dental-blue via-dental-green to-dental-blue" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="flex items-center gap-2">
              <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 5.5 8 4 8C2.5 8 1 9.5 1 11.5S2.5 15 4 15C5.5 15 6.5 15.5 7 17.5C7.5 19.5 9.5 22 12 22S16.5 19.5 17 17.5C17.5 15.5 18.5 15 20 15C21.5 15 23 13.5 23 11.5S21.5 8 20 8C18.5 8 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                <span className="gradient-text">Smile</span>Care
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing world-class dental care with cutting-edge technology and a compassionate team dedicated to your smile.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-dental-blue" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-dental-blue" />
                <span>info@smilecare.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-dental-blue" />
                <span>123 Dental Ave, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-dental-blue"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-dental-green"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for dental tips and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-dental-blue"
                required
              />
              <Button
                type="submit"
                className="gradient-bg w-full rounded-full border-0 text-white transition-all hover:brightness-110"
              >
                {subscribed ? "Subscribed! ✓" : "Subscribe"}
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-dental-blue/50 hover:bg-dental-blue/10 hover:text-dental-blue"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> for healthy smiles
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-dental-blue">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-dental-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
