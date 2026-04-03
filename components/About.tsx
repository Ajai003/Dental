"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, CheckCircle } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold gradient-text sm:text-5xl">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function About() {
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

  const stats = [
    { icon: Award, value: 15, suffix: "+", label: "Years of Experience" },
    { icon: Users, value: 10000, suffix: "+", label: "Happy Patients" },
    { icon: Heart, value: 25, suffix: "+", label: "Expert Dentists" },
    { icon: CheckCircle, value: 98, suffix: "%", label: "Success Rate" },
  ];

  const features = [
    "State-of-the-art dental equipment",
    "Comfortable and relaxing environment",
    "Personalized treatment plans",
    "Affordable pricing with insurance support",
    "Emergency dental services available",
    "Child-friendly dental care",
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-dental-blue/2 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue">
            About Us
          </Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Why Choose <span className="gradient-text">SmileCare</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            For over 15 years, we&apos;ve been dedicated to providing exceptional dental care with a personal touch.
          </p>
        </div>

        {/* Content Grid */}
        <div className={`grid gap-16 lg:grid-cols-2 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Left side - Description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Delivering <span className="gradient-text">World-Class</span> Dental Care
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                At SmileCare Dental Clinic, we believe that everyone deserves a beautiful, healthy smile.
                Our team of experienced dentists uses the latest technology and techniques to ensure you
                receive the best possible care in a comfortable and welcoming environment.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                From routine check-ups to complex dental procedures, we are committed to making your
                dental experience as pleasant as possible. Your comfort and satisfaction are our top priorities.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-dental-blue/5"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dental-green/10">
                    <CheckCircle className="h-4 w-4 text-dental-green" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 text-center shadow-lg"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-dental-blue/5 to-dental-green/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-dental-blue/10 transition-colors group-hover:bg-dental-blue/20">
                    <stat.icon className="h-7 w-7 text-dental-blue" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
