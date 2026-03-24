import { motion } from 'framer-motion';
import { smoothTransition } from '../../constants/data';
import heroNewImg from '../../assets/hero_new.png';

export default function HeroSection() {
  return (
    <section
      aria-label="Softcare Skin — Professional Skincare Hero"
      className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col justify-end"
    >
      {/* Ambient lighting layer */}
      <div className="absolute inset-0 z-[1] studio-lighting pointer-events-none mix-blend-screen opacity-60" aria-hidden="true" />

      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          style={{ willChange: 'transform, opacity' }}
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
          src={heroNewImg}
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Copy content */}
      <div className="relative z-10 px-8 lg:px-24 mb-24 lg:mb-40 w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...smoothTransition, delay: 0.4 }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-4xl"
        >
          <span className="text-primary text-[11px] font-bold tracking-supreme uppercase mb-6 block drop-shadow-sm">
            Clinical Dermatology Series
          </span>
          <h1 className="text-white text-6xl lg:text-[100px] xl:text-[120px] font-black leading-[0.88] mb-12 tracking-tighter uppercase">
            Molecular<br />Precision. <br /><span className="text-slate-400">Biological Care.</span>
          </h1>

          <div className="flex flex-col gap-2.5 pl-1 max-w-md border-l-2 border-rose-500/30 pl-8 ml-2">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-[18px] text-rose-500">science</span>
              <h2 className="font-bold text-[13px] uppercase tracking-supreme opacity-90">
                ACTIVE BIO-SYSTEMS
              </h2>
            </div>
            <p className="text-white/70 text-[14px] font-normal leading-relaxed">
              Pharmaceutical-grade formulas designed to <br />
              harmonize with your skin&apos;s natural ecosystem.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Large background watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 select-none pointer-events-none overflow-hidden"
        style={{ transform: 'translateY(35%)' }}
        aria-hidden="true"
      >
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.6 }}
          style={{ h: '100px' }}
          className="text-rose-900/40 text-huge font-black uppercase whitespace-nowrap text-center"
        >
          SOFTCARE CLINICAL
        </motion.p>
      </div>
    </section>
  );
}
