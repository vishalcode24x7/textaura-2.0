
function getChars() {
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', LOWER = 'abcdefghijklmnopqrstuvwxyz', NUMS = '0123456789', SYMS = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const AMB = /[0Ol1I]/g;
    let c = '';
    if (document.getElementById('chkUpper').checked) c += UPPER;
    if (document.getElementById('chkLower').checked) c += LOWER;
    if (document.getElementById('chkNums').checked) c += NUMS;
    if (document.getElementById('chkSyms').checked) c += SYMS;
    if (document.getElementById('chkAmb').checked) c = c.replace(AMB, '');
    return c || LOWER;
}
function makePassword(len) {
    const c = getChars(); let p = '';
    const arr = new Uint32Array(len); crypto.getRandomValues(arr);
    arr.forEach(v => { p += c[v % c.length]; });
    return p;
}
function checkStrength(p) {
    let s = 0;
    if (p.length >= 8) s++; if (p.length >= 12) s++; if (p.length >= 16) s++;
    if (/[A-Z]/.test(p)) s++; if (/[a-z]/.test(p)) s++;
    if (/\d/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
}
function generatePwd() {
    const len = parseInt(document.getElementById('lenSlider').value);
    const p = makePassword(len);
    document.getElementById('pwdDisplay').textContent = p;
    const s = checkStrength(p);
    const levels = [
        { w: 14, bg: '#FF6B6B', cls: 'str-weak', lbl: 'Very Weak' },
        { w: 28, bg: '#FF9F43', cls: 'str-fair', lbl: 'Weak' },
        { w: 50, bg: '#FFCD56', cls: 'str-good', lbl: 'Fair' },
        { w: 72, bg: '#48C9B0', cls: 'str-strong', lbl: 'Strong' },
        { w: 100, bg: '#2ECC71', cls: 'str-very', lbl: 'Very Strong' },
    ];
    const idx = Math.min(Math.floor(s / 1.5), 4);
    const lv = levels[idx];
    const bar = document.getElementById('strBar'); bar.style.width = lv.w + '%'; bar.style.background = lv.bg;
    const lbl = document.getElementById('strLabel'); lbl.textContent = lv.lbl; lbl.className = lv.cls;
}
function copyPwd() {
    const p = document.getElementById('pwdDisplay').textContent;
    if (!p || p === 'Click Generate to create a password') return;
    navigator.clipboard.writeText(p).then(() => showToast('Password copied!'));
}
function generateBulk() {
    const len = parseInt(document.getElementById('lenSlider').value);
    const ul = document.getElementById('bulkList'); ul.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const p = makePassword(len);
        const li = document.createElement('li'); li.className = 'bulk-item';
        li.innerHTML = `<span>${p}</span><button class="bulk-copy" onclick="navigator.clipboard.writeText('${p}').then(()=>showToast('Copied!'))">Copy</button>`;
        ul.appendChild(li);
    }
    document.getElementById('bulkCard').style.display = 'block';
}

