import { motion } from 'framer-motion';
import { productCollection, smoothTransition } from '../../constants/data';

const GOOGLE_IMG_BASE = 'https://lh3.googleusercontent.com/aida-public/';

export default function GridSection() {
  return (
    <section
      aria-labelledby="grid-heading"
      className="flex flex-col lg:flex-row min-h-screen border-t border-slate-100 bg-white"
    >
      {/* 
          SIDEBAR COLUMN
          We remove 'lg:h-screen' from the <aside> itself so it stretches to the 
          full height of the product grid on its right.
      */}
      <aside
        aria-hidden="true"
        className="w-full lg:w-[420px] xl:w-[480px] relative lg:border-r border-slate-100 bg-rose-50"
      >
        {/* 
            STICKY WRAPPER
            This container will 'stick' to the top and fill the viewport 
            while the user scrolls through the grid.
        */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col overflow-hidden">

          {/* Top Half: PERFECT */}
          <div className="flex-1 bg-slate-950 text-white flex flex-col items-center justify-center py-12 px-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            {/* Visibility fix: increased opacity to 0.25 (25%) */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.25, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute lg:vertical-text text-8xl lg:text-[150px] font-black tracking-tighter uppercase text-white pointer-events-none whitespace-nowrap z-0 select-none"
            >
              PERFECT
            </motion.span>

            <div className="hidden lg:flex flex-col items-center gap-3 relative z-10">
              <span className="material-symbols-outlined text-[32px] text-rose-500 shadow-rose-500/20 shadow-2xl">biotech</span>
              <p className="text-[11px] font-black tracking-supreme uppercase text-slate-400">Molecular Precision</p>
            </div>
          </div>

          {/* Bottom Half: GLOW */}
          <div className="flex-1 bg-rose-50 text-rose-950 flex flex-col items-center justify-center py-12 px-10 relative overflow-hidden">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute lg:vertical-text text-8xl lg:text-[150px] font-black tracking-tighter uppercase text-rose-900 pointer-events-none whitespace-nowrap z-0 select-none"
            >
              GLOW
            </motion.span>

            <div className="hidden lg:flex flex-col items-center gap-3 relative z-10">
              <span className="material-symbols-outlined text-[30px] text-rose-400">auto_awesome</span>
              <p className="text-[11px] font-black tracking-supreme uppercase text-rose-500">Clinical Integrity</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Product grid */}
      <div className="flex-1 p-8 lg:p-20 xl:p-32 bg-white">
        <div className="max-w-[1200px] mx-auto">

          {/* Section header */}
          <header className="flex flex-col lg:flex-row justify-between items-end mb-24 lg:mb-32">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-supreme text-rose-500 uppercase">
                The Biological Standard
              </span>
              <h2
                id="grid-heading"
                className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9]"
              >
                Curated <br /> Specialists.
              </h2>
            </div>
            <a
              href="#"
              className="hidden lg:flex items-center gap-3 text-[11px] font-bold tracking-supreme uppercase text-slate-500 hover:text-rose-600 transition-all duration-500 group pb-2"
            >
              View Full Directory
              <span
                className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform duration-500"
                aria-hidden="true"
              >
                arrow_right_alt
              </span>
            </a>
          </header>

          {/* Grid converted to Mobile Carousel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-y-28 lg:gap-y-40 lg:gap-x-12 xl:gap-x-16 
                       max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:hide-scrollbar max-lg:pb-12 max-lg:gap-8 max-lg:-mx-8 max-lg:px-8"
          >
            {productCollection.slice(0, 6).map((prod) => (
              <motion.article
                key={prod.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: smoothTransition },
                }}
                className="group cursor-pointer flex flex-col max-lg:min-w-[80vw] max-lg:snap-center"
              >
                {/* Image card */}
                <div className="relative aspect-[4/5] mb-8 bg-slate-50 rounded-[3.5rem] overflow-hidden flex items-center justify-center p-12 transition-all duration-700 group-hover:bg-white border border-transparent group-hover:border-slate-100 shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                  <img
                    alt={`${prod.title} - Professional Formulation`}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    src={`${GOOGLE_IMG_BASE}${prod.img}`}
                    loading="lazy"
                  />
                  <button
                    aria-label={`Add ${prod.title} to wishlist`}
                    className="absolute top-8 right-8 text-slate-300 hover:text-rose-500 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                      favorite
                    </span>
                  </button>
                </div>

                {/* Product info */}
                <div className="flex flex-col gap-3 pl-2">
                  <p className="text-[10px] font-bold text-rose-500/80 uppercase tracking-supreme mb-1">
                    {prod.tag || 'Clinical Bestseller'}
                  </p>
                  <h3 className="font-black text-[13px] lg:text-[14px] tracking-tight uppercase text-slate-900 group-hover:text-rose-600 transition-colors duration-500 line-clamp-2 leading-tight">
                    {prod.title}
                  </h3>
                  <div className="h-px w-8 bg-slate-200 mt-2 mb-2 transition-all duration-500 group-hover:w-16 group-hover:bg-rose-500" />
                  <p className="text-[15px] text-slate-500 font-medium tracking-tight">
                    {prod.price}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Mobile "view all" CTA */}
          <div className="mt-12 lg:mt-24 flex justify-center lg:hidden">
            <button
              className="bg-slate-900 text-white w-full py-6 rounded-full text-[12px] font-black tracking-supreme uppercase hover:bg-rose-600 transition-all duration-500 shadow-xl"
            >
              Explore Full Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
