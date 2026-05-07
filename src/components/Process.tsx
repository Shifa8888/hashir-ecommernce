import { motion } from "framer-motion";
import { Search, PenTool, Layers3, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    text: "We align business goals, user needs, and technical direction through deep research and collaborative workshops.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "We design premium interfaces, conversion-focused flows, and brand-consistent product experiences.",
  },
  {
    icon: Layers3,
    title: "Build",
    text: "Our engineers ship scalable products with modern architecture, automation, and clean code standards.",
  },
  {
    icon: Rocket,
    title: "Scale",
    text: "We optimize launch, analytics, performance, and iteration so your product keeps growing after release.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Our Process</span>
          <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl font-[Poppins]">
            Strategy-led execution from concept to launch
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Every engagement follows a proven framework that keeps teams aligned, products refined, and delivery predictable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:bg-white hover:shadow-xl hover:shadow-primary-500/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary-300">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-500">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
