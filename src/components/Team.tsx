import { motion } from "framer-motion";


const team = [
  {
    name: "Alexander Wright",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation and digital transformation.",
    initials: "AW",
    gradient: "from-primary-500 to-accent-600",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sophia Nakamura",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable systems and AI integration.",
    initials: "SN",
    gradient: "from-emerald-500 to-teal-600",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Marcus Johnson",
    role: "Head of Design",
    bio: "Award-winning designer creating human-centered digital experiences.",
    initials: "MJ",
    gradient: "from-orange-500 to-red-500",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Elena Petrova",
    role: "VP of Engineering",
    bio: "Expert in cloud infrastructure, DevOps, and high-performance systems.",
    initials: "EP",
    gradient: "from-cyan-500 to-blue-600",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "James O'Brien",
    role: "Lead AI Engineer",
    bio: "PhD in Machine Learning with expertise in NLP and computer vision.",
    initials: "JO",
    gradient: "from-rose-500 to-pink-600",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Aria Patel",
    role: "Product Manager",
    bio: "Strategic thinker bridging business goals with exceptional user experiences.",
    initials: "AP",
    gradient: "from-violet-500 to-purple-600",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 tracking-wider uppercase mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] text-navy-900 leading-tight">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Experts
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            A diverse team of passionate innovators dedicated to pushing the boundaries of technology.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl bg-white border border-gray-100 p-8 text-center hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div
                  className={`h-24 w-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold font-[Poppins] shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {member.initials}
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-400 border-2 border-white" />
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-1">{member.name}</h3>
              <div className="text-sm font-medium text-primary-600 mb-3">{member.role}</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {[
                  { path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", href: member.social.linkedin },
                  { path: "M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0 1.27 5.49A4.09 4.09 0 0 1 2.8 9.6v.05a4.1 4.1 0 0 0 3.3 4 4.07 4.07 0 0 1-1.9.07 4.1 4.1 0 0 0 3.83 2.84A8.22 8.22 0 0 1 2 18.34a11.59 11.59 0 0 0 6.29 1.85c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22 5.8z", href: member.social.twitter },
                  { path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2", href: member.social.github },
                ].map((social, j) => (
                  <a
                    key={j}
                    href={social.href}
                    className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
