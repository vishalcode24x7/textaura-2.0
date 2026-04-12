
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach((b, i) => { b.classList.toggle('active', ['decimal', 'binary', 'hex', 'octal', 'ascii', 'reference'][i] === tab); });
    document.querySelectorAll('.conv-section').forEach(s => s.classList.remove('active'));
    document.getElementById('sec-' + tab).classList.add('active');
    if (tab === 'reference') buildRefTable();
}

/* COPY */
const CPY = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>`;
const CHK = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,7 5.5,11 12,3"/></svg>`;

function copyVal(val, btn) {
    navigator.clipboard.writeText(val).then(() => {
        if (btn) { btn.innerHTML = CHK + ' Copied'; btn.classList.add('done'); setTimeout(() => { btn.innerHTML = CPY + ' Copy'; btn.classList.remove('done'); }, 1800); }
        showToast('Copied!');
    });
}

/* CONVERTERS */
function decToGray(n) { return n ^ (n >> 1); }
function decToBCD(n) {
    return String(n).split('').map(d => parseInt(d).toString(2).padStart(4, '0')).join(' ');
}

function buildResultBox(label, base, value, key) {
    const id = `rb_${key}_${base}`;
    return `<div class="result-box" onclick="copyVal('${value}',document.getElementById('btn_${key}_${base}'))">
    <div class="rb-label"><span>${label}</span><span class="rb-base">Base ${base}</span></div>
    <div class="rb-val">${value}</div>
    <button class="rb-copy" id="btn_${key}_${base}" onclick="event.stopPropagation();copyVal('${value}',this)">${CPY} Copy</button>
  </div>`;
}

/* DECIMAL → ALL */
function convertFrom(from) {
    let dec;

    if (from === 'dec') {
        const v = document.getElementById('decInput').value.trim();
        const err = document.getElementById('decErr');
        const inp = document.getElementById('decInput');
        if (v === '' || isNaN(v) || parseInt(v) < 0) {
            if (v !== '') { inp.classList.add('error'); err.style.display = 'block'; }
            document.getElementById('decResults').innerHTML = '';
            document.getElementById('decSteps').style.display = 'none';
            return;
        }
        inp.classList.remove('error'); err.style.display = 'none';
        dec = parseInt(v);
        const bin = dec.toString(2);
        const hex = dec.toString(16).toUpperCase();
        const oct = dec.toString(8);
        const bcd = decToBCD(dec);
        const gray = decToGray(dec).toString(2);
        document.getElementById('decResults').innerHTML =
            buildResultBox('Binary', '2', bin, 'dec') +
            buildResultBox('Hexadecimal', '16', hex, 'dec') +
            buildResultBox('Octal', '8', oct, 'dec') +
            buildResultBox('BCD', '—', bcd, 'dec') +
            buildResultBox('Gray Code', '—', gray, 'dec') +
            buildResultBox('ASCII', '—', dec >= 32 && dec <= 126 ? String.fromCharCode(dec) : 'N/A', 'dec');
        document.getElementById('decSteps').style.display = 'block';
        document.getElementById('decStepsBody').innerHTML = buildDecSteps(dec, bin);
    }

    if (from === 'bin') {
        const v = document.getElementById('binInput').value.trim();
        const err = document.getElementById('binErr');
        const inp = document.getElementById('binInput');
        if (v === '' || !/^[01]+$/.test(v)) {
            if (v !== '') { inp.classList.add('error'); err.style.display = 'block'; }
            document.getElementById('binResults').innerHTML = '';
            document.getElementById('binSteps').style.display = 'none';
            return;
        }
        inp.classList.remove('error'); err.style.display = 'none';
        dec = parseInt(v, 2);
        const hex = dec.toString(16).toUpperCase();
        const oct = dec.toString(8);
        const bcd = decToBCD(dec);
        const gray = decToGray(dec).toString(2);
        document.getElementById('binResults').innerHTML =
            buildResultBox('Decimal', '10', String(dec), 'bin') +
            buildResultBox('Hexadecimal', '16', hex, 'bin') +
            buildResultBox('Octal', '8', oct, 'bin') +
            buildResultBox('BCD', '—', bcd, 'bin') +
            buildResultBox('Gray Code', '—', gray, 'bin');
        document.getElementById('binSteps').style.display = 'block';
        document.getElementById('binStepsBody').innerHTML = buildBinSteps(v, dec);
    }

    if (from === 'hex') {
        const v = document.getElementById('hexInput').value.trim();
        const err = document.getElementById('hexErr');
        const inp = document.getElementById('hexInput');
        if (v === '' || !/^[0-9a-fA-F]+$/.test(v)) {
            if (v !== '') { inp.classList.add('error'); err.style.display = 'block'; }
            document.getElementById('hexResults').innerHTML = '';
            return;
        }
        inp.classList.remove('error'); err.style.display = 'none';
        dec = parseInt(v, 16);
        const bin = dec.toString(2);
        const oct = dec.toString(8);
        const bcd = decToBCD(dec);
        const gray = decToGray(dec).toString(2);
        document.getElementById('hexResults').innerHTML =
            buildResultBox('Decimal', '10', String(dec), 'hex') +
            buildResultBox('Binary', '2', bin, 'hex') +
            buildResultBox('Octal', '8', oct, 'hex') +
            buildResultBox('BCD', '—', bcd, 'hex') +
            buildResultBox('Gray Code', '—', gray, 'hex');
    }

    if (from === 'oct') {
        const v = document.getElementById('octInput').value.trim();
        const err = document.getElementById('octErr');
        const inp = document.getElementById('octInput');
        if (v === '' || !/^[0-7]+$/.test(v)) {
            if (v !== '') { inp.classList.add('error'); err.style.display = 'block'; }
            document.getElementById('octResults').innerHTML = '';
            return;
        }
        inp.classList.remove('error'); err.style.display = 'none';
        dec = parseInt(v, 8);
        const bin = dec.toString(2);
        const hex = dec.toString(16).toUpperCase();
        const bcd = decToBCD(dec);
        const gray = decToGray(dec).toString(2);
        document.getElementById('octResults').innerHTML =
            buildResultBox('Decimal', '10', String(dec), 'oct') +
            buildResultBox('Binary', '2', bin, 'oct') +
            buildResultBox('Hexadecimal', '16', hex, 'oct') +
            buildResultBox('BCD', '—', bcd, 'oct') +
            buildResultBox('Gray Code', '—', gray, 'oct');
    }
}

