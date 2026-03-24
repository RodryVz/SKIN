const fs = require('fs');
let html = fs.readFileSync('original.html', 'utf8');

let body = html.split('</header>')[1];
body = body.split('</body>')[0];

let header = html.split('<header')[1];
header = '<header' + header.split('</header>')[0] + '</header>';

body = header + body;

body = body.replace(/class=/g, 'className=');
body = body.replace(/viewbox=/g, 'viewBox=');
body = body.replace(/<!--/g, '{/*');
body = body.replace(/-->/g, '*/}');
body = body.replace(/<img(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });
body = body.replace(/<input(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });
body = body.replace(/style="animation-delay:\s*([0-9.]+)s"/g, 'style={{ animationDelay: "$1s" }}');

// Remove or adjust the giant overlapping text in the hero to be more minimalist
body = body.replace(
  /<div className="relative -mb-4 lg:-mb-24 select-none pointer-events-none overflow-hidden opacity-90"(.*?)<\/div>/s,
  ''
);

// Inject framer motion
body = body.replace(/<section className="bg-white/g, '<motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="bg-white');
body = body.replace(/<section className="flex flex-col lg:flex-row/g, '<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }} className="flex flex-col lg:flex-row');
body = body.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3/g, '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3');
body = body.replace(/<div className="group animate-reveal"/g, '<motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }} className="group"');

// Replace hero image
body = body.replace(
  /<img alt="Model holding Softcare serum" className="w-full h-full object-cover object-center brightness-95 opacity-90" src="[^"]+"\/>/,
  '<motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} alt="Model holding Softcare serum" className="w-full h-full object-cover object-center opacity-90" src={heroNewImg}/>'
);

const jsx = `import './index.css';
import { motion } from 'framer-motion';
import heroNewImg from './assets/hero_new.png';

function App() {
  return (
    <>
      ${body}
    </>
  );
}

export default App;`;

// Fix <hr> and <br>
let finalJSX = jsx.replace(/<br>/g, '<br/>');
finalJSX = finalJSX.replace(/<hr>/g, '<hr/>');

fs.writeFileSync('src/App.jsx', finalJSX);
