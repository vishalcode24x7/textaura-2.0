// const DECORATIONS = [
//     // ─ Emoji Borders ─
//     { n: 'Star Border', cat: 'Emoji', f: t => `✦ ${t} ✦` },
//     { n: 'Heart Border', cat: 'Emoji', f: t => `❤ ${t} ❤` },
//     { n: 'Fire Border', cat: 'Emoji', f: t => `🔥 ${t} 🔥` },
//     { n: 'Crown Border', cat: 'Emoji', f: t => `👑 ${t} 👑` },
//     { n: 'Sparkle Border', cat: 'Emoji', f: t => `✨ ${t} ✨` },
//     { n: 'Diamond Border', cat: 'Emoji', f: t => `💎 ${t} 💎` },
//     { n: 'Moon Border', cat: 'Emoji', f: t => `🌙 ${t} 🌙` },
//     { n: 'Music Border', cat: 'Emoji', f: t => `🎵 ${t} 🎵` },
//     { n: 'Flower Border', cat: 'Emoji', f: t => `🌸 ${t} 🌸` },
//     { n: 'Lightning Border', cat: 'Emoji', f: t => `⚡ ${t} ⚡` },

//     // ─ Unicode Frames ─
//     { n: 'Bracket Frame', cat: 'Frames', f: t => `【 ${t} 】` },
//     { n: 'Double Bracket', cat: 'Frames', f: t => `『 ${t} 』` },
//     { n: 'Angle Bracket', cat: 'Frames', f: t => `《 ${t} 》` },
//     { n: 'Neon Frame', cat: 'Frames', f: t => `꧁ ${t} ꧂` },
//     { n: 'Wave Frame', cat: 'Frames', f: t => `〜 ${t} 〜` },
//     { n: 'Curly Bracket', cat: 'Frames', f: t => `{ ${t} }` },

//     // ─ Symbol Borders ─
//     { n: 'Arrow Border', cat: 'Symbols', f: t => `→ ${t} ←` },
//     { n: 'Double Arrow', cat: 'Symbols', f: t => `» ${t} «` },
//     { n: 'Star Line', cat: 'Symbols', f: t => `★彡 ${t} 彡★` },
//     { n: 'Diamond Border', cat: 'Symbols', f: t => `◆ ${t} ◆` },
//     { n: 'Dot Border', cat: 'Symbols', f: t => `• ${t} •` },
//     { n: 'Music Symbol', cat: 'Symbols', f: t => `♫ ${t} ♫` },
//     { n: 'Cross Border', cat: 'Symbols', f: t => `✞ ${t} ✞` },
//     { n: 'Infinity Border', cat: 'Symbols', f: t => `∞ ${t} ∞` },

//     // ─ Multiline ─
//     { n: 'Star Box', cat: 'Multiline', f: t => `✦✦✦✦✦✦✦✦✦✦\n✦  ${t}  ✦\n✦✦✦✦✦✦✦✦✦✦` },
//     { n: 'Dash Box', cat: 'Multiline', f: t => `─────────────\n  ${t}\n─────────────` },
//     { n: 'Hash Box', cat: 'Multiline', f: t => `# # # # # # #\n  ${t}\n# # # # # # #` },
//     { n: 'Wave Box', cat: 'Multiline', f: t => `≋≋≋≋≋≋≋≋≋≋≋≋\n  ${t}\n≋≋≋≋≋≋≋≋≋≋≋≋` },
//     { n: 'Double Line Box', cat: 'Multiline', f: t => `══════════════\n  ${t}\n══════════════` },
//     { n: 'Heart Box', cat: 'Multiline', f: t => `♥ ♥ ♥ ♥ ♥ ♥ ♥\n  ${t}\n♥ ♥ ♥ ♥ ♥ ♥ ♥` },
// ];

function toBoldUnicode(text) {
    const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const bold = [
        "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙",
        "𝐚", "𝐛", "𝐜", "𝐝", "𝐞", "𝐟", "𝐠", "𝐡", "𝐢", "𝐣", "𝐤", "𝐥", "𝐦", "𝐧", "𝐨", "𝐩", "𝐪", "𝐫", "𝐬", "𝐭", "𝐮", "𝐯", "𝐰", "𝐱", "𝐲", "𝐳",
        "𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"
    ];
    return text.split('').map(char => {
        const index = normal.indexOf(char);
        return index !== -1 ? bold[index] : char;
    }).join('');
}

