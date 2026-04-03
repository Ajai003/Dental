"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Dental Avenue, Suite 100", "New York, NY 10001"],
    color: "dental-blue",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-8900", "+1 (234) 567-8901"],
    color: "dental-green",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@smilecare.com", "appointments@smilecare.com"],
    color: "dental-blue",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon-Fri: 8AM - 8PM", "Sat-Sun: 9AM - 6PM"],
    color: "dental-green",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-linear-to-b from-dental-light/30 to-transparent dark:from-dental-blue/3 dark:to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue">
            <MapPin className="mr-2 h-4 w-4" />
            Contact Us
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Info + Map */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {/* Contact Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group border-border/50 bg-card hover-lift transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-${info.color}/10 transition-colors group-hover:bg-${info.color}/20`}>
                        <info.icon className={`h-5 w-5 text-${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-xs text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="overflow-hidden border-border/50 bg-card">
              <CardContent className="p-0">
                <div className="relative h-[280px] w-full overflow-hidden rounded-b-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132702!2d-73.98784892397957!3d40.75797607138568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1687361720000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SmileCare Dental Clinic Location"
                    className="grayscale transition-all hover:grayscale-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Quick Message Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Card className="border-border/50 bg-card shadow-xl">
              <CardContent className="p-8">
                <h3 className="mb-2 text-xl font-bold">Send Us a Message</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {messageSent ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-dental-green/10">
                      <CheckCircle className="h-8 w-8 text-dental-green" />
                    </div>
                    <h4 className="text-lg font-bold">Message Sent!</h4>
                    <p className="text-sm text-muted-foreground">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-sm font-medium">Your Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl border-border/50 focus:border-dental-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-medium">Email Address</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl border-border/50 focus:border-dental-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-sm font-medium">Your Message</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-[140px] rounded-xl border-border/50 focus:border-dental-blue"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="gradient-bg w-full rounded-full border-0 py-6 text-base text-white shadow-lg shadow-dental-blue/25 transition-all hover:shadow-xl hover:shadow-dental-blue/30 hover:brightness-110"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
