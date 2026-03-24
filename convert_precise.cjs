const fs = require('fs');
let html = fs.readFileSync('original.html', 'utf8');

let body = html.split('</header>')[1];
body = body.split('</body>')[0];

let header = html.split('<header')[1];
header = '<header' + header.split('</header>')[0] + '</header>';

body = header + body;

body = body.replace(/class=/g, 'className=');
body = body.replace(/viewbox=/g, 'viewBox=');

// Fix HTML comments to JSX comments
body = body.replace(/<!--/g, '{/*');
body = body.replace(/-->/g, '*/}');

// Fix unclosed tags
body = body.replace(/<img(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });
body = body.replace(/<input(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });

// Fix inline styles
body = body.replace(/style="animation-delay:\s*([0-9.]+)s"/g, 'style={{ animationDelay: "$1s" }}');

// Replace the specific hero image with our imported one
body = body.replace(
  /<img alt="Model holding Softcare serum" className="w-full h-full object-cover object-center brightness-95 opacity-90" src="[^"]+"\/>/,
  '<img alt="Model holding Softcare serum" className="w-full h-full object-cover object-center brightness-95 opacity-90" src={heroNewImg}/>'
);

// We need to fix <br> and <hr>
body = body.replace(/<br>/g, '<br/>');
body = body.replace(/<hr>/g, '<hr/>');

const jsx = `import './index.css';
import heroNewImg from './assets/hero_new.png';

function App() {
  return (
    <>
      ${body}
    </>
  );
}

export default App;`;

fs.writeFileSync('src/App.jsx', jsx);
