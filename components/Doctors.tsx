"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "General Dentistry",
    experience: "12 years",
    bio: "Specializing in preventive care and patient comfort with a gentle, thorough approach.",
    gradient: "from-dental-blue to-cyan-400",
    initials: "SJ",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Orthodontics",
    experience: "15 years",
    bio: "Expert in braces and aligners, creating beautiful smiles with precision and artistry.",
    gradient: "from-dental-green to-emerald-400",
    initials: "MC",
  },
  {
    name: "Dr. Emily Davis",
    specialization: "Cosmetic Dentistry",
    experience: "10 years",
    bio: "Passionate about smile makeovers, veneers, and teeth whitening transformations.",
    gradient: "from-dental-blue to-dental-green",
    initials: "ED",
  },
  {
    name: "Dr. James Wilson",
    specialization: "Pediatric Dentistry",
    experience: "8 years",
    bio: "Making dental visits fun for kids with a caring, patient-centered approach.",
    gradient: "from-cyan-400 to-dental-blue",
    initials: "JW",
  },
];

export default function Doctors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="doctors" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue">
            Our Team
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
            Meet Our <span className="gradient-text">Experts</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-card hover-lift transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Doctor Avatar Area */}
                <div className="relative overflow-hidden">
                  <div className={`flex h-56 items-center justify-center bg-linear-to-br ${doctor.gradient}`}>
                    {/* Large initials avatar */}
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 backdrop-blur-sm">
                      <span className="text-3xl font-bold text-white">{doctor.initials}</span>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
                  </div>

                  {/* Experience badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-lg backdrop-blur-sm dark:bg-card/90">
                    <Award className="h-3 w-3 text-dental-blue" />
                    {doctor.experience}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold">{doctor.name}</h3>
                  <p className="mb-3 text-sm font-medium text-dental-blue">{doctor.specialization}</p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                      <button
                        key={i}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-dental-blue/30 hover:bg-dental-blue/10 hover:text-dental-blue"
                        aria-label={`Social media link ${i + 1}`}
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
