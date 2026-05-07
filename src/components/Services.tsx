import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks and technologies. Scalable, secure, and lightning-fast.",
    features: ["React & Next.js", "Node.js & Python", "Progressive Web Apps"],
    color: "from-blue-500 to-primary-600",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on every device.",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Human-centered design that creates intuitive, beautiful interfaces your users will love.",
    features: ["User Research", "Wireframing", "Design Systems"],
    color: "from-accent-500 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Enterprise cloud infrastructure and DevOps solutions that scale with your business needs.",
    features: ["AWS & Azure", "Kubernetes", "CI/CD Pipelines"],
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent solutions powered by artificial intelligence and machine learning to automate and optimize.",
    features: ["Predictive Analytics", "NLP & Computer Vision", "Custom AI Models"],
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-50",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50/50 relative overflow-hidden mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] text-navy-900 leading-tight">
            Comprehensive Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Every Challenge
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            From concept to deployment, we provide end-to-end technology services that transform ideas into powerful digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl bg-white border border-gray-100 p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative">
                <div className={`h-14 w-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="h-7 w-7 text-gray-700" />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>

                <div className="space-y-2">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
