const hamburger = document.querySelector('.hamburger')
const drawer = document.getElementById('mobileDrawer');
function toggleDrawer() {
    drawer.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
        drawer.classList.remove('open');
    }
});

const STYLES = [
    { n: "Bold", f: t => t.replace(/[A-Za-z]/g, c => { const o = c >= 'a' ? 0x1D41A - 97 : 0x1D400 - 65; return String.fromCodePoint(c.charCodeAt(0) + o) }) },
    { n: "Italic", f: t => t.replace(/[A-Za-z]/g, c => { if (c === 'h') return '\u210E'; const o = c >= 'a' ? 0x1D44E - 97 : 0x1D434 - 65; return String.fromCodePoint(c.charCodeAt(0) + o) }) },
    { n: "Bold Italic", f: t => t.replace(/[A-Za-z]/g, c => { const o = c >= 'a' ? 0x1D482 - 97 : 0x1D468 - 65; return String.fromCodePoint(c.charCodeAt(0) + o) }) },
    { n: "Script Cursive", f: t => { const m = { a: '\u{1D4B6}', b: '\u212C', c: '\u{1D4B8}', d: '\u{1D4B9}', e: '\u212F', f: '\u{1D4BB}', g: '\u210A', h: '\u{1D4BD}', i: '\u{1D4BE}', j: '\u{1D4BF}', k: '\u{1D4C0}', l: '\u2113', m: '\u{1D4C2}', n: '\u{1D4C3}', o: '\u2134', p: '\u{1D4C5}', q: '\u{1D4C6}', r: '\u{1D4C7}', s: '\u{1D4C8}', t: '\u{1D4C9}', u: '\u{1D4CA}', v: '\u{1D4CB}', w: '\u{1D4CC}', x: '\u{1D4CD}', y: '\u{1D4CE}', z: '\u{1D4CF}', A: '\u{1D49C}', B: '\u212C', C: '\u{1D49E}', D: '\u{1D49F}', E: '\u2130', F: '\u2131', G: '\u{1D4A2}', H: '\u210B', I: '\u2110', J: '\u{1D4A5}', K: '\u{1D4A6}', L: '\u2112', M: '\u2133', N: '\u{1D4A9}', O: '\u{1D4AA}', P: '\u{1D4AB}', Q: '\u{1D4AC}', R: '\u211B', S: '\u{1D4AE}', T: '\u{1D4AF}', U: '\u{1D4B0}', V: '\u{1D4B1}', W: '\u{1D4B2}', X: '\u{1D4B3}', Y: '\u{1D4B4}', Z: '\u{1D4B5}' }; return t.replace(/[A-Za-z]/g, c => m[c] || c) } },
    { n: "Bold Script", f: t => t.replace(/[A-Za-z]/g, c => { const o = c >= 'a' ? 0x1D4EA - 97 : 0x1D4D0 - 65; return String.fromCodePoint(c.charCodeAt(0) + o) }) },
    { n: "Gothic / Fraktur", f: t => { const m = { a: '\u{1D51E}', b: '\u{1D51F}', c: '\u{1D520}', d: '\u{1D521}', e: '\u{1D522}', f: '\u{1D523}', g: '\u{1D524}', h: '\u{1D525}', i: '\u{1D526}', j: '\u{1D527}', k: '\u{1D528}', l: '\u{1D529}', m: '\u{1D52A}', n: '\u{1D52B}', o: '\u{1D52C}', p: '\u{1D52D}', q: '\u{1D52E}', r: '\u{1D52F}', s: '\u{1D530}', t: '\u{1D531}', u: '\u{1D532}', v: '\u{1D533}', w: '\u{1D534}', x: '\u{1D535}', y: '\u{1D536}', z: '\u{1D537}', A: '\u{1D504}', B: '\u{1D505}', C: '\u212D', D: '\u{1D507}', E: '\u{1D508}', F: '\u{1D509}', G: '\u{1D50A}', H: '\u210C', I: '\u2111', J: '\u{1D50D}', K: '\u{1D50E}', L: '\u{1D50F}', M: '\u{1D510}', N: '\u{1D511}', O: '\u{1D512}', P: '\u{1D513}', Q: '\u{1D514}', R: '\u211C', S: '\u{1D516}', T: '\u{1D517}', U: '\u{1D518}', V: '\u{1D519}', W: '\u{1D51A}', X: '\u{1D51B}', Y: '\u{1D51C}', Z: '\u2128' }; return t.replace(/[A-Za-z]/g, c => m[c] || c) } },
    { n: "Double Struck", f: t => { const m = { a: '\u{1D552}', b: '\u{1D553}', c: '\u{1D554}', d: '\u{1D555}', e: '\u{1D556}', f: '\u{1D557}', g: '\u{1D558}', h: '\u{1D559}', i: '\u{1D55A}', j: '\u{1D55B}', k: '\u{1D55C}', l: '\u{1D55D}', m: '\u{1D55E}', n: '\u{1D55F}', o: '\u{1D560}', p: '\u{1D561}', q: '\u{1D562}', r: '\u{1D563}', s: '\u{1D564}', t: '\u{1D565}', u: '\u{1D566}', v: '\u{1D567}', w: '\u{1D568}', x: '\u{1D569}', y: '\u{1D56A}', z: '\u{1D56B}', A: '\u{1D538}', B: '\u{1D539}', C: '\u2102', D: '\u{1D53B}', E: '\u{1D53C}', F: '\u{1D53D}', G: '\u{1D53E}', H: '\u210D', I: '\u{1D540}', J: '\u{1D541}', K: '\u{1D542}', L: '\u{1D543}', M: '\u{1D544}', N: '\u2115', O: '\u{1D546}', P: '\u2119', Q: '\u211A', R: '\u211D', S: '\u{1D54A}', T: '\u{1D54B}', U: '\u{1D54C}', V: '\u{1D54D}', W: '\u{1D54E}', X: '\u{1D54F}', Y: '\u{1D550}', Z: '\u2124' }; return t.replace(/[A-Za-z0-9]/g, c => { if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7D8 + c.charCodeAt(0) - 48); return m[c] || c }) } },
    { n: "Monospace", f: t => t.replace(/[A-Za-z0-9]/g, c => { if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D68A + c.charCodeAt(0) - 97); if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D670 + c.charCodeAt(0) - 65); return String.fromCodePoint(0x1D7F6 + c.charCodeAt(0) - 48) }) },
    { n: "Fullwidth", f: t => t.replace(/[!-~]/g, c => String.fromCodePoint(c.charCodeAt(0) + 0xFEE0)) },
    { n: "Small Caps", f: t => { const m = { a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'Q', r: 'ʀ', s: 'ꜱ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' }; return t.toLowerCase().replace(/[a-z]/g, c => m[c] || c) } },
    { n: "Circled", f: t => t.replace(/[A-Za-z0-9]/g, c => { if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x24D0 + c.charCodeAt(0) - 97); if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x24B6 + c.charCodeAt(0) - 65); if (c === '0') return '\u24EA'; return String.fromCodePoint(0x2460 + c.charCodeAt(0) - 49) }) },
    { n: "Squared", f: t => t.replace(/[A-Za-z]/g, c => String.fromCodePoint(0x1F130 + (c.toLowerCase().charCodeAt(0) - 97))) },
    { n: "Strikethrough", f: t => t.split('').map(c => c === ' ' ? c : c + '\u0336').join('') },
    { n: "Underline", f: t => t.split('').map(c => c === ' ' ? c : c + '\u0332').join('') },
    { n: "Upside Down", f: t => { const m = { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z', A: '∀', B: 'ᗺ', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'Ⅎ', G: 'פ', H: 'H', I: 'I', J: 'ſ', K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Q', R: 'ᴚ', S: 'S', T: '┴', U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0' }; return t.split('').map(c => m[c] || c).reverse().join('') } },
    { n: "Superscript", f: t => { const m = { a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ', A: 'ᴬ', B: 'ᴮ', C: 'ᶜ', D: 'ᴰ', E: 'ᴱ', F: 'ᶠ', G: 'ᴳ', H: 'ᴴ', I: 'ᴵ', J: 'ᴶ', K: 'ᴷ', L: 'ᴸ', M: 'ᴹ', N: 'ᴺ', O: 'ᴼ', P: 'ᴾ', R: 'ᴿ', S: 'ˢ', T: 'ᵀ', U: 'ᵁ', V: 'ᵛ', W: 'ᵂ', X: 'ˣ', Y: 'ʸ', Z: 'ᶻ', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }; return t.replace(/[A-Za-z0-9]/g, c => m[c] || c) } },
    { n: "Bubble", f: t => { const lo = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ', hi = 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ'; return t.replace(/[a-z]/g, c => lo[c.charCodeAt(0) - 97]).replace(/[A-Z]/g, c => hi[c.charCodeAt(0) - 65]) } }
];
const CC = ['cc1', 'cc2', 'cc3', 'cc4', 'cc5', 'cc6'];

function clearAll() {
    document.getElementById('inputText').value = '';
    updateAll();
}

function buildGrid() {
    const g = document.getElementById('stylesGrid');
    STYLES.forEach((s, i) => {
        const cc = CC[i % CC.length];
        const d = document.createElement('div');
        d.className = `style-card ${cc}`; d.setAttribute('role', 'listitem');
        d.innerHTML = `<div class="card-head"><span class="style-tag">${s.n}</span><button class="copy-btn" onclick="doCopy(event,${i})" aria-label="Copy ${s.n}"><svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>Copy</button></div><div class="style-output empty" id="out-${i}"></div>`;
        g.appendChild(d);
    });
}

const DONE_SVG = "✔️";
const COPY_SVG = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>`;

function doCopy(e, i) {
    e.stopPropagation();
    const raw = document.getElementById('inputText').value;
    if (!raw.trim()) return;

    const b = e.currentTarget;

    navigator.clipboard.writeText(STYLES[i].f(raw))
        .then(() => {
            b.innerHTML = DONE_SVG + ' Copied';
            b.classList.add('done');

            setTimeout(() => {
                b.innerHTML = COPY_SVG + ' Copy';
                b.classList.remove('done');
            }, 1800);
        })
        .catch(err => {
            console.error("Copy failed: ", err);
            showToast("Copy failed!");
        });
}




function updateAll() {
    const raw = document.getElementById('inputText').value;
    document.getElementById('charCount').textContent = raw.length + ' character' + (raw.length !== 1 ? 's' : '');
    STYLES.forEach((s, i) => {
        const el = document.getElementById('out-' + i);
        if (!raw.trim()) { el.textContent = ''; el.classList.add('empty'); }
        else { el.textContent = s.f(raw); el.classList.remove('empty'); }
    });
}


function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    document.getElementById('toggleThumb').textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('textaura-theme', isDark ? 'dark' : 'light');
}
(function () {
    const saved = localStorage.getItem('textaura-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (saved === null && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.addEventListener('DOMContentLoaded', () => {
            const t = document.getElementById('toggleThumb');
            if (t) t.textContent = '🌙';
        });
    }
})();
buildGrid();