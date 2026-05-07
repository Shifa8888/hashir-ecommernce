import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { stockImages } from "../data/siteData";

const metrics = [
  { value: "250+", label: "Projects launched" },
  { value: "99%", label: "Client satisfaction" },
  { value: "15+", label: "Countries served" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient pt-32 pb-20 lg:min-h-screen lg:pt-36">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[24rem] w-[24rem] rounded-full bg-accent-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-primary-300" />
              Trusted design and engineering for ambitious companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl font-[Poppins]"
            >
              Build digital products that feel
              <span className="gradient-text"> premium</span>, perform fast, and scale with confidence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
            >
              NexaTech partners with software companies, digital agencies, and enterprise teams to design, build, and launch modern customer experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-navy-900 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                View our work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {[
                "Product strategy",
                "UI/UX design",
                "Web platforms",
                "Mobile apps",
                "Cloud systems",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-14 grid max-w-2xl grid-cols-3 gap-5"
            >
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="text-2xl font-bold text-white font-[Poppins] sm:text-3xl">{item.value}</div>
                  <p className="mt-2 text-sm text-white/50">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:row-span-2">
                <img
                  src={stockImages.analyticsDashboard}
                  alt="Analytics dashboard product interface"
                  className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <img
                  src={stockImages.mobileStocks}
                  alt="Mobile product analytics screen"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <img
                  src={stockImages.officeTeam}
                  alt="Technology team working in office"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-8 hidden max-w-[220px] rounded-2xl border border-white/10 bg-navy-950/80 p-5 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Growth</p>
                    <p className="text-lg font-semibold text-white">+48.2% uplift</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 right-2 hidden rounded-2xl border border-white/10 bg-white p-5 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Delivery</p>
                    <p className="text-sm font-semibold text-navy-900">Launch-ready systems</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
