import { motion } from "framer-motion";
import { BriefcaseBusiness, HeartPulse, GraduationCap, Landmark, ShoppingBag, Factory } from "lucide-react";

const industries = [
  { icon: BriefcaseBusiness, title: "SaaS & B2B", desc: "Platform design, growth funnels, subscription systems, and customer portals." },
  { icon: Landmark, title: "Finance", desc: "Secure dashboards, reporting tools, digital wallets, and compliance-aware products." },
  { icon: HeartPulse, title: "Healthcare", desc: "Patient-facing experiences, care operations, and data-rich health platforms." },
  { icon: ShoppingBag, title: "Commerce", desc: "Conversion-first storefronts, marketplace systems, and omnichannel operations." },
  { icon: GraduationCap, title: "Education", desc: "Learning platforms, onboarding flows, and engagement-centric student products." },
  { icon: Factory, title: "Enterprise", desc: "Workflow automation, internal tools, integrations, and scalable infrastructure." },
];

export default function Industries() {
  return (
    <section id="industries" className="mesh-gradient bg-gray-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Industries</span>
          <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl font-[Poppins]">
            Digital products tailored to complex industries
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            We design and engineer solutions that fit regulatory demands, user expectations, and growth goals across sectors.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-3xl border border-white bg-white p-8 shadow-sm shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <industry.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
