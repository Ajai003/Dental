"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Regular Patient",
    rating: 5,
    text: "SmileCare transformed my smile completely! The team is incredibly professional and made me feel comfortable throughout my entire treatment. I can't recommend them enough!",
    initials: "JM",
    gradient: "from-dental-blue to-cyan-400",
  },
  {
    name: "Robert Thompson",
    role: "Implant Patient",
    rating: 5,
    text: "After years of dental anxiety, I finally found a clinic that understands. Dr. Chen's gentle approach made my implant procedure painless. My new smile looks amazing!",
    initials: "RT",
    gradient: "from-dental-green to-emerald-400",
  },
  {
    name: "Amanda Lee",
    role: "Orthodontic Patient",
    rating: 5,
    text: "My Invisalign journey at SmileCare was fantastic. The results exceeded my expectations, and the staff was always helpful and encouraging. Worth every penny!",
    initials: "AL",
    gradient: "from-dental-blue to-dental-green",
  },
  {
    name: "David Williams",
    role: "Family Patient",
    rating: 5,
    text: "We bring our entire family to SmileCare. The kids love Dr. Wilson, and we appreciate the thorough care everyone receives. It's truly a one-stop dental destination.",
    initials: "DW",
    gradient: "from-cyan-400 to-dental-blue",
  },
  {
    name: "Sarah O'Brien",
    role: "Cosmetic Patient",
    rating: 5,
    text: "Dr. Davis gave me the smile I've always dreamed of. The veneers look incredibly natural, and the whole process was smooth and well-explained. Absolutely love my new look!",
    initials: "SO",
    gradient: "from-emerald-400 to-dental-green",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  const handleManualNav = (direction: "next" | "prev") => {
    setIsAutoPlaying(false);
    if (direction === "next") nextSlide();
    else prevSlide();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Get visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue">
            <Star className="mr-2 h-4 w-4 fill-dental-blue" />
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
            What Our <span className="gradient-text">Patients</span> Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real stories from real patients who trusted us with their smiles.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Cards Container */}
          <div className="grid gap-6 md:grid-cols-3">
            {getVisibleIndices().map((tIndex, position) => {
              const testimonial = testimonials[tIndex];
              return (
                <Card
                  key={`${tIndex}-${currentIndex}`}
                  className={`group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover-lift
                    ${position === 0 ? "block" : position === 1 ? "hidden md:block" : "hidden md:block"}`}
                >
                  <CardContent className="relative p-8">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-dental-blue/10" />

                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br ${testimonial.gradient} text-sm font-bold text-white`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav("prev")}
              className="rounded-full border-border/50 hover:border-dental-blue/30 hover:bg-dental-blue/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-dental-blue"
                      : "w-2 bg-border hover:bg-dental-blue/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav("next")}
              className="rounded-full border-border/50 hover:border-dental-blue/30 hover:bg-dental-blue/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
