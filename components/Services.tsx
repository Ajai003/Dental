"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Zap,
  Heart,
  Smile,
  Shield,
  Syringe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to remove plaque and tartar, leaving your teeth sparkling clean and healthy.",
    color: "dental-blue",
    bgColor: "bg-dental-blue/10",
    hoverBg: "group-hover:bg-dental-blue/20",
  },
  {
    icon: Zap,
    title: "Root Canal",
    description:
      "Advanced endodontic treatment to save infected teeth and eliminate pain with precision and care.",
    color: "dental-green",
    bgColor: "bg-dental-green/10",
    hoverBg: "group-hover:bg-dental-green/20",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    color: "dental-blue",
    bgColor: "bg-dental-blue/10",
    hoverBg: "group-hover:bg-dental-blue/20",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description:
      "Modern braces and clear aligners to straighten your teeth and create a perfect, confident smile.",
    color: "dental-green",
    bgColor: "bg-dental-green/10",
    hoverBg: "group-hover:bg-dental-green/20",
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and whitening treatments designed for stunning results.",
    color: "dental-blue",
    bgColor: "bg-dental-blue/10",
    hoverBg: "group-hover:bg-dental-blue/20",
  },
  {
    icon: Syringe,
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care in a fun and welcoming environment for your little ones.",
    color: "dental-green",
    bgColor: "bg-dental-green/10",
    hoverBg: "group-hover:bg-dental-green/20",
  },
];

export default function Services() {
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
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-linear-to-b from-dental-light/30 to-transparent dark:from-dental-blue/3 dark:to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"
            }`}
        >
          <Badge
            variant="secondary"
            className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
            Comprehensive <span className="gradient-text">Dental Care</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We offer a wide range of dental services to meet all your oral
            health needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-card 
                hover-lift cursor-pointer transition-all duration-500
                ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-dental-blue/5 to-dental-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <CardContent className="relative z-10 p-8">
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bgColor} transition-colors duration-300 ${service.hoverBg}`}
                >
                  <service.icon
                    className={`h-7 w-7 text-${service.color}`}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-sm font-medium text-dental-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
