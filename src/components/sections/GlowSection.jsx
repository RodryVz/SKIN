import { motion } from 'framer-motion';
import { smoothTransition, productCollection } from '../../constants/data';
import glowBg from '../../assets/glow_bg.png';

const GOOGLE_IMG_BASE = 'https://lh3.googleusercontent.com/aida-public/';

const INGREDIENTS = [
  {
    name: 'PANTHENOL (VITAMIN B5)',
    description: 'Stabilizes the dermal barrier and \ncoordinates deep moisture retention.',
    position: 'left-6 lg:left-12 top-[8%] lg:top-[10%]',
    delay: 0.2,
    show: 'always',
  },
  {
    name: 'MADECASSOSIDE',
    description: 'Accelerates cellular repair and \nmitigates micro-inflammatory stress.',
    position: 'right-6 lg:right-12 top-[8%] lg:top-[10%]',
    delay: 0.3,
    show: 'desktop',
  },
  {
    name: 'CERAMIDE NP',
    description: 'Reinforces intercellular lipid \nstructure for long-term resilience.',
    position: 'right-6 lg:right-12 top-[35%] lg:top-[38%]',
    delay: 0.4,
    show: 'desktop',
  },
];

const PRODUCT_TAGS = ['CLINICAL CHOICE', 'POPULAR', 'CLINICAL CHOICE', 'POPULAR'];

export default function GlowSection() {
  const displayProducts = productCollection.slice(0, 4);

  return (
    <section
      aria-labelledby="glow-heading"
      className="relative w-full min-h-screen bg-[#0A4B8F] overflow-hidden flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={glowBg}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/30" aria-hidden="true" />
      </div>

      {/* Title block */}
      <div className="relative z-20 w-full max-w-[1700px] mx-auto px-10 lg:px-24 pt-44 lg:pt-60">
        <motion.h2
          id="glow-heading"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition }}
          className="text-white text-[50px] lg:text-[100px] font-black leading-[0.75] tracking-tighter uppercase pointer-events-none select-none max-w-4xl"
        >
          Clinical <br />
          <span className="flex items-center gap-6 mt-4 lg:mt-6">
            <span className="w-12 h-1.5 lg:w-24 lg:h-3 bg-primary block shadow-lg" aria-hidden="true" />
            Integrity
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, ...smoothTransition }}
          className="text-white text-[10px] lg:text-[12px] font-black tracking-supreme uppercase mt-8 lg:mt-12 ml-1"
        >
          Biosynthesized Dermal-Matrix Series
        </motion.p>
      </div>

      {/* Ingredients overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        aria-hidden="true"
      >
        {INGREDIENTS.map((ing) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, x: (ing.position.includes('left') ? -20 : 20) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ing.delay, ...smoothTransition }}
            className={`absolute text-white ${ing.position} ${
              ing.show === 'desktop' ? 'hidden lg:block' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-[18px] text-primary">microbiology</span>
              <p className="font-bold text-[13px] lg:text-[14px] tracking-supreme uppercase">{ing.name}</p>
            </div>
            <p className="text-white/60 text-[11px] lg:text-[12px] leading-relaxed pl-7 max-w-[200px] lg:max-w-[260px] font-light italic">
              {ing.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Product card row — Carousel on mobile */}
      <div className="relative z-30 mt-auto pb-12 lg:pb-16 pt-72 lg:pt-0 overflow-hidden">
        <div className="flex items-end justify-center gap-4 lg:gap-8 px-8 
                        max-lg:flex-nowrap max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:hide-scrollbar max-lg:justify-start max-lg:px-10 max-lg:gap-6 max-lg:pb-8">
          {displayProducts.map((product, idx) => {
            const isEdge = idx === 0 || idx === 3;
            return (
              <motion.article
                key={product.title}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1), ...smoothTransition }}
                className={`group cursor-pointer flex flex-col justify-between transition-all duration-700 hover:-translate-y-6 rounded-[3.5rem] border border-white/10 
                  max-lg:min-w-[75vw] max-lg:snap-center
                  ${
                    isEdge
                      ? 'p-6 lg:p-7 w-[200px] h-[280px] lg:w-[280px] lg:h-[350px] bg-white/30 backdrop-blur-md opacity-60 hover:opacity-100 translate-y-6 max-lg:translate-y-0 max-lg:opacity-100'
                      : 'p-8 lg:p-10 w-[240px] h-[340px] lg:w-[350px] lg:h-[440px] bg-white/95 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] z-20'
                  }
                `}
              >
                {/* Header */}
                <div className="flex justify-between items-center w-full">
                  <span className={`uppercase tracking-supreme font-black ${isEdge ? 'text-[8px] text-slate-500' : 'text-[9px] text-rose-500'}`}>
                    {PRODUCT_TAGS[idx]}
                  </span>
                  <button
                    aria-label={`Add ${product.title} to wishlist`}
                    className="text-slate-300 hover:text-rose-600 transition-all duration-500 transform group-hover:scale-120"
                  >
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      favorite
                    </span>
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1 w-full flex items-center justify-center overflow-hidden my-6">
                  <img
                    src={`${GOOGLE_IMG_BASE}${product.img}`}
                    alt={`${product.title} - Professional Restoration`}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-700 group-hover:scale-105 mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2">
                  <h3
                    className={`font-black tracking-tighter text-slate-900 uppercase transition-colors duration-500 group-hover:text-rose-600 line-clamp-2 leading-[1.1] ${
                      isEdge ? 'text-[9px]' : 'text-[11px] lg:text-[14px]'
                    }`}
                  >
                    {product.title}
                  </h3>
                  <div className="h-[2px] w-6 bg-slate-100 mt-2 mb-1 transition-all duration-500 group-hover:w-16 group-hover:bg-rose-500" />
                  <span
                    className={`font-medium text-slate-500 tracking-tight ${
                      isEdge ? 'text-[12px]' : 'text-[15px]'
                    }`}
                  >
                    {product.price}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
