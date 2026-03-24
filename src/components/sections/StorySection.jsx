import { motion } from 'framer-motion';
import { smoothTransition, storyProducts } from '../../constants/data';

const GOOGLE_IMG_BASE = 'https://lh3.googleusercontent.com/aida-public/';

export default function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-white py-40 lg:py-64 px-6 lg:px-24 relative overflow-hidden"
    >
      {/* Infinite marquee — Increased scale for impact */}
      <div className="marquee-wrapper absolute inset-0 flex items-center opacity-[0.085] pointer-events-none" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap text-[22vw] font-black uppercase tracking-tighter text-slate-900">
          <span>PHARMACEUTICAL GRADE &nbsp; PHARMACEUTICAL GRADE &nbsp;</span>
          <span aria-hidden="true">PHARMACEUTICAL GRADE &nbsp; PHARMACEUTICAL GRADE &nbsp;</span>
        </div>
      </div>



      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ ...smoothTransition, duration: 1 }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-40 lg:mb-56"
        >
          <span className="text-[10px] font-bold tracking-supreme text-primary uppercase mb-8 block drop-shadow-sm">
            Clinical Philosophy
          </span>
          <h2
            id="story-heading"
            className="text-5xl lg:text-[88px] font-black mb-12 tracking-tighter leading-[0.9] uppercase max-w-6xl mx-auto"
          >
            Molecular Mastery. <br />Radiance Engineered.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-[15px] font-light leading-relaxed tracking-tight lg:text-[16px]">
            At the intersection of biosynthetic innovation and dermal integrity,
            our formulas recalibrate your skin&apos;s biological clock. We don&apos;t
            just treat surfaces; we engineer health at the cellular level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          {/* Left — large editorial image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ ...smoothTransition, duration: 1.2 }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-5 relative group"
          >
            <div className="rounded-[3.5rem] overflow-hidden h-[650px] lg:h-[950px] shadow-[0_50px_90px_-20px_rgba(0,0,0,0.2)] bg-slate-100 relative">
              <img
                alt="The Biological Ritual — Advanced hydration treatment"
                className="w-full h-full object-cover img-zoom grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0"
                src={`${GOOGLE_IMG_BASE}AB6AXuDOKxdz_76HSy-6baVKWDe7Mj1Od6rLIXw150XNZwxKbx2ngth8UhIKspM_0VSgyxvqK4-XpxzgaP_iY3BYmvUl6lvyM-Mlj_HB8Z_yGahCeVs0NLZtfS_ZvMEs76NSbBDd1QJZWx6GP1SXTV6WG51o1mZfblOhYbihx3cNqCk9YhoMPDsCNsW1pio7aESN5jegPK-l0DpTwyQ1A2tplJRy9IeseVWOhD00VnHj0EKbAFDTK8VtvcYjIgQhKdtfT2VdvLZM7h4hp0lq`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-16 left-12 lg:bottom-24 lg:left-20 text-white">
                <p className="text-[11px] font-bold uppercase tracking-supreme mb-5 text-rose-500">
                  Protocol 01 / Synchronization
                </p>
                <p className="text-4xl lg:text-5xl font-black leading-[1] max-w-sm drop-shadow-xl tracking-tighter uppercase">
                  Recalibrating your circadian rhythm.
                </p>
                <div className="mt-8 w-16 h-px bg-white/40" />
              </div>
            </div>
          </motion.div>

          {/* Right — product triptych + quote — Carousel on mobile */}
          <div className="lg:col-span-7 space-y-24 lg:space-y-48 overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 
                         max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:hide-scrollbar max-md:gap-8 max-md:pb-12"
            >
              {storyProducts.map((prod) => (
                <motion.article
                  key={prod.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: smoothTransition },
                  }}
                  className="group cursor-pointer max-md:min-w-[75vw] max-md:snap-center"
                >
                  <div className="aspect-[4/5] mb-8 lg:mb-12 overflow-hidden rounded-[2.5rem] glass-card relative shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-all duration-700">
                    <img
                      alt={`${prod.title} Professional Formulation`}
                      className="w-full h-full object-cover img-zoom opacity-90 mix-blend-multiply transition-all duration-700 group-hover:opacity-100"
                      src={`${GOOGLE_IMG_BASE}${prod.img}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-[11px] tracking-supreme mb-4 uppercase text-slate-900 group-hover:text-rose-600 transition-colors duration-500 leading-tight">
                    {prod.title}
                  </h3>
                  <div className="h-px w-8 bg-primary/30 mb-4 transition-all duration-700 group-hover:w-16 group-hover:bg-rose-500" />
                  <p className="text-slate-500 font-medium text-[13px] tracking-tight">{prod.price}</p>
                </motion.article>
              ))}
            </motion.div>

            {/* Pull-quote card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ ...smoothTransition, duration: 1.2 }}
              className="bg-slate-50/80 p-14 lg:p-28 rounded-[4rem] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 studio-lighting opacity-50 pointer-events-none" aria-hidden="true" />
              <span className="text-[11px] font-black tracking-supreme text-primary/60 uppercase mb-10 relative z-10">
                Scientific Statement
              </span>
              <blockquote className="text-3xl lg:text-[40px] font-black tracking-tighter mb-12 max-w-3xl leading-[1.1] text-slate-900 relative z-10 uppercase">
                &ldquo;True cellular transformation requires molecular patience and an
                optimized bio-delivery system.&rdquo;
              </blockquote>
              <a
                href="#"
                className="text-[11px] font-bold uppercase tracking-supreme border-b-2 border-slate-900 pb-2 hover:text-primary hover:border-primary transition-all duration-500 relative z-10"
              >
                The Science of Delivery
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
