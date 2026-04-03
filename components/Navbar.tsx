"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3 shadow-lg shadow-dental-blue/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 5.5 8 4 8C2.5 8 1 9.5 1 11.5S2.5 15 4 15C5.5 15 6.5 15.5 7 17.5C7.5 19.5 9.5 22 12 22S16.5 19.5 17 17.5C17.5 15.5 18.5 15 20 15C21.5 15 23 13.5 23 11.5S21.5 8 20 8C18.5 8 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
              </svg>
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">Smile</span>
              <span className="text-foreground">Care</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-dental-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span className="gradient-bg absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-dental-blue">
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <Button
              onClick={() => scrollToSection("#appointment")}
              className="gradient-bg rounded-full border-0 px-6 text-white shadow-lg shadow-dental-blue/25 transition-all hover:shadow-xl hover:shadow-dental-blue/30 hover:brightness-110"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-border/50 bg-background/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "gradient-bg-subtle text-dental-blue"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="my-4 h-px bg-border" />
                <Button
                  onClick={() => scrollToSection("#appointment")}
                  className="gradient-bg w-full rounded-full border-0 text-white"
                >
                  Book Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
