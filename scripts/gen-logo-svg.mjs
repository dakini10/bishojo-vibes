import opentype from 'opentype.js';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const montserrat = opentype.loadSync(resolve(__dirname, 'Montserrat-Black.ttf'));
const mplus = opentype.loadSync(resolve(__dirname, 'MPLUS1p-Black.ttf'));

const fontSize = 72;
const textColor = '#e8e6e3';

const jpText = '美少女';
const enText = 'Vibes';

// Generate paths — Y=0 is the font baseline, negative Y is upward
const jpPath = mplus.getPath(jpText, 0, 0, fontSize);
const jpBBox = jpPath.getBoundingBox();

const gap = 2;
const enX = jpBBox.x2 + gap;
const enPath = montserrat.getPath(enText, enX, 0, fontSize);
const enBBox = enPath.getBoundingBox();

// Combined bounding box in path coordinates
const totalX1 = Math.min(jpBBox.x1, enBBox.x1);
const totalX2 = Math.max(jpBBox.x2, enBBox.x2);
const totalY1 = Math.min(jpBBox.y1, enBBox.y1); // top (negative)
const totalY2 = Math.max(jpBBox.y2, enBBox.y2); // bottom (positive or near 0)
const totalWidth = totalX2 - totalX1;

// Debug
console.log('JP bbox:', jpBBox);
console.log('EN bbox:', enBBox);
console.log('totalY2 (text bottom):', totalY2);

// Wave: place baseline just below the text bottom edge
const waveGap = 18;
const waveBaseline = totalY2 + waveGap; // Y coordinate in path space
const waveWidth = totalWidth;
const PHI_RATIO = 1 / (1 + 1.618);
const center = totalX1 + waveWidth * PHI_RATIO;

// LOGO_SPEC wave: y=baseline, blip goes up(-10) and down(+10)
const y = waveBaseline;
const wavePoints = [
  [totalX1, y],
  [center - 24, y],
  [center - 16, y],
  [center - 8, y - 10],  // up peak
  [center, y + 10],       // down peak
  [center + 8, y - 5],    // rebound
  [center + 16, y],
  [totalX2, y],
];
const wavePointsStr = wavePoints.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

// SVG viewBox: include text + wave + stroke padding
const pad = 10;
const svgX1 = totalX1 - pad;
const svgY1 = totalY1 - pad;
const svgX2 = totalX2 + pad;
const svgY2 = waveBaseline + 10 + pad; // wave bottom peak + padding
const svgWidth = svgX2 - svgX1;
const svgHeight = svgY2 - svgY1;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth.toFixed(0)}" height="${svgHeight.toFixed(0)}" viewBox="${svgX1.toFixed(1)} ${svgY1.toFixed(1)} ${svgWidth.toFixed(1)} ${svgHeight.toFixed(1)}">
  <defs>
    <linearGradient id="bv-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c7f284"/>
      <stop offset="100%" stop-color="#ff69b4"/>
    </linearGradient>
  </defs>
  <path d="${jpPath.toPathData()}" fill="${textColor}"/>
  <path d="${enPath.toPathData()}" fill="${textColor}"/>
  <polyline points="${wavePointsStr}" stroke="url(#bv-grad)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const outPath = resolve(__dirname, '..', 'docs', 'assets', 'logo-bishoujo-vibes.svg');
writeFileSync(outPath, svg);
console.log(`Written: ${outPath}`);
console.log(`Size: ${svgWidth.toFixed(0)} x ${svgHeight.toFixed(0)}`);
