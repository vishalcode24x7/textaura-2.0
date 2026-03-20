
const PRESETS = ['#FF6B6B', '#FF9F43', '#FFCD56', '#48C9B0', '#4ECDC4', '#5B4FE9', '#A855F7', '#FF6BAE', '#1DA1F2', '#25D366', '#E63946', '#2D4A3E', '#F4A261', '#264653', '#E9C46A', '#023E8A', '#8338EC', '#3A86FF', '#06D6A0', '#FFB703', '#FB8500', '#219EBC', '#023047', '#FAFAFA', '#1C1B2E', '#0F0E17'];

function hexToRgb(h) { const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16); return { r, g, b }; }
function rgbToHex(r, g, b) { return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join(''); }
function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b); let h, s, l = (max + min) / 2; if (max === min) { h = s = 0; } else { const d = max - min; s = l > .5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break; case g: h = ((b - r) / d + 2) / 6; break; case b: h = ((r - g) / d + 4) / 6; break; } } return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }; }
function rgbToCmyk(r, g, b) { r /= 255; g /= 255; b /= 255; const k = 1 - Math.max(r, g, b); if (k === 1) return { c: 0, m: 0, y: 0, k: 100 }; return { c: Math.round((1 - r - k) / (1 - k) * 100), m: Math.round((1 - g - k) / (1 - k) * 100), y: Math.round((1 - b - k) / (1 - k) * 100), k: Math.round(k * 100) }; }
function rgbToHsv(r, g, b) { r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min; let h = 0, s = max ? d / max : 0, v = max; if (d) { switch (max) { case r: h = ((g - b) / d + 6) % 6; break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; } } return { h: Math.round(h * 60), s: Math.round(s * 100), v: Math.round(v * 100) }; }
function hslToHex(h, s, l) { s /= 100; l /= 100; const a = s * Math.min(l, 1 - l); const f = n => { const k = (n + h / 30) % 12; return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1); }; return rgbToHex(Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)); }
function lighten(hex, pct) { const { r, g, b } = hexToRgb(hex); const f = pct / 100; return rgbToHex(Math.min(255, Math.round(r + (255 - r) * f)), Math.min(255, Math.round(g + (255 - g) * f)), Math.min(255, Math.round(b + (255 - b) * f))); }
function darken(hex, pct) { const { r, g, b } = hexToRgb(hex); const f = 1 - pct / 100; return rgbToHex(Math.round(r * f), Math.round(g * f), Math.round(b * f)); }
function textColor(hex) { const { r, g, b } = hexToRgb(hex); return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000' : '#fff'; }

let currentHex = '#5B4FE9';

function updateAll(hex) {
    currentHex = hex;
    const { r, g, b } = hexToRgb(hex);
    const hsl = rgbToHsl(r, g, b);
    const cmyk = rgbToCmyk(r, g, b);
    const hsv = rgbToHsv(r, g, b);

    document.getElementById('bigSwatch').style.background = hex;
    document.getElementById('swatchLabel').textContent = hex.toUpperCase();
    document.getElementById('colorPicker').value = hex;
    document.getElementById('hexInput').value = hex.toUpperCase();
    document.getElementById('rSlider').value = r; document.getElementById('rVal').textContent = r;
    document.getElementById('gSlider').value = g; document.getElementById('gVal').textContent = g;
    document.getElementById('bSlider').value = b; document.getElementById('bVal').textContent = b;

    document.getElementById('hexVal').textContent = hex.toUpperCase();
    document.getElementById('rgbVal').textContent = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('hslVal').textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    document.getElementById('cmykVal').textContent = `cmyk(${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k})`;
    document.getElementById('hsvVal').textContent = `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`;
    document.getElementById('rgbaVal').textContent = `rgba(${r}, ${g}, ${b}, 1)`;

    // Tints
    const tints = document.getElementById('tintsRow');
    tints.innerHTML = [80, 60, 40, 20, 10].map(p => { const c = lighten(hex, p); return `<div class="pal-swatch" style="background:${c}" title="${c.toUpperCase()}" onclick="updateAll('${c}')"></div>`; }).join('');

    // Shades
    const shades = document.getElementById('shadesRow');
    shades.innerHTML = [20, 40, 60, 70, 80].map(p => { const c = darken(hex, p); return `<div class="pal-swatch" style="background:${c}" title="${c.toUpperCase()}" onclick="updateAll('${c}')"></div>`; }).join('');

    // Harmonies
    const comp = hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l);
    document.getElementById('compRow').innerHTML = [hex, comp].map(c => `<div class="pal-swatch-lg" style="background:${c};color:${textColor(c)}" onclick="updateAll('${c}')">${c.toUpperCase()}</div>`).join('');
    const t1 = hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l), t2 = hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l);
    document.getElementById('triadRow').innerHTML = [hex, t1, t2].map(c => `<div class="pal-swatch-lg" style="background:${c};color:${textColor(c)}" onclick="updateAll('${c}')">${c.toUpperCase()}</div>`).join('');
    const a1 = hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l), a2 = hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l);
    document.getElementById('analogRow').innerHTML = [a2, hex, a1].map(c => `<div class="pal-swatch-lg" style="background:${c};color:${textColor(c)}" onclick="updateAll('${c}')">${c.toUpperCase()}</div>`).join('');
}

function onColorChange() { updateAll(document.getElementById('colorPicker').value); }
function onSliderChange() {
    const r = parseInt(document.getElementById('rSlider').value);
    const g = parseInt(document.getElementById('gSlider').value);
    const b = parseInt(document.getElementById('bSlider').value);
    updateAll(rgbToHex(r, g, b));
}
function onHexInput() {
    const v = document.getElementById('hexInput').value.trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(v)) updateAll(v);
}
function copyVal(id) {
    navigator.clipboard.writeText(document.getElementById(id).textContent).then(() => showToast('Copied: ' + document.getElementById(id).textContent));
}
function showToast(m) { document.getElementById('toastMsg').textContent = m; const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); }

function buildPresets() {
    const g = document.getElementById('presetGrid');
    PRESETS.forEach(c => {
        const d = document.createElement('div');
        d.className = 'preset-dot'; d.style.background = c; d.title = c;
        d.onclick = () => updateAll(c); g.appendChild(d);
    });
}

buildPresets(); updateAll('#5B4FE9');