const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/favicon.svg');
const outDir = path.join(__dirname, '../public');
const svg = fs.readFileSync(svgPath, 'utf8');

const sizes = [
  { name: 'favicon-16x16.png',    size: 16  },
  { name: 'favicon-32x32.png',    size: 32  },
  { name: 'favicon-48x48.png',    size: 48  },
  { name: 'favicon-96x96.png',    size: 96  },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png',         size: 192 },
  { name: 'icon-512.png',         size: 512 },
];

for (const { name, size } of sizes) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size }
  });
  const pngData = resvg.render();
  const pngBuf = pngData.asPng();
  fs.writeFileSync(path.join(outDir, name), pngBuf);
  console.log(`✓ ${name} (${size}×${size})`);
}
