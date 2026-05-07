import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import { stockImages } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what you’re building and where you want to go next</>}
        description="Whether you need a strategic product partner, a platform redesign, or a high-performing engineering team, we’re ready to help."
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Start the conversation</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
              We help teams launch new products and improve existing ones
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Share your goals, current challenges, and timeline. We’ll outline the right scope, team structure, and next steps.
            </p>
            <div className="mt-8 rounded-3xl border border-primary-100 bg-primary-50 p-6 text-sm leading-7 text-gray-600">
              Typical response time: under 24 hours. We can support discovery, design, development, audits, or full product delivery.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 p-4 shadow-xl shadow-gray-200/40"
          >
            <img src={stockImages.officeMeeting} alt="Professional team meeting" className="h-full w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <Contact />
      <FAQ />
    </>
  );
}