const DECORATIONS = [
    // ─ Emoji ─
    { n: 'Bear Hug', cat: 'Emoji', f: t => toBoldUnicode(`ʕ·ᴥ·ʔ ${t} ʕ·ᴥ·ʔ`) },
    { n: 'Cute Bear', cat: 'Emoji', f: t => toBoldUnicode(`(◕ᴥ◕) ${t} (◕ᴥ◕)`) },
    { n: 'Lenny Bear', cat: 'Emoji', f: t => toBoldUnicode(`( ͡° ᴥ ͡°) ${t} ( ͡° ᴥ ͡°)`) },
    { n: 'Owl Bear', cat: 'Emoji', f: t => toBoldUnicode(`ʕ⊙ᴥ⊙ʔ${t}ʕ⊙ᴥ⊙ʔ`) },
    { n: 'Puppy Eyes', cat: 'Emoji', f: t => toBoldUnicode(`(oꆤ︵ꆤo) ${t} (oꆤ︵ꆤo)`) },
    { n: 'Happy Face', cat: 'Emoji', f: t => toBoldUnicode(`(≧◡≦) ${t} (≧◡≦)`) },
    { n: 'Tiny Bear', cat: 'Emoji', f: t => toBoldUnicode(`૮₍ ´• ˕ • ₎ა ${t} ૮₍ ´• ˕ • ₎ა`) },
    { n: 'Sad Face', cat: 'Emoji', f: t => toBoldUnicode(`(●︿●) ${t} (●︿●)`) },
    { n: 'Sleepy Face', cat: 'Emoji', f: t => toBoldUnicode(`(-_-) ${t} (-_-)`) },
    { n: 'Love Face', cat: 'Emoji', f: t => toBoldUnicode(`ღ(¯◕‿◕¯) ${t} ღ(¯◕‿◕¯)`) },
    { n: 'Lenny Face', cat: 'Emoji', f: t => toBoldUnicode(`( ͡° ͜ʖ ͡°) ${t} ( ͡° ͜ʖ ͡°)`) },
    { n: 'Crying Flower', cat: 'Emoji', f: t => toBoldUnicode(`( ✿˃̣̣̥᷄⌓˂̣̣̥᷅ )${t}( ✿˃̣̣̥᷄⌓˂̣̣̥᷅ )`) },
    { n: 'Gun Blast', cat: 'Emoji', f: t => toBoldUnicode(`( -_•)╦̵̵̿╤─ ${t} 💥`) },
    { n: 'Gun Whoosh', cat: 'Emoji', f: t => toBoldUnicode(`▄︻デ═${t}═━一💨`) },
    { n: 'Gun Splash', cat: 'Emoji', f: t => toBoldUnicode(`┣▇▇ ${t} ▇▇═─ 💦`) },
    { n: 'Moon Simple', cat: 'Emoji', f: t => toBoldUnicode(`🌙 ${t} 🌙`) },
    { n: 'Ribbon', cat: 'Emoji', f: t => toBoldUnicode(`.•°¤*(¯\`★´¯)*¤°   🎀  ${t}  🎀   °¤*)¯´★\`¯(*¤°•.`) },
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

    // ─ Frames ─
    { n: 'Bracket Frame', cat: 'Frames', f: t => `【 ${t} 】` },
    { n: 'Double Bracket', cat: 'Frames', f: t => `『 ${t} 』` },
    { n: 'Angle Bracket', cat: 'Frames', f: t => `《 ${t} 》` },
    { n: 'Neon Frame', cat: 'Frames', f: t => `꧁ ${t} ꧂` },
    { n: 'Wave Frame', cat: 'Frames', f: t => `〜 ${t} 〜` },
    { n: 'Curly Bracket', cat: 'Frames', f: t => `{ ${t} }` },
    { n: 'Square Bracket', cat: 'Frames', f: t => toBoldUnicode(`[ ${t} ]`) },
    { n: 'Neon Frame Bold', cat: 'Frames', f: t => toBoldUnicode(`꧁༺ ${t} ༻꧂`) },
    { n: 'Ancient Frame', cat: 'Frames', f: t => toBoldUnicode(`꧁𓊈𒆜${t}𒆜𓊉꧂`) },
    { n: 'Crown Frame', cat: 'Frames', f: t => toBoldUnicode(`╚══ ≪ °❈|${t}|❈° ≫ ══╝`) },
    { n: 'Sword Frame', cat: 'Frames', f: t => toBoldUnicode(`┏━✦❘༻ ${t} ༺❘✦━┓`) },
    { n: 'Block Frame', cat: 'Frames', f: t => toBoldUnicode(`❚█══ ${t} ══█❚`) },
    { n: 'King Frame', cat: 'Frames', f: t => toBoldUnicode(`𝕂𝕚𝕟𝕘(♛| ${t} |♛)𝕂𝕚𝕟𝕘`) },
    { n: 'Angle Line', cat: 'Frames', f: t => toBoldUnicode(`┈ ⋞ 〈${t}〉 ⋟ ┈`) },
    { n: 'Rope Frame', cat: 'Frames', f: t => toBoldUnicode(`(¯·..·¯·..-> ${t} <-..·¯·..·¯)`) },
    { n: 'Division Frame', cat: 'Frames', f: t => toBoldUnicode(`—(••÷[ ${t} ]÷••)—`) },
    { n: 'Heavy Sword Frame', cat: 'Frames', f: t => toBoldUnicode(`]|I{•------» ${t} «------•}I|[`) },
    { n: 'Wave Bracket', cat: 'Frames', f: t => toBoldUnicode(`︶︵︶ ${t} ︶︵︶`) },
    { n: 'Glitch Frame', cat: 'Frames', f: t => toBoldUnicode(`▌│█║▌║▌║ ${t} ▌│█║▌║▌║`) },
    { n: 'Block Wave', cat: 'Frames', f: t => toBoldUnicode(`▀▄▀▄▀▄ ${t} ▀▄▀▄▀▄`) },
    { n: 'Level Bar', cat: 'Frames', f: t => toBoldUnicode(`▁ ▂ ▄ ▅ ▆ ▇ █ ${t} █ ▇ ▆ ▅ ▄ ▂ ▁`) },
    { n: 'Block Bar', cat: 'Frames', f: t => toBoldUnicode(`░▒▓█►─═ ${t} ═─◄█▓▒░`) },

    // ─ Symbols ─
    { n: 'Arrow Border', cat: 'Symbols', f: t => `→ ${t} ←` },
    { n: 'Double Arrow', cat: 'Symbols', f: t => `» ${t} «` },
    { n: 'Star Line', cat: 'Symbols', f: t => `★彡 ${t} 彡★` },
    { n: 'Diamond Border', cat: 'Symbols', f: t => `◆ ${t} ◆` },
    { n: 'Dot Border', cat: 'Symbols', f: t => `• ${t} •` },
    { n: 'Music Symbol', cat: 'Symbols', f: t => `♫ ${t} ♫` },
    { n: 'Cross Border', cat: 'Symbols', f: t => `✞ ${t} ✞` },
    { n: 'Infinity Border', cat: 'Symbols', f: t => `∞ ${t} ∞` },
    { n: 'Heart Chain', cat: 'Symbols', f: t => toBoldUnicode(`•┈••✦❤ ${t} ❤✦••┈•`) },
    { n: 'War Symbol', cat: 'Symbols', f: t => toBoldUnicode(`༒☬ ${t} ☬༒`) },
    { n: 'Star彡', cat: 'Symbols', f: t => toBoldUnicode(`★彡 ${t} 彡★`) },
    { n: 'Heart Simple', cat: 'Symbols', f: t => toBoldUnicode(`♡ ${t} ♡`) },
    { n: 'Arrow Right', cat: 'Symbols', f: t => toBoldUnicode(`➵ ${t} ➵`) },
    { n: 'Ancient Eye', cat: 'Symbols', f: t => toBoldUnicode(`𓆩 ${t} 𓆪`) },
    { n: 'Crown', cat: 'Symbols', f: t => toBoldUnicode(`♛${t}♛`) },
    { n: 'Spade', cat: 'Symbols', f: t => toBoldUnicode(`♠${t}♠`) },
    { n: 'Radioactive', cat: 'Symbols', f: t => toBoldUnicode(`☢${t}☢`) },
    { n: 'Star4', cat: 'Symbols', f: t => toBoldUnicode(`✴${t}✴`) },
    { n: 'Knight', cat: 'Symbols', f: t => toBoldUnicode(`♞${t}♞`) },
    { n: 'Sparkle', cat: 'Symbols', f: t => toBoldUnicode(`✩ ${t} ✩`) },
    { n: 'Diamond Simple', cat: 'Symbols', f: t => toBoldUnicode(`♦ ${t} ♦`) },
    { n: 'Crown Spaced', cat: 'Symbols', f: t => toBoldUnicode(`♛ ${t} ♛`) },
    { n: 'Flower', cat: 'Symbols', f: t => toBoldUnicode(`✿ ${t} ✿`) },
    { n: 'Tibetan', cat: 'Symbols', f: t => toBoldUnicode(`༄ ${t} ༄`) },
    { n: 'Scroll', cat: 'Symbols', f: t => toBoldUnicode(`෴${t}෴`) },
    { n: 'Music Notes', cat: 'Symbols', f: t => toBoldUnicode(`♩♪♫ ${t} ♫♩♪`) },
    { n: 'Cloud', cat: 'Symbols', f: t => toBoldUnicode(`☁ ${t} ☁`) },
    { n: 'Dot Circle', cat: 'Symbols', f: t => toBoldUnicode(`◦•●◉✿ ${t} ✿◉●•◦`) },
    { n: 'Music Fancy', cat: 'Symbols', f: t => toBoldUnicode(`.•♫•♬• ${t} •♬•♫•.`) },
    { n: 'Heart Vine', cat: 'Symbols', f: t => toBoldUnicode(`*•.¸♡ ${t} ♡¸.•*`) },
    { n: 'Sword Left', cat: 'Symbols', f: t => toBoldUnicode(`»»——⍟${t}⍟——««`) },
    { n: 'Sword Right', cat: 'Symbols', f: t => toBoldUnicode(`»»————${t}————⌲`) },
    { n: 'Rifle', cat: 'Symbols', f: t => toBoldUnicode(`▬▬ι══${t}═════ﺣ`) },
    { n: 'Gun', cat: 'Symbols', f: t => toBoldUnicode(`▄︻デ${t}═══━一 ҉~•`) },
    { n: 'Flower Wave', cat: 'Symbols', f: t => toBoldUnicode(`══✿══╡°˖✧${t}✧˖°╞══✿══`) },
    { n: 'Star Dotted', cat: 'Symbols', f: t => toBoldUnicode(`✺✳ ┅${t}┅ ✳✺`) },
    { n: 'Asterisk', cat: 'Symbols', f: t => toBoldUnicode(`───※${t}※───`) },
    { n: 'Love Frame', cat: 'Symbols', f: t => toBoldUnicode(`❤꧁ღ⊱♥ ${t} ♥⊱ღ꧂❤`) },
    { n: 'Heart Arrow', cat: 'Symbols', f: t => toBoldUnicode(`❣→→❣ ${t} ❣←←❣`) },
    { n: 'Crystal', cat: 'Symbols', f: t => toBoldUnicode(`✧⋄⋆⋅⋆⋄${t}⋄⋆⋅⋆⋄✧`) },
    { n: 'Star Border Bold', cat: 'Symbols', f: t => toBoldUnicode(`╰☆☆ ${t} ☆☆╮`) },
    { n: 'Star Dot', cat: 'Symbols', f: t => toBoldUnicode(`★·.· ${t} ·.·★`) },
    { n: 'Question Border', cat: 'Symbols', f: t => toBoldUnicode(`•?((¯°·._.• ${t} •._.·°¯))؟•`) },
    { n: 'Arrow Left', cat: 'Symbols', f: t => toBoldUnicode(`↤↤↤↤↤ ${t} ↦↦↦↦↦`) },
    { n: 'Arrow Loop', cat: 'Symbols', f: t => toBoldUnicode(`↫↫↫↫↫ ${t} ↬↬↬↬↬`) },
    { n: 'Arrow Forward', cat: 'Symbols', f: t => toBoldUnicode(`➶➶➶➶ ${t} ➶➶➶➶`) },
    { n: 'Temple', cat: 'Symbols', f: t => toBoldUnicode(`ஜ۩۞۩ஜ ${t} ஜ۩۞۩ஜ`) },
    { n: 'Star Dust', cat: 'Symbols', f: t => toBoldUnicode(`.·͙*̩̩͙˚̩̥̩̥*̩̩̥͙${t}*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ .`) },

    // ─ Multiline ─
    { n: 'Star Box', cat: 'Multiline', f: t => `✦✦✦✦✦✦✦✦✦✦\n✦  ${t}  ✦\n✦✦✦✦✦✦✦✦✦✦` },
    { n: 'Dash Box', cat: 'Multiline', f: t => `─────────────\n  ${t}\n─────────────` },
    { n: 'Hash Box', cat: 'Multiline', f: t => `# # # # # # #\n  ${t}\n# # # # # # #` },
    { n: 'Wave Box', cat: 'Multiline', f: t => `≋≋≋≋≋≋≋≋≋≋≋≋\n  ${t}\n≋≋≋≋≋≋≋≋≋≋≋≋` },
    { n: 'Double Line Box', cat: 'Multiline', f: t => `══════════════\n  ${t}\n══════════════` },
    { n: 'Heart Box', cat: 'Multiline', f: t => `♥ ♥ ♥ ♥ ♥ ♥ ♥\n  ${t}\n♥ ♥ ♥ ♥ ♥ ♥ ♥` },
];

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
