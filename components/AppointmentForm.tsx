"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  Stethoscope,
} from "lucide-react";

export default function AppointmentForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-()]{7,}$/.test(formState.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formState.doctor) newErrors.doctor = "Please select a doctor";
    if (!formState.date) newErrors.date = "Date is required";
    if (!formState.time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <section id="appointment" className="relative py-24 lg:py-32 bg-linear-to-b from-dental-light/30 to-transparent dark:from-dental-blue/3 dark:to-transparent">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="animate-scale-in">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-dental-green/10">
              <CheckCircle className="h-12 w-12 text-dental-green" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Appointment Booked!</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Thank you, {formState.name}! We&apos;ve received your appointment request. Our team will contact you shortly to confirm your appointment.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setFormState({
                  name: "",
                  email: "",
                  phone: "",
                  doctor: "",
                  date: "",
                  time: "",
                  message: "",
                });
              }}
              className="gradient-bg rounded-full border-0 px-8 text-white"
            >
              Book Another Appointment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-linear-to-b from-dental-light/30 to-transparent dark:from-dental-blue/3 dark:to-transparent"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-dental-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-dental-green/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="gradient-bg-subtle mb-4 rounded-full border-dental-blue/20 px-4 py-2 text-dental-blue">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Visit
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Schedule your visit today and take the first step towards a healthier, more beautiful smile.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left - Info Cards */}
          <div className={`space-y-6 lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Card className="border-border/50 bg-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dental-blue/10">
                    <Clock className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Working Hours</h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dental-green/10">
                    <Stethoscope className="h-6 w-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold">Emergency Care</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Dental emergencies can happen anytime. Our team is available 24/7 for urgent dental care.
                    </p>
                    <a href="tel:+1234567890" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-dental-blue hover:underline">
                      <Phone className="h-3 w-3" />
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-bg overflow-hidden border-0 text-white">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">First Visit?</h3>
                <p className="text-sm text-white/80">
                  New patients receive a complimentary dental exam and X-ray with their first appointment. No hidden fees!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right - Form */}
          <Card className={`lg:col-span-3 border-border/50 bg-card shadow-xl transition-all duration-700 delay-400 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <User className="h-4 w-4 text-dental-blue" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`rounded-xl border-border/50 transition-all focus:border-dental-blue focus:ring-dental-blue/20 ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="h-4 w-4 text-dental-blue" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`rounded-xl border-border/50 transition-all focus:border-dental-blue focus:ring-dental-blue/20 ${errors.email ? "border-red-400" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="h-4 w-4 text-dental-blue" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (234) 567-8900"
                      value={formState.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`rounded-xl border-border/50 transition-all focus:border-dental-blue focus:ring-dental-blue/20 ${errors.phone ? "border-red-400" : ""}`}
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Doctor */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <Stethoscope className="h-4 w-4 text-dental-blue" />
                      Select Doctor
                    </Label>
                    <Select value={formState.doctor} onValueChange={(v) => handleChange("doctor", v)}>
                      <SelectTrigger className={`rounded-xl border-border/50 ${errors.doctor ? "border-red-400" : ""}`}>
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-sarah">Dr. Sarah Johnson</SelectItem>
                        <SelectItem value="dr-michael">Dr. Michael Chen</SelectItem>
                        <SelectItem value="dr-emily">Dr. Emily Davis</SelectItem>
                        <SelectItem value="dr-james">Dr. James Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.doctor && <p className="text-xs text-red-500">{errors.doctor}</p>}
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="h-4 w-4 text-dental-blue" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formState.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className={`rounded-xl border-border/50 transition-all focus:border-dental-blue focus:ring-dental-blue/20 ${errors.date ? "border-red-400" : ""}`}
                    />
                    {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="h-4 w-4 text-dental-blue" />
                      Preferred Time
                    </Label>
                    <Select value={formState.time} onValueChange={(v) => handleChange("time", v)}>
                      <SelectTrigger className={`rounded-xl border-border/50 ${errors.time ? "border-red-400" : ""}`}>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                        <SelectItem value="5pm">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                    <Mail className="h-4 w-4 text-dental-blue" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dental concerns..."
                    value={formState.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="min-h-[100px] rounded-xl border-border/50 transition-all focus:border-dental-blue focus:ring-dental-blue/20"
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-bg w-full rounded-full border-0 py-6 text-base text-white shadow-lg shadow-dental-blue/25 transition-all hover:shadow-xl hover:shadow-dental-blue/30 hover:brightness-110 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Booking...
                    </div>
                  ) : (
                    <>
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Appointment
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
