const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

if (!jsx.includes('import { motion } from')) {
    jsx = jsx.replace("import heroNewImg", "import { motion } from 'framer-motion';\nimport heroNewImg");
}

// Hero background image
jsx = jsx.replace(
    /<img alt="Model holding Softcare serum" className="w-full h-full object-cover object-center brightness-95 opacity-90" src=\{heroNewImg\}\/>/,
    '<motion.img initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} alt="Model holding Softcare serum" className="w-full h-full object-cover object-center brightness-95 opacity-90" src={heroNewImg}/>'
);

// Hero Header Text
jsx = jsx.replace(
    /<h3 className="text-white text-6xl lg:text-\[140px\] font-black leading-\[0\.85\] mb-12 tracking-\[-0\.04em\] uppercase italic">([^<]+)<\/h3>/s,
    '<motion.h3 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-white text-6xl lg:text-[140px] font-black leading-[0.85] mb-12 tracking-[-0.04em] uppercase italic">$1</motion.h3>'
);

// Hero giant softcare text
jsx = jsx.replace(
    /<h2 className="text-white text-huge font-black tracking-tighter uppercase whitespace-nowrap">\s*SOFTCARE SKIN\s*<\/h2>/,
    '<motion.h2 initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="text-white text-huge font-black tracking-tighter uppercase whitespace-nowrap">SOFTCARE SKIN</motion.h2>'
);

// Story section features
jsx = jsx.replace(
    /<section className="bg-white py-48/g,
    '<motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="bg-white py-48'
);

// Grid section wrapper
jsx = jsx.replace(
    /<section className="flex flex-col lg:flex-row/g,
    '<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="flex flex-col lg:flex-row'
);

// Stagger items in Story Grid (the 3 cards)
jsx = jsx.replace(
    /<div className="grid grid-cols-1 md:grid-cols-3 gap-12">/,
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-12">'
);

// The individual product cards in grids
// Convert <div className="group animate-reveal" ... >
jsx = jsx.replace(
    /<div className="group animate-reveal".*?>/g,
    (match) => {
        // Drop the style animation delay
        return '<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group">';
    }
);

// Find the bottom grid section stagger
jsx = jsx.replace(
    /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">/,
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">'
);

// Make the vertical text GLOW and PERFECT slide in
jsx = jsx.replace(
    /<span className="vertical-text text-7xl font-black tracking-\[0\.15em\] opacity-10 uppercase italic relative z-10">PERFECT<\/span>/,
    '<motion.span initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 0.1 }} transition={{ duration: 1 }} className="vertical-text text-7xl font-black tracking-[0.15em] uppercase italic relative z-10">PERFECT</motion.span>'
);
jsx = jsx.replace(
    /<span className="vertical-text text-7xl font-black tracking-\[0\.15em\] opacity-20 uppercase italic relative z-10">GLOW<\/span>/,
    '<motion.span initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 0.2 }} transition={{ duration: 1, delay: 0.2 }} className="vertical-text text-7xl font-black tracking-[0.15em] uppercase italic relative z-10">GLOW</motion.span>'
);

// Story big image
jsx = jsx.replace(
    /<div className="rounded-\[2\.5rem\] overflow-hidden h-\[850px\] shadow-2xl bg-slate-100">/,
    '<motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[2.5rem] overflow-hidden h-[850px] shadow-2xl bg-slate-100">'
);
jsx = jsx.replace(
    /<\/div>\s*<\/div>\s*\{\/\* Products Grid \*\/\}/,
    '</motion.div>\n</div>\n{/* Products Grid */}'
);

// Add missing closing tags for Grid sections containing motion.divs
jsx = jsx.replace(
    /<\/div>\s*\{\/\* Editorial Callout \*\/\}/s,
    '</motion.div>\n{/* Editorial Callout */}'
);

jsx = jsx.replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Footer \*\/\}/s,
    '</motion.div>\n</div>\n</div>\n</motion.section>\n\n{/* Footer */}'
);

// Footer wrapper
jsx = jsx.replace(
    /<footer className="bg-deep-blue text-white py-48 px-6 lg:px-24 relative overflow-hidden">/,
    '<motion.footer initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-deep-blue text-white py-48 px-6 lg:px-24 relative overflow-hidden">'
);
jsx = jsx.replace(/<\/footer>/, '</motion.footer>');

// Let's also wrap the giant background text ARTISTRY to slide horizontally
jsx = jsx.replace(
    /<span className="text-\[20vw\] font-black whitespace-nowrap uppercase tracking-tighter">BIOLOGICAL ARTISTRY<\/span>/,
    '<motion.span initial={{ x: "20%" }} whileInView={{ x: "-10%" }} transition={{ duration: 3, ease: "linear" }} className="text-[20vw] font-black whitespace-nowrap uppercase tracking-tighter">BIOLOGICAL ARTISTRY</motion.span>'
);

fs.writeFileSync('src/App.jsx', jsx);
