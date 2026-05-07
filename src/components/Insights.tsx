import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stockImages } from "../data/siteData";

const posts = [
  {
    title: "How premium UX increases SaaS conversion and retention",
    image: stockImages.analyticsDashboard,
    category: "Product Design",
    excerpt: "A practical breakdown of how design systems, onboarding, and micro-interactions lift product performance.",
  },
  {
    title: "Why modern analytics platforms need speed, trust, and clarity",
    image: stockImages.analyticsLaptop,
    category: "Engineering",
    excerpt: "Performance architecture and information hierarchy matter more than ever in data-dense enterprise products.",
  },
  {
    title: "Designing mobile experiences for finance and operations teams",
    image: stockImages.mobileStocks,
    category: "Mobile Strategy",
    excerpt: "From clarity under pressure to fast interaction design, what mobile-first product teams should prioritize.",
  },
];

export default function Insights() {
  return (
    <section className="bg-gray-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Insights</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl font-[Poppins]">
              Perspectives on design, technology, and growth
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-500">
            Explore the thinking behind the products we build and the systems we help teams scale.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/8"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">{post.category}</span>
                <h3 className="mt-4 text-xl font-bold leading-tight text-navy-900">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-500">{post.excerpt}</p>
                <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
