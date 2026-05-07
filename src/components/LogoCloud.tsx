import { motion } from "framer-motion";
import { clients } from "../data/siteData";

export default function LogoCloud() {
  return (
    <section className="border-y border-gray-100 bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Trusted by leading teams
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:w-auto lg:grid-cols-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 text-center text-sm font-semibold tracking-wide text-gray-500"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
