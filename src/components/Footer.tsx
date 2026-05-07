import { Link } from "react-router-dom";
import { ArrowUpRight, Zap } from "lucide-react";
import { homeSectionLinks, primaryNav } from "../data/siteData";

const socials = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative border-b border-white/6">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[Poppins]">
              Build a standout digital product with a team that understands design, delivery, and growth.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              Let’s turn your next product release, redesign, or platform initiative into a high-performing experience.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-navy-900 shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25">
                <Zap className="h-5 w-5" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-[Poppins]">
                Nexa<span className="text-primary-400">Tech</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Premium digital experiences for software companies, enterprise teams, and modern brands that want to move faster and look sharper.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors hover:border-white/20 hover:text-white/70"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Pages</h4>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-sm text-white/45 transition-colors hover:text-white/80">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Sections</h4>
            <ul className="mt-5 space-y-3">
              {homeSectionLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-white/45 transition-colors hover:text-white/80">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
            <div className="mt-5 space-y-3 text-sm text-white/45">
              <p>hello@nexatech.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/30 sm:px-6 lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} NexaTech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/60">Privacy</a>
            <a href="#" className="transition-colors hover:text-white/60">Terms</a>
            <a href="#" className="transition-colors hover:text-white/60">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
