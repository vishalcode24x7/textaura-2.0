/* ── STATE ── */
let selectedEC = 'L';
let selectedFmt = 'png';
let selectedDot = 'square';
let selectedCorner = 'square';
let generateTimer = null;

/* ── COLOR PRESETS ── */
const COLOR_PRESETS = [
    { fg: '#000000', bg: '#ffffff', label: 'Classic' },
    { fg: '#5B4FE9', bg: '#ffffff', label: 'Purple' },
    { fg: '#ffffff', bg: '#5B4FE9', label: 'Inv. Purple' },
    { fg: '#25D366', bg: '#ffffff', label: 'WhatsApp' },
    { fg: '#ffffff', bg: '#25D366', label: 'Inv. Green' },
    { fg: '#E63946', bg: '#ffffff', label: 'Red' },
    { fg: '#0077B5', bg: '#ffffff', label: 'LinkedIn' },
    { fg: '#1DA1F2', bg: '#ffffff', label: 'Twitter' },
    { fg: '#FF6B6B', bg: '#FFF0F0', label: 'Coral' },
    { fg: '#2D4A3E', bg: '#C8E6C0', label: 'Forest' },
    { fg: '#F4A261', bg: '#FFF5E9', label: 'Warm' },
    { fg: '#264653', bg: '#E9F5F5', label: 'Ocean' },
];

function buildColorPresets() {
    const wrap = document.getElementById('colorPresets');
    COLOR_PRESETS.forEach(p => {
        const btn = document.createElement('div');
        btn.title = p.label;
        btn.style.cssText = `width:30px;height:30px;border-radius:8px;cursor:pointer;border:2px solid var(--border);background:${p.bg};position:relative;transition:transform 0.15s;flex-shrink:0;`;
        const inner = document.createElement('div');
        inner.style.cssText = `width:14px;height:14px;border-radius:4px;background:${p.fg};position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);`;
        btn.appendChild(inner);
        btn.onmouseenter = () => btn.style.transform = 'scale(1.15)';
        btn.onmouseleave = () => btn.style.transform = 'scale(1)';
        btn.onclick = () => {
            document.getElementById('fgColor').value = p.fg;
            document.getElementById('bgColor').value = p.bg;
            document.getElementById('fgHex').textContent = p.fg;
            document.getElementById('bgHex').textContent = p.bg;
            scheduleGenerate();
        };
        wrap.appendChild(btn);
    });
}

/* ── STYLE OPTION LISTS ── */
const DOT_STYLES = [
    { id: 'square', label: 'Square', svg: '<rect x="3" y="3" width="18" height="18" rx="0" fill="currentColor"/>' },
    { id: 'rounded', label: 'Rounded', svg: '<rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor"/>' },
    { id: 'circle', label: 'Circle', svg: '<circle cx="12" cy="12" r="9" fill="currentColor"/>' },
    { id: 'diamond', label: 'Diamond', svg: '<polygon points="12,3 21,12 12,21 3,12" fill="currentColor"/>' },
    { id: 'star', label: 'Star', svg: '<polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" fill="currentColor"/>' },
    { id: 'cross', label: 'Cross', svg: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor"/>' },
];
const CORNER_STYLES = [
    { id: 'square', label: 'Square', svg: '<rect x="3" y="3" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="12" y="3" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="3" y="12" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5"/>' },
    { id: 'rounded', label: 'Rounded', svg: '<rect x="3" y="3" width="9" height="9" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="12" y="3" width="9" height="9" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="3" y="12" width="9" height="9" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>' },
    { id: 'circle', label: 'Circle', svg: '<circle cx="7.5" cy="7.5" r="4.5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="16.5" cy="7.5" r="4.5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="7.5" cy="16.5" r="4.5" fill="none" stroke="currentColor" stroke-width="2.5"/>' },
    { id: 'bold', label: 'Bold', svg: '<rect x="2" y="2" width="10" height="10" rx="2" fill="currentColor" opacity="0.5"/><rect x="12" y="2" width="10" height="10" rx="2" fill="currentColor" opacity="0.5"/><rect x="2" y="12" width="10" height="10" rx="2" fill="currentColor" opacity="0.5"/>' },
    { id: 'dot', label: 'Dot', svg: '<circle cx="7.5" cy="7.5" r="4.5" fill="currentColor" opacity="0.5"/><circle cx="16.5" cy="7.5" r="4.5" fill="currentColor" opacity="0.5"/><circle cx="7.5" cy="16.5" r="4.5" fill="currentColor" opacity="0.5"/>' },
    { id: 'sharp', label: 'Sharp', svg: '<polygon points="7.5,3 12,7.5 7.5,12 3,7.5" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="16.5,3 21,7.5 16.5,12 12,7.5" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="7.5,12 12,16.5 7.5,21 3,16.5" fill="none" stroke="currentColor" stroke-width="2"/>' },
];

function buildStyleOptions(containerId, items, selectedId, onSelect) {
    const wrap = document.getElementById(containerId);
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'shape-opt' + (item.id === selectedId ? ' selected' : '');
        div.onclick = () => {
            wrap.querySelectorAll('.shape-opt').forEach(d => d.classList.remove('selected'));
            div.classList.add('selected');
            onSelect(item.id);
            scheduleGenerate();
        };
        div.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" style="color:var(--ink2)">${item.svg}</svg><span>${item.label}</span>`;
        wrap.appendChild(div);
    });
}

