import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses with transformative technology solutions that drive sustainable growth and competitive advantage." },
  { icon: Lightbulb, title: "Innovation First", desc: "We leverage cutting-edge technologies and creative thinking to solve complex business challenges." },
  { icon: Users, title: "Client-Centric", desc: "Every solution is tailored to our clients' unique needs, ensuring maximum impact and ROI." },
  { icon: TrendingUp, title: "Results Driven", desc: "We measure our success by the tangible results and growth we deliver to our partners." },
];

const highlights = [
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
  "Scalable architecture",
  "Industry best practices",
  "Continuous innovation",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 tracking-wider uppercase mb-4">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] text-navy-900 leading-tight">
            Pioneering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Digital Innovation
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            With over a decade of experience, we've been at the forefront of digital transformation, helping businesses
            navigate the ever-evolving technology landscape.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600 p-1">
              <div className="rounded-[22px] bg-white p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-primary-50 p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 font-[Poppins]">12+</div>
                      <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                    </div>
                    <div className="rounded-2xl bg-accent-500/10 p-6 text-center">
                      <div className="text-3xl font-bold text-accent-600 font-[Poppins]">98%</div>
                      <div className="text-sm text-gray-600 mt-1">Retention Rate</div>
                    </div>
                  </div>
                  <div className="space-y-6 pt-8">
                    <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-6 text-center">
                      <div className="text-3xl font-bold text-white font-[Poppins]">500+</div>
                      <div className="text-sm text-white/80 mt-1">Happy Clients</div>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-6 text-center">
                      <div className="text-3xl font-bold text-navy-900 font-[Poppins]">24/7</div>
                      <div className="text-sm text-gray-600 mt-1">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-100 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-[Poppins] text-navy-900 mb-6">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              We are a team of passionate technologists, designers, and strategists dedicated to creating exceptional
              digital experiences. Our approach combines deep technical expertise with creative innovation to deliver
              solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-white border border-gray-100 p-8 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-500">
                <item.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
