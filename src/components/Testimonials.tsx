import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    content:
      "NexaTech transformed our entire digital infrastructure. Their team's expertise in cloud architecture and AI integration helped us achieve a 300% increase in operational efficiency. Truly exceptional work.",
    rating: 5,
    initials: "SM",
    color: "from-primary-500 to-accent-500",
  },
  {
    name: "David Chen",
    role: "CTO, GlobalRetail Co.",
    content:
      "The mobile app they built for us exceeded all expectations. User engagement increased by 180% within the first quarter. Their attention to detail and commitment to quality is unmatched.",
    rating: 5,
    initials: "DC",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product, FinServe",
    content:
      "Working with NexaTech was a game-changer for our platform. They delivered a complex financial dashboard ahead of schedule with outstanding quality. Their agile approach kept us informed at every step.",
    rating: 5,
    initials: "ER",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Michael Park",
    role: "Founder, HealthTech Labs",
    content:
      "Their AI/ML team built a predictive analytics system that revolutionized our patient care protocols. The accuracy and reliability of the solution have been remarkable. Highly recommended.",
    rating: 5,
    initials: "MP",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Lisa Thompson",
    role: "Director, EduForward",
    content:
      "NexaTech delivered an incredible e-learning platform that serves over 100,000 students daily. Their understanding of scalability and user experience is phenomenal. A truly world-class team.",
    rating: 5,
    initials: "LT",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] text-white leading-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12"
                >
                  <Quote className="h-12 w-12 text-primary-500/30 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 font-light italic">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">{testimonials[current].name}</div>
                      <div className="text-white/50 text-sm">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary-500" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
