import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Team from "../components/Team";
import { stockImages } from "../data/siteData";

const principles = [
  "Small, senior, cross-functional teams",
  "Clear ownership and fast communication",
  "High standards for craft and delivery",
  "Long-term partnerships over short-term output",
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>Meet the specialists behind strategy, design, and engineering</>}
        description="Our team blends product thinking, visual design, and technical depth to help brands ship better digital experiences."
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Culture</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
              A collaborative culture centered on excellence and trust
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              We work as embedded partners, not distant vendors. That means shared momentum, transparent feedback, and a strong bias toward quality.
            </p>
            <div className="mt-8 space-y-3">
              {principles.map((principle) => (
                <div key={principle} className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-700">
                  {principle}
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
              <img src={stockImages.officeTeam} alt="NexaTech team at work" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={stockImages.officeMeeting} alt="Team workshop session" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={stockImages.officeCollab} alt="Collaborative product discussion" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <Team />
    </>
  );
}
