const fs = require('fs');
let html = fs.readFileSync('original.html', 'utf8');
let body = html.split('</header>')[1];
body = body.split('</body>')[0];

let header = html.split('<header')[1];
header = '<header' + header.split('</header>')[0] + '</header>';

body = header + body;

body = body.replace(/class=/g, 'className=');
body = body.replace(/viewbox=/g, 'viewBox=');
body = body.replace(/<img(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });
body = body.replace(/<input(.*?)>/g, (match) => { return match.endsWith('/>') ? match : match.slice(0, -1) + '/>'; });
body = body.replace(/style="animation-delay:\s*([0-9.]+)s"/g, 'style={{ animationDelay: "$1s" }}');

const jsx = `import './index.css';

function App() {
  return (
    <>
      ${body}
    </>
  );
}

export default App;`;
fs.writeFileSync('src/App.jsx', jsx);
