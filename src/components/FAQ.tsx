import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical product engagement take?",
    answer:
      "Most projects run between 8 and 20 weeks depending on scope, complexity, and integration requirements. We define a clear roadmap and milestones before kickoff.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We offer end-to-end strategy, UX/UI design, frontend and backend engineering, QA, launch support, and post-release optimization.",
  },
  {
    question: "Can you modernize an existing platform?",
    answer:
      "Absolutely. We frequently redesign legacy platforms, migrate infrastructure, improve performance, and add new product capabilities without disrupting operations.",
  },
  {
    question: "Do you work with startups and enterprise teams?",
    answer:
      "We support both. Our delivery model adapts to startup speed, enterprise governance, and hybrid teams that need strategic and technical partnership.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl font-[Poppins]">
            Common questions from growing companies
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
            Clear timelines, collaborative workflows, and scalable delivery are central to how we partner with clients.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-navy-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-gray-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
