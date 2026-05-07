import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stockImages } from "../data/siteData";

const filters = ["All", "Web", "Mobile", "Analytics", "Brand"];

const projects = [
  {
    title: "FinVault Dashboard",
    category: "Analytics",
    description: "Executive reporting workspace with live data feeds, KPI layering, and faster insight discovery.",
    image: stockImages.analyticsDashboard,
    tags: ["React", "TypeScript", "Data Viz"],
  },
  {
    title: "Pulse Mobile",
    category: "Mobile",
    description: "A mobile-first experience for performance tracking, alerts, and secure finance workflows.",
    image: stockImages.mobileStocks,
    tags: ["Mobile UX", "Biometrics", "Realtime"],
  },
  {
    title: "Orbit Commerce",
    category: "Web",
    description: "A redesigned commerce platform focused on speed, product storytelling, and conversion clarity.",
    image: stockImages.businessReports,
    tags: ["Next.js", "E-commerce", "CRO"],
  },
  {
    title: "Aether Workspace",
    category: "Brand",
    description: "Brand-led platform visuals combining premium storytelling with a technology-forward interface system.",
    image: stockImages.officeMeeting,
    tags: ["Brand System", "UX Strategy", "Identity"],
  },
  {
    title: "Signal Ops",
    category: "Analytics",
    description: "Operations control center built for faster decisions and clearer visibility across teams.",
    image: stockImages.analyticsLaptop,
    tags: ["Dashboards", "Cloud", "KPIs"],
  },
  {
    title: "FlowPay App",
    category: "Mobile",
    description: "Secure mobile payment and wallet experience designed around trust, speed, and simplicity.",
    image: stockImages.mobileChart,
    tags: ["iOS", "Android", "Fintech"],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Portfolio</span>
          <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl font-[Poppins]">
            Real product visuals from modern digital experiences
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            A curated selection of dashboard, mobile, and platform work shaped for performance, clarity, and trust.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${activeFilter}-${project.title}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/8"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900 backdrop-blur-xl">
                    {project.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-500">{project.description}</p>
                    </div>
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
