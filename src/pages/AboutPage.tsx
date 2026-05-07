import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import About from "../components/About";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import { stockImages } from "../data/siteData";

const milestones = [
  { value: "12+", label: "Years building digital products" },
  { value: "250+", label: "Launches delivered across markets" },
  { value: "50+", label: "Specialists in design and engineering" },
  { value: "99%", label: "Client satisfaction and retention" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NexaTech"
        title={<>A technology partner built for ambitious brands</>}
        description="We combine strategy, design, and engineering to help organizations launch better digital products and scale with confidence."
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Our Story</span>
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
              Premium product thinking with enterprise-grade execution
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
              NexaTech was built to close the gap between business ambition and product delivery. We partner with teams that need
              sharp strategy, polished design, and dependable engineering in one place.
            </p>
            <p className="text-lg leading-relaxed text-gray-500">
              From early-stage startups to established enterprises, we help teams create experiences that feel modern, perform at
              scale, and build lasting trust with customers.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {milestones.map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-3xl font-bold text-primary-600 font-[Poppins]">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="overflow-hidden rounded-3xl sm:col-span-2">
              <img src={stockImages.officeMeeting} alt="Technology team collaboration" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={stockImages.officeTeam} alt="Developers working in office" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={stockImages.officeCollab} alt="Team discussing digital products" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <About />
      <Process />
      <FAQ />
    </>
  );
}
