import { motion } from 'framer-motion';
import { smoothTransition } from '../../constants/data';

const FOOTER_LINKS = {
  Discover: [
    { label: 'The Collection', href: '#' },
    { label: 'Biological Artistry', href: '#' },
    { label: 'Clinical Trials', href: '#' },
  ],
  Support: [
    { label: 'Contact & FAQ', href: '#' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      className="bg-slate-950 text-white pt-24 lg:pt-32 pb-12 px-8 lg:px-24"
    >
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          transition={{ ...smoothTransition }}
          className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 pb-16 border-b border-white/10"
        >
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-sm">
            <p className="text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white select-none">
              SOFTCARE
            </p>
            <p className="text-slate-400 text-[12px] font-light leading-relaxed tracking-widest max-w-[280px]">
              Formulas engineered with clinical integrity to harmonize with your
              skin&apos;s biological ecosystem.
            </p>
            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="mt-2 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:border-white/30 hover:text-white transition-all duration-500 self-start"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                arrow_upward
              </span>
            </button>
          </div>

          {/* Links */}
          <div className="flex gap-12 sm:gap-16 lg:gap-32 w-full lg:w-auto justify-between lg:justify-end">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-5">
                <h2 className="text-[9px] font-bold text-slate-500 uppercase tracking-supreme mb-2">
                  {section}
                </h2>
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[11px] font-light text-slate-300 hover:text-white transition-colors duration-500 tracking-wider"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-[9px] font-bold tracking-supreme uppercase">
            &copy; {CURRENT_YEAR} SOFTCARE SKIN
          </p>
          <div className="flex gap-8 text-slate-500 text-[9px] font-bold tracking-supreme uppercase">
            <a className="hover:text-white transition-colors duration-500" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors duration-500" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