/* ── EC / FORMAT / COLOR ── */
function selectEC(btn) {
    document.querySelectorAll('.ec-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedEC = btn.dataset.ec;
    document.getElementById('statEC').textContent = selectedEC;
    scheduleGenerate();
}
function selectFmt(btn) {
    document.querySelectorAll('.fmt-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedFmt = btn.dataset.fmt;
}
function updateColorHex(type) {
    const val = document.getElementById(type === 'fg' ? 'fgColor' : 'bgColor').value;
    document.getElementById(type === 'fg' ? 'fgHex' : 'bgHex').textContent = val;
}
function setPreset(text) {
    document.getElementById('qrText').value = text;
    scheduleGenerate();
    document.getElementById('qrText').focus();
}
function scheduleGenerate() {
    clearTimeout(generateTimer);
    generateTimer = setTimeout(generateQR, 280);
}

/* ══════════════════════════════════════════
   DRAW FUNCTIONS — actual shape drawing
══════════════════════════════════════════ */

/* Draw one data dot at (x,y) with given cell size */
function drawDot(ctx, x, y, s, dotStyle) {
    const p = s * 0.1; // padding
    const cx = x + s / 2, cy = y + s / 2, r = (s - p * 2) / 2;
    ctx.beginPath();
    switch (dotStyle) {
        case 'circle':
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            break;
        case 'rounded':
            roundedRect(ctx, x + p, y + p, s - p * 2, s - p * 2, r * 0.55);
            break;
        case 'diamond':
            ctx.moveTo(cx, y + p);
            ctx.lineTo(x + s - p, cy);
            ctx.lineTo(cx, y + s - p);
            ctx.lineTo(x + p, cy);
            ctx.closePath();
            break;
        case 'star':
            drawStar(ctx, cx, cy, 5, r * 0.95, r * 0.42);
            break;
        case 'cross':
            const t = s * 0.28, pad = s * 0.12;
            ctx.rect(x + pad, cy - t / 2, s - pad * 2, t);
            ctx.rect(cx - t / 2, y + pad, t, s - pad * 2);
            break;
        default: // square
            ctx.rect(x + p, y + p, s - p * 2, s - p * 2);
    }
    ctx.fill();
}

/* Draw one complete finder pattern (7×7) at top-left pixel (ox, oy) */
function drawFinder(ctx, ox, oy, s, fg, bg, cornerStyle) {
    const full = s * 7;
    const lw = s * 0.12; // line width for outlines

    ctx.fillStyle = bg;
    ctx.fillRect(ox, oy, full, full);

    ctx.fillStyle = fg;
    ctx.strokeStyle = fg;
    ctx.lineWidth = lw;

    switch (cornerStyle) {
        case 'rounded': {
            const r1 = s * 1.2, r2 = s * 0.7, r3 = s * 0.4;
            // outer ring fill
            roundedRectFill(ctx, ox, oy, full, full, r1);
            ctx.fillStyle = bg;
            roundedRectFill(ctx, ox + s, oy + s, s * 5, s * 5, r2);
            ctx.fillStyle = fg;
            roundedRectFill(ctx, ox + s * 2, oy + s * 2, s * 3, s * 3, r3);
            break;
        }
        case 'circle': {
            const c = s * 3.5;
            // outer circle ring
            ctx.beginPath();
            ctx.arc(ox + c, oy + c, c, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = bg;
            ctx.beginPath();
            ctx.arc(ox + c, oy + c, c - s, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.arc(ox + c, oy + c, s * 1.5, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'bold': {
            ctx.fillRect(ox, oy, full, full);
            ctx.fillStyle = bg;
            ctx.fillRect(ox + s * 1.5, oy + s * 1.5, s * 4, s * 4);
            ctx.fillStyle = fg;
            ctx.fillRect(ox + s * 2.5, oy + s * 2.5, s * 2, s * 2);
            break;
        }
        case 'dot': {
            const c2 = s * 3.5;
            ctx.beginPath();
            ctx.arc(ox + c2, oy + c2, c2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = bg;
            ctx.beginPath();
            ctx.arc(ox + c2, oy + c2, c2 - s, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.arc(ox + c2, oy + c2, s * 1.4, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'sharp': {
            const c3 = s * 3.5;
            // outer diamond
            ctx.beginPath();
            ctx.moveTo(ox + c3, oy);
            ctx.lineTo(ox + full, oy + c3);
            ctx.lineTo(ox + c3, oy + full);
            ctx.lineTo(ox, oy + c3);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = bg;
            ctx.beginPath();
            ctx.moveTo(ox + c3, oy + s);
            ctx.lineTo(ox + full - s, oy + c3);
            ctx.lineTo(ox + c3, oy + full - s);
            ctx.lineTo(ox + s, oy + c3);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.moveTo(ox + c3, oy + s * 2.5);
            ctx.lineTo(ox + full - s * 2.5, oy + c3);
            ctx.lineTo(ox + c3, oy + full - s * 2.5);
            ctx.lineTo(ox + s * 2.5, oy + c3);
            ctx.closePath();
            ctx.fill();
            break;
        }
        default: { // square
            ctx.fillRect(ox, oy, full, full);
            ctx.fillStyle = bg;
            ctx.fillRect(ox + s, oy + s, s * 5, s * 5);
            ctx.fillStyle = fg;
            ctx.fillRect(ox + s * 2, oy + s * 2, s * 3, s * 3);
        }
    }
}

/* Helpers */
function roundedRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}
function roundedRectFill(ctx, x, y, w, h, r) {
    ctx.beginPath();
    roundedRect(ctx, x, y, w, h, r);
    ctx.fill();
}
function drawStar(ctx, cx, cy, points, outerR, innerR) {
    const step = Math.PI / points;
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = i * step - Math.PI / 2;
        ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    }
    ctx.closePath();
}

/* ══ MAIN GENERATE FUNCTION ══ */
function generateQR() {
    const text = document.getElementById('qrText').value.trim();
    const canvas = document.getElementById('qrCanvas');
    const empty = document.getElementById('emptyState');

    if (!text) {
        canvas.style.display = 'none';
        empty.style.display = 'flex';
        document.getElementById('qrStats').style.display = 'none';
        setButtonsDisabled(true);
        return;
    }

    const size = parseInt(document.getElementById('qrSize').value);
    const fg = document.getElementById('fgColor').value;
    const bg = document.getElementById('bgColor').value;
    const margin = parseInt(document.getElementById('qrMargin').value);

    let qr;
    try {
        qr = qrcode(0, selectedEC); // type 0 = auto-detect
        qr.addData(text);
        qr.make();
    } catch (e) {
        try {
            qr = qrcode(40, selectedEC);
            qr.addData(text);
            qr.make();
        } catch (e2) {
            showToast('Text is too long for QR!');
            return;
        }
    }

    const moduleCount = qr.getModuleCount();
    const totalCells = moduleCount + margin * 2;
    const cellSize = size / totalCells;

    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    /* Background */
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);

    /* Finder pattern top-left positions (in module coordinates) */
    const FP = [
        { r: 0, c: 0 },
        { r: 0, c: moduleCount - 7 },
        { r: moduleCount - 7, c: 0 },
    ];

    function inFinder(r, c) {
        return FP.some(fp => r >= fp.r && r < fp.r + 7 && c >= fp.c && c < fp.c + 7);
    }

    /* Draw finder patterns first */
    ctx.fillStyle = fg;
    FP.forEach(fp => {
        const px = (fp.c + margin) * cellSize;
        const py = (fp.r + margin) * cellSize;
        drawFinder(ctx, px, py, cellSize, fg, bg, selectedCorner);
    });

    /* Draw data modules (skip finder zones) */
    ctx.fillStyle = fg;
    for (let r = 0; r < moduleCount; r++) {
        for (let c = 0; c < moduleCount; c++) {
            if (inFinder(r, c)) continue;
            if (!qr.isDark(r, c)) continue;
            const x = (c + margin) * cellSize;
            const y = (r + margin) * cellSize;
            drawDot(ctx, x, y, cellSize, selectedDot);
        }
    }

    /* Show canvas */
    canvas.style.display = 'block';
    canvas.style.borderRadius = '10px';
    empty.style.display = 'none';

    /* Stats */
    document.getElementById('qrStats').style.display = 'grid';
    document.getElementById('statSize').textContent = size;
    document.getElementById('statChars').textContent = text.length;
    document.getElementById('statEC').textContent = selectedEC;
    document.getElementById('statVersion').textContent = moduleCount;

    setButtonsDisabled(false);
}

function setButtonsDisabled(val) {
    ['downloadBtn', 'whatsappBtn', 'copyImgBtn'].forEach(id => {
        document.getElementById(id).disabled = val;
    });
}

/* ── DOWNLOAD ── */
function downloadQR() {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas || canvas.style.display === 'none') return;
    const size = parseInt(document.getElementById('qrSize').value);

    if (selectedFmt === 'svg') {
        const bg = document.getElementById('bgColor').value;
        const url = canvas.toDataURL('image/png');
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}"><rect width="${size}" height="${size}" fill="${bg}"/><image href="${url}" width="${size}" height="${size}"/></svg>`;
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'qrcode-textaura.svg'; a.click();
    } else {
        const mime = { png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp' }[selectedFmt] || 'image/png';
        const a = document.createElement('a');
        a.href = canvas.toDataURL(mime, 0.95); a.download = `qrcode-textaura.${selectedFmt}`; a.click();
    }
    showToast('QR Code downloaded! ✓');
}

/* ── WHATSAPP SHARE ── */
function shareWhatsApp() {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas || canvas.style.display === 'none') return;
    if (navigator.share && navigator.canShare) {
        canvas.toBlob(blob => {
            const file = new File([blob], 'qrcode-textaura.png', { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
                navigator.share({ files: [file], title: 'QR Code — Textaura', text: 'Scan this QR Code!' })
                    .catch(() => waFallback());
            } else { waFallback(); }
        });
    } else { waFallback(); }
}
function waFallback() {
    const msg = encodeURIComponent('Here is my QR Code generated on Textaura: https://textaura.com/qrcode');
    window.open(`https://wa.me/?text=${msg}`, '_blank');
    showToast('Opening WhatsApp…');
}

/* ── COPY IMAGE ── */
function copyQRImage() {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas || canvas.style.display === 'none') return;
    canvas.toBlob(blob => {
        navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
            .then(() => showToast('QR image copied! ✓'))
            .catch(() => showToast('Copy not supported here'));
    });
}

/* ── RESET ── */
function resetAll() {
    document.getElementById('qrText').value = '';
    document.getElementById('fgColor').value = '#000000';
    document.getElementById('bgColor').value = '#ffffff';
    document.getElementById('fgHex').textContent = '#000000';
    document.getElementById('bgHex').textContent = '#ffffff';
    document.getElementById('qrSize').value = 300;
    document.getElementById('sizeVal').textContent = '300px';
    document.getElementById('qrMargin').value = 2;
    document.getElementById('marginVal').textContent = '2';
    selectedEC = 'L'; selectedDot = 'square'; selectedCorner = 'square';
    document.querySelectorAll('.ec-btn').forEach((b, i) => b.classList.toggle('selected', i === 0));
    document.querySelectorAll('#dotStyles .shape-opt').forEach((b, i) => b.classList.toggle('selected', i === 0));
    document.querySelectorAll('#cornerStyles .shape-opt').forEach((b, i) => b.classList.toggle('selected', i === 0));
    generateQR();
    showToast('Reset done!');
}

/* ── INIT ── */
buildColorPresets();
buildStyleOptions('dotStyles', DOT_STYLES, 'square', id => { selectedDot = id; });
buildStyleOptions('cornerStyles', CORNER_STYLES, 'square', id => { selectedCorner = id; });
