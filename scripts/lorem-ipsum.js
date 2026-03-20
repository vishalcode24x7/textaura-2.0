
const LOREM_WORDS = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'];
const CICERO = ['sed', 'ut', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus', 'error', 'sit', 'voluptatem', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo', 'inventore', 'veritatis', 'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt', 'explicabo', 'nemo', 'enim', 'ipsam', 'quia', 'voluptas', 'aspernatur', 'aut', 'odit', 'fugit', 'facilis', 'magni', 'dolores', 'eos', 'qui', 'ratione', 'sequi', 'nesciunt'];
const RANDOM_WORDS = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog', 'pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'how', 'vexingly', 'quickly', 'daft', 'zebras', 'jump', 'sphinx', 'quartz', 'jock', 'bright', 'vow', 'gym', 'flux', 'dark', 'sky', 'light', 'wind', 'rain', 'fire', 'earth', 'water', 'time', 'space', 'mind', 'soul', 'heart', 'dream', 'hope', 'love', 'life', 'world', 'stars', 'moon', 'sun'];

let currentType = 'paragraphs';

function selectType(btn) {
    document.querySelectorAll('.type-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    generate();
}
function changeCount(d) {
    const inp = document.getElementById('countInput');
    inp.value = Math.max(1, Math.min(100, parseInt(inp.value || 1) + d));
    generate();
}
function getRandWord(src) {
    const arr = src === 'cicero' ? CICERO : src === 'random' ? RANDOM_WORDS : LOREM_WORDS;
    return arr[Math.floor(Math.random() * arr.length)];
}
function makeSentence(src, punct) {
    const len = 5 + Math.floor(Math.random() * 12);
    let words = [];
    for (let i = 0; i < len; i++)words.push(getRandWord(src));
    let s = words.join(' ');
    if (document.getElementById('chkCaps').checked) s = s.charAt(0).toUpperCase() + s.slice(1);
    if (punct) s += '.';
    return s;
}
function makeParagraph(src) {
    const sents = 4 + Math.floor(Math.random() * 5);
    return Array.from({ length: sents }, () => makeSentence(src, true)).join(' ');
}
function generate() {
    const count = Math.max(1, Math.min(100, parseInt(document.getElementById('countInput').value) || 3));
    const src = document.getElementById('sourceSelect').value;
    const fmt = document.getElementById('formatSelect').value;
    const punct = document.getElementById('chkPunct').checked;
    const startLorem = document.getElementById('chkStart').checked;

    let parts = [];
    if (currentType === 'paragraphs') {
        for (let i = 0; i < count; i++) {
            let p = makeParagraph(src);
            if (i === 0 && startLorem) p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + p;
            parts.push(p);
        }
    } else if (currentType === 'sentences') {
        for (let i = 0; i < count; i++)parts.push(makeSentence(src, punct));
        if (startLorem && parts.length) parts[0] = 'Lorem ipsum dolor sit amet.';
    } else if (currentType === 'words') {
        const words = [];
        for (let i = 0; i < count; i++)words.push(getRandWord(src));
        if (startLorem) words[0] = 'lorem';
        parts = [words.join(' ') + (punct ? '.' : '')];
    } else {
        for (let i = 0; i < count; i++)parts.push(makeSentence(src, false));
    }

    let out = '';
    if (fmt === 'plain') {
        if (currentType === 'list') out = parts.map((p, i) => `${i + 1}. ${p}`).join('\n');
        else out = parts.join(currentType === 'paragraphs' ? '\n\n' : ' ');
    } else if (fmt === 'html') {
        if (currentType === 'list') out = '<ul>\n' + parts.map(p => `  <li>${p}</li>`).join('\n') + '\n</ul>';
        else out = parts.map(p => `<p>${p}</p>`).join('\n');
    } else {
        if (currentType === 'list') out = parts.map(p => `- ${p}`).join('\n');
        else out = parts.join(currentType === 'paragraphs' ? '\n\n' : ' ');
    }

    document.getElementById('outputBox').textContent = out;
    const wc = out.trim().split(/\s+/).length;
    const cc = out.length;
    document.getElementById('outputMeta').textContent = `${wc} words · ${cc} characters`;
}
function copyOutput() {
    const t = document.getElementById('outputBox').textContent;
    navigator.clipboard.writeText(t).then(() => showToast('Lorem ipsum copied!'));
}

