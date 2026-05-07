import { motion } from "framer-motion";
import { BarChart3, Gauge, Lock, Workflow } from "lucide-react";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import { stockImages } from "../data/siteData";

const pillars = [
  { icon: Workflow, title: "Integrated Delivery", text: "Strategy, design, and engineering aligned in one workflow." },
  { icon: Gauge, title: "Performance First", text: "Fast, accessible experiences with measurable product impact." },
  { icon: Lock, title: "Secure by Default", text: "Security-aware systems and responsible architecture decisions." },
  { icon: BarChart3, title: "Growth Focused", text: "We build with analytics, retention, and iteration in mind." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Design, build, and scale digital products with one partner</>}
        description="From customer-facing experiences to enterprise systems, we deliver services that move businesses forward with confidence."
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Why teams choose us</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
              High-end product execution backed by real delivery discipline
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              We help brands move faster without sacrificing polish. Every engagement is designed to reduce uncertainty,
              accelerate decisions, and improve the quality of what ships.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">{pillar.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 p-4 shadow-xl shadow-gray-200/40"
          >
            <img src={stockImages.analyticsLaptop} alt="Analytics product on laptop" className="h-full w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <Services />
      <Process />
      <FAQ />
    </>
  );
}
