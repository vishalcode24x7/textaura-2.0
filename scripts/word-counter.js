
function analyze() {
    const t = document.getElementById('inputText').value;
    const words = t.trim() ? t.trim().split(/\s+/) : []; const wc = words.length;
    const cc = t.length; const ccns = t.replace(/\s/g, '').length;
    const sents = t.trim() ? (t.match(/[^.!?]*[.!?]+/g) || [t]).filter(s => s.trim()).length : 0;
    const paras = t.trim() ? t.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    const unique = new Set(words.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, ''))).size;
    const avgWord = wc ? (words.reduce((s, w) => s + w.replace(/[^a-zA-Z]/g, '').length, 0) / wc).toFixed(1) : 0;
    const avgSent = sents && wc ? (wc / sents).toFixed(1) : 0;
    const readSec = Math.round(wc / 200 * 60); const speakSec = Math.round(wc / 130 * 60);
    const letters = (t.match(/[a-zA-Z]/g) || []).length;
    const numbers = (t.match(/\d/g) || []).length;
    const spaces = (t.match(/ /g) || []).length;
    const punct = (t.match(/[.,!?;:'"()\-]/g) || []).length;
    const upper = (t.match(/[A-Z]/g) || []).length;
    const lower = (t.match(/[a-z]/g) || []).length;

    document.getElementById('liveCount').textContent = `${wc} words · ${cc} chars`;
    document.getElementById('sWords').textContent = wc;
    document.getElementById('sChars').textContent = cc;
    document.getElementById('sSents').textContent = sents;
    document.getElementById('sParas').textContent = paras || 0;
    document.getElementById('dCharsNoSpace').textContent = ccns;
    document.getElementById('dUnique').textContent = unique;
    document.getElementById('dAvgWord').textContent = avgWord;
    document.getElementById('dAvgSent').textContent = avgSent;
    document.getElementById('dReadTime').textContent = readSec < 60 ? readSec + ' sec' : Math.floor(readSec / 60) + 'm ' + (readSec % 60) + 's';
    document.getElementById('dSpeakTime').textContent = speakSec < 60 ? speakSec + ' sec' : Math.floor(speakSec / 60) + 'm ' + (speakSec % 60) + 's';
    document.getElementById('dLetters').textContent = letters;
    document.getElementById('dNumbers').textContent = numbers;
    document.getElementById('dSpaces').textContent = spaces;
    document.getElementById('dPunct').textContent = punct;
    document.getElementById('dUpper').textContent = upper;
    document.getElementById('dLower').textContent = lower;

    const avgWL = parseFloat(avgWord) || 0;
    let level = '—', lClass = '';
    if (wc > 0) { if (avgWL < 4) { level = 'Easy'; lClass = 'level-easy'; } else if (avgWL < 6) { level = 'Medium'; lClass = 'level-medium'; } else { level = 'Hard'; lClass = 'level-hard'; } }
    document.getElementById('dLevel').innerHTML = level === '—' ? '—' : `<span class="level-badge ${lClass}">${level}</span>`;

    // Keywords
    const freq = {};
    words.forEach(w => { const k = w.toLowerCase().replace(/[^a-z]/g, ''); if (k.length > 2) freq[k] = (freq[k] || 0) + 1; });
    const top = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const maxF = top[0] ? top[0][1] : 1;
    const kw = document.getElementById('kwList');
    if (!top.length) { kw.innerHTML = '<p style="font-size:13px;color:var(--muted);font-style:italic">Type text to see keyword analysis…</p>'; return; }
    kw.innerHTML = top.map(([w, c]) => `<div class="kw-row"><span class="kw-word">${w}</span><div class="kw-bar-wrap"><div class="kw-bar" style="width:${(c / maxF * 100).toFixed(0)}%"></div></div><span class="kw-count">${c}</span></div>`).join('');
}
function clearAll() { document.getElementById('inputText').value = ''; analyze(); }
