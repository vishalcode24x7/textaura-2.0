
const CASES = [
    { n: 'UPPERCASE', f: t => t.toUpperCase() },
    { n: 'lowercase', f: t => t.toLowerCase() },
    { n: 'Title Case', f: t => t.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()) },
    { n: 'Sentence case', f: t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() },
    { n: 'camelCase', f: t => t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()) },
    { n: 'PascalCase', f: t => { const c = t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()); return c.charAt(0).toUpperCase() + c.slice(1) } },
    { n: 'snake_case', f: t => t.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase() },
    { n: 'SCREAMING_SNAKE', f: t => t.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').toUpperCase() },
    { n: 'kebab-case', f: t => t.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase() },
    { n: 'TRAIN-CASE', f: t => t.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toUpperCase() },
    { n: 'dot.case', f: t => t.replace(/\s+/g, '.').replace(/[^a-zA-Z0-9.]/g, '').toLowerCase() },
    { n: 'InVeRsE CaSe', f: t => [...t].map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('') },
    { n: 'aLtErNaTiNg', f: t => [...t].map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('') },
    { n: 'Reversed', f: t => t.split('').reverse().join('') },
];
const CPY = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>`;
const CHK = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,7 5.5,11 12,3"/></svg>`;

function buildGrid() {
    const g = document.getElementById('casesGrid');
    CASES.forEach((c, i) => {
        const d = document.createElement('div'); d.className = 'case-card';
        d.innerHTML = `<div class="case-head"><span class="case-name">${c.n}</span><button class="copy-btn" id="cb${i}" onclick="doCopy(${i})">${CPY} Copy</button></div><div class="case-output empty" id="co${i}">Type something above…</div>`;
        g.appendChild(d);
    });
}
function updateCases() {
    const t = document.getElementById('inputText').value;
    const words = t.trim() ? t.trim().split(/\s+/).length : 0;
    document.getElementById('stats').textContent = `${words} words · ${t.length} chars`;
    CASES.forEach((c, i) => {
        const el = document.getElementById('co' + i);
        if (!t.trim()) { el.textContent = 'Type something above…'; el.classList.add('empty'); }
        else { el.textContent = c.f(t); el.classList.remove('empty'); }
    });
}
function doCopy(i) {
    const t = document.getElementById('inputText').value;
    if (!t.trim()) return;
    navigator.clipboard.writeText(CASES[i].f(t)).then(() => {
        const b = document.getElementById('cb' + i);
        b.innerHTML = CHK + ' Done'; b.classList.add('done');
        setTimeout(() => { b.innerHTML = CPY + ' Copy'; b.classList.remove('done'); }, 1800);
        showToast(CASES[i].n + ' — Copied!');
    });
}
function clearAll() {
    document.getElementById('inputText').value = ''; updateCases();
}
buildGrid();