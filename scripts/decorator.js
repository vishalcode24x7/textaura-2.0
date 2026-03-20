const DECORATIONS = [
    // ─ Emoji Borders ─
    { n: 'Star Border', cat: 'Emoji', f: t => `✦ ${t} ✦` },
    { n: 'Heart Border', cat: 'Emoji', f: t => `❤ ${t} ❤` },
    { n: 'Fire Border', cat: 'Emoji', f: t => `🔥 ${t} 🔥` },
    { n: 'Crown Border', cat: 'Emoji', f: t => `👑 ${t} 👑` },
    { n: 'Sparkle Border', cat: 'Emoji', f: t => `✨ ${t} ✨` },
    { n: 'Diamond Border', cat: 'Emoji', f: t => `💎 ${t} 💎` },
    { n: 'Moon Border', cat: 'Emoji', f: t => `🌙 ${t} 🌙` },
    { n: 'Music Border', cat: 'Emoji', f: t => `🎵 ${t} 🎵` },
    { n: 'Flower Border', cat: 'Emoji', f: t => `🌸 ${t} 🌸` },
    { n: 'Lightning Border', cat: 'Emoji', f: t => `⚡ ${t} ⚡` },

    // ─ Unicode Frames ─
    { n: 'Bracket Frame', cat: 'Frames', f: t => `【 ${t} 】` },
    { n: 'Double Bracket', cat: 'Frames', f: t => `『 ${t} 』` },
    { n: 'Angle Bracket', cat: 'Frames', f: t => `《 ${t} 》` },
    { n: 'Neon Frame', cat: 'Frames', f: t => `꧁ ${t} ꧂` },
    { n: 'Wave Frame', cat: 'Frames', f: t => `〜 ${t} 〜` },
    { n: 'Curly Bracket', cat: 'Frames', f: t => `{ ${t} }` },

    // ─ Symbol Borders ─
    { n: 'Arrow Border', cat: 'Symbols', f: t => `→ ${t} ←` },
    { n: 'Double Arrow', cat: 'Symbols', f: t => `» ${t} «` },
    { n: 'Star Line', cat: 'Symbols', f: t => `★彡 ${t} 彡★` },
    { n: 'Diamond Border', cat: 'Symbols', f: t => `◆ ${t} ◆` },
    { n: 'Dot Border', cat: 'Symbols', f: t => `• ${t} •` },
    { n: 'Music Symbol', cat: 'Symbols', f: t => `♫ ${t} ♫` },
    { n: 'Cross Border', cat: 'Symbols', f: t => `✞ ${t} ✞` },
    { n: 'Infinity Border', cat: 'Symbols', f: t => `∞ ${t} ∞` },

    // ─ Multiline ─
    { n: 'Star Box', cat: 'Multiline', f: t => `✦✦✦✦✦✦✦✦✦✦\n✦  ${t}  ✦\n✦✦✦✦✦✦✦✦✦✦` },
    { n: 'Dash Box', cat: 'Multiline', f: t => `─────────────\n  ${t}\n─────────────` },
    { n: 'Hash Box', cat: 'Multiline', f: t => `# # # # # # #\n  ${t}\n# # # # # # #` },
    { n: 'Wave Box', cat: 'Multiline', f: t => `≋≋≋≋≋≋≋≋≋≋≋≋\n  ${t}\n≋≋≋≋≋≋≋≋≋≋≋≋` },
    { n: 'Double Line Box', cat: 'Multiline', f: t => `══════════════\n  ${t}\n══════════════` },
    { n: 'Heart Box', cat: 'Multiline', f: t => `♥ ♥ ♥ ♥ ♥ ♥ ♥\n  ${t}\n♥ ♥ ♥ ♥ ♥ ♥ ♥` },
];

/* ── CATEGORIES ── */
const CATS = ['All', ...new Set(DECORATIONS.map(d => d.cat))];
let activeCat = 'All';

function buildCatFilter() {
    const f = document.getElementById('catFilter');
    CATS.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (c === 'All' ? ' active' : '');
        btn.textContent = c;
        btn.onclick = () => {
            activeCat = c;
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            buildGrid();
        };
        f.appendChild(btn);
    });
}

/* ── SVG ICONS ── */
const COPY_SVG = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>`;
const DONE_SVG = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,7 5.5,11 12,3"/></svg>`;

/* ── BUILD GRID ── */
function buildGrid() {
    const raw = document.getElementById('decInput').value;
    const filtered = activeCat === 'All' ? DECORATIONS : DECORATIONS.filter(d => d.cat === activeCat);
    const g = document.getElementById('decGrid');
    g.innerHTML = '';

    document.getElementById('countLabel').textContent = filtered.length + ' styles ready';

    filtered.forEach((d, i) => {
        const result = raw.trim() ? d.f(raw) : d.f('Hello World');
        const isEmpty = !raw.trim();

        const card = document.createElement('div');
        card.className = 'dec-card';
        card.setAttribute('role', 'listitem');
        card.innerHTML = `
                    <div class="dec-card-top">
                        <span class="dec-name">${d.n}</span>
                        <span class="dec-cat-badge">${d.cat}</span>
                    </div>
                    <div class="dec-output ${isEmpty ? 'empty' : ''}" id="dec-out-${i}">${result}</div>
                    <div class="dec-card-foot">
                        <button class="copy-btn" id="dec-btn-${i}" onclick="copyDec(event, ${i})" aria-label="Copy ${d.n}">
                            ${COPY_SVG} Copy
                        </button>
                    </div>`;
        g.appendChild(card);
    });
}

/* ── UPDATE ON INPUT ── */
function updateDecorations() {
    const raw = document.getElementById('decInput').value;
    document.getElementById('charCount').textContent = raw.length + ' character' + (raw.length !== 1 ? 's' : '');

    const filtered = activeCat === 'All' ? DECORATIONS : DECORATIONS.filter(d => d.cat === activeCat);

    // Update live preview with first decoration
    const lp = document.getElementById('livePreview');
    if (raw.trim()) {
        lp.textContent = filtered[0] ? filtered[0].f(raw) : raw;
        lp.style.color = 'var(--ink)';
        lp.style.fontStyle = 'normal';
    } else {
        lp.textContent = 'Your decorated text will appear here…';
        lp.style.color = 'var(--muted)';
        lp.style.fontStyle = 'italic';
    }

    // Update all cards
    filtered.forEach((d, i) => {
        const el = document.getElementById('dec-out-' + i);
        if (!el) return;
        if (!raw.trim()) {
            el.textContent = d.f('Hello World');
            el.classList.add('empty');
        } else {
            el.textContent = d.f(raw);
            el.classList.remove('empty');
        }
    });
}

/* ── COPY ── */
function copyDec(e, i) {
    e.stopPropagation();
    const raw = document.getElementById('decInput').value;
    const filtered = activeCat === 'All' ? DECORATIONS : DECORATIONS.filter(d => d.cat === activeCat);
    const text = raw.trim() ? filtered[i].f(raw) : filtered[i].f('Hello World');

    navigator.clipboard.writeText(text).then(() => {
        const b = document.getElementById('dec-btn-' + i);
        b.innerHTML = DONE_SVG + ' Copied';
        b.classList.add('done');
        setTimeout(() => {
            b.innerHTML = COPY_SVG + ' Copy';
            b.classList.remove('done');
        }, 1800);
        showToast(filtered[i].n + ' — Copied!');
    });
}

/* ── CLEAR ── */
function clearAll() {
    document.getElementById('decInput').value = '';
    updateDecorations();
    buildGrid();
}

/* ── INIT ── */
buildCatFilter();
buildGrid();
