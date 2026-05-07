import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import { stockImages } from "../data/siteData";

const caseStudies = [
  {
    title: "Revenue intelligence suite",
    metrics: ["+42% faster reporting", "3x stakeholder adoption"],
    image: stockImages.analyticsDashboard,
  },
  {
    title: "Executive analytics workspace",
    metrics: ["-38% operational lag", "+57% decision clarity"],
    image: stockImages.businessReports,
  },
  {
    title: "Mobile finance experience",
    metrics: ["+71% mobile engagement", "4.9 average user rating"],
    image: stockImages.mobileChart,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected launches with measurable business impact</>}
        description="A snapshot of the interfaces, systems, and experiences we build for fast-moving companies across digital products and operations."
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Featured case studies</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
              Real product visuals paired with outcome-driven storytelling
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-primary-500/8 transition-all duration-300"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.metrics.map((metric) => (
                      <li key={metric} className="text-sm leading-7 text-gray-500">• {metric}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <Testimonials />
    </>
  );
}
