"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Shield, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-dental-light via-white to-dental-mint/20 dark:from-background dark:via-background dark:to-dental-blue/5"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-dental-blue/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-dental-green/10 blur-3xl" />
        <div className="animate-float absolute top-1/4 left-[10%] h-20 w-20 rounded-2xl bg-dental-blue/10 blur-xl" />
        <div className="animate-float absolute bottom-1/4 right-[15%] h-16 w-16 rounded-full bg-dental-green/10 blur-xl" style={{ animationDelay: "2s" }} />
        <div className="animate-float absolute top-1/3 right-[30%] h-12 w-12 rounded-full bg-dental-blue/5 blur-lg" style={{ animationDelay: "4s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQUJFRjkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yem0yIDBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <Badge
              variant="secondary"
              className="gradient-bg-subtle w-fit rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue"
            >
              <Shield className="mr-2 h-4 w-4" />
              Trusted by 10,000+ Patients
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Your{" "}
                <span className="gradient-text">Smile</span>,<br />
                Our{" "}
                <span className="relative">
                  Priority
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C30 3 70 2 100 5C130 8 170 9 198 4" stroke="#3ABEF9" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to transforming your smile.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollTo("#appointment")}
                className="gradient-bg group rounded-full border-0 px-8 py-6 text-base text-white shadow-xl shadow-dental-blue/25 transition-all hover:shadow-2xl hover:shadow-dental-blue/30 hover:brightness-110"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#services")}
                className="rounded-full border-dental-blue/20 px-8 py-6 text-base transition-all hover:border-dental-blue/40 hover:bg-dental-blue/5"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental-blue/10">
                  <Award className="h-6 w-6 text-dental-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold">15+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental-green/10">
                  <Shield className="h-6 w-6 text-dental-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Certified</p>
                  <p className="text-xs text-muted-foreground">Professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental-blue/10">
                  <Clock className="h-6 w-6 text-dental-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold">24/7</p>
                  <p className="text-xs text-muted-foreground">Emergency Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 scale-95 rounded-3xl bg-linear-to-br from-dental-blue/20 to-dental-green/20 blur-3xl" />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-dental-blue/10">
                <Image
                  src="/Dental.png"
                  alt="SmileCare Dental Clinic - Modern dental care facility"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-dental-dark/20 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-lg dark:bg-card/90">
                <div className="flex items-center gap-3">
                  <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">4.9/5</p>
                    <p className="text-xs text-muted-foreground">Patient Rating</p>
                  </div>
                </div>
              </div>

              {/* Floating appointment card */}
              <div className="animate-float absolute -top-4 -right-4 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-lg dark:bg-card/90" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dental-green/10 text-dental-green">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground">Monthly Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