/* STEP-BY-STEP DECIMAL TO BINARY */
function buildDecSteps(dec, bin) {
    let html = '<div class="step-line" style="margin-bottom:8px;font-weight:700;color:var(--ink)">Converting ' + dec + ' (Decimal) → Binary:</div>';
    let n = dec, steps = [];
    while (n > 0) { steps.push([n, n % 2]); n = Math.floor(n / 2); }
    steps.forEach(([num, rem]) => {
        html += `<div class="step-line">${num} ÷ 2 = ${Math.floor(num / 2)} remainder <span>${rem}</span></div>`;
    });
    html += `<div class="step-line" style="margin-top:6px;font-weight:700;color:var(--ink)">Read remainders bottom to top: <span>${bin}</span></div>`;
    return html;
}

/* STEP-BY-STEP BINARY TO DECIMAL */
function buildBinSteps(bin, dec) {
    let html = `<div class="step-line" style="margin-bottom:8px;font-weight:700;color:var(--ink)">Converting ${bin} (Binary) → Decimal:</div>`;
    const bits = [...bin].reverse();
    let parts = [];
    bits.forEach((b, i) => { if (b === '1') parts.push(`${b}×2<sup>${i}</sup>(${Math.pow(2, i)})`); });
    html += `<div class="step-line">${parts.join(' + ')} = <span>${dec}</span></div>`;
    return html;
}

/* ASCII CONVERTERS */
function textToBinary() {
    const t = document.getElementById('textInput').value;
    if (!t) { document.getElementById('binOutput').textContent = '—'; return; }
    const bin = t.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    document.getElementById('binOutput').textContent = bin;
}
function binaryToText() {
    const t = document.getElementById('binTextInput').value.trim();
    if (!t) { document.getElementById('textOutput').textContent = '—'; return; }
    try {
        const text = t.split(' ').filter(b => b).map(b => String.fromCharCode(parseInt(b, 2))).join('');
        document.getElementById('textOutput').textContent = text || '—';
    } catch (e) { document.getElementById('textOutput').textContent = 'Invalid binary input'; }
}
function copyAscii(id) {
    const v = document.getElementById(id).textContent;
    if (v && v !== '—') navigator.clipboard.writeText(v).then(() => showToast('Copied!'));
}

/* REFERENCE TABLE */
function buildRefTable() {
    const tb = document.getElementById('refBody');
    if (tb.children.length) return;
    for (let i = 0; i <= 15; i++) {
        const gray = decToGray(i);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${i}</td><td>${i.toString(2).padStart(4, '0')}</td><td>${i.toString(8)}</td><td>${i.toString(16).toUpperCase()}</td><td>${decToBCD(i)}</td><td>${gray.toString(2).padStart(4, '0')}</td>`;
        tb.appendChild(tr);
    }
}