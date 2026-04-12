/* PDF.js worker */
if (typeof pdfjsLib !== 'undefined') pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ── TABS ── */
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach((b, i) => { b.classList.toggle('active', ['image', 'pdf2img', 'img2pdf', 'resize'][i] === tab); });
    document.querySelectorAll('.conv-section').forEach(s => s.classList.remove('active'));
    document.getElementById('sec-' + tab).classList.add('active');
}

/* ── UTILS ── */
function formatBytes(b) { if (b < 1024) return b + ' B'; if (b < 1048576) return (b / 1024).toFixed(1) + ' KB'; return (b / 1048576).toFixed(2) + ' MB'; }
function getExt(mime) { const m = { ['image/jpeg']: 'jpg', ['image/png']: 'png', ['image/webp']: 'webp', ['image/bmp']: 'bmp', ['image/gif']: 'gif' }; return m[mime] || 'jpg'; }

function triggerDownload(dataURL, filename) {
    const a = document.createElement('a'); a.href = dataURL; a.download = filename; document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

/* drag-and-drop */
['imgDropZone', 'pdfDropZone', 'i2pDropZone', 'resizeDropZone'].forEach(id => {
    const el = document.getElementById(id); if (!el) return;
    el.addEventListener('dragover', e => { e.preventDefault(); el.classList.add('drag-over'); });
    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
    el.addEventListener('drop', e => {
        e.preventDefault(); el.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (id === 'imgDropZone') handleImageFiles(files);
        else if (id === 'pdfDropZone') handlePDFFile(files[0]);
        else if (id === 'i2pDropZone') handleI2PFiles(files);
        else if (id === 'resizeDropZone') handleResizeFile(files[0]);
    });
});


let imgFiles = [];
let imgResults = [];

function handleImageFiles(files) {
    imgFiles = [...files].filter(f => f.type.startsWith('image/'));
    if (!imgFiles.length) { showToast('Please upload valid image files.'); return; }
    const grid = document.getElementById('imgPreviewGrid'); grid.innerHTML = '';
    imgFiles.forEach((f, i) => {
        const reader = new FileReader();
        reader.onload = e => {
            const card = document.createElement('div'); card.className = 'preview-card';
            card.innerHTML = `<img class="preview-thumb" src="${e.target.result}"><div class="preview-info"><button class="preview-remove" onclick="removeImgFile(${i})" title="Remove">×</button><div class="preview-name">${f.name}</div><div class="preview-size">${formatBytes(f.size)}</div></div>`;
            grid.appendChild(card);
        }; reader.readAsDataURL(f);
    });
    document.getElementById('imgConvertBtn').disabled = false;
    document.getElementById('imgResultCard').style.display = 'none';
}

function removeImgFile(i) { imgFiles.splice(i, 1); handleImageFiles(imgFiles.length ? imgFiles : []); }

async function convertImages() {
    if (!imgFiles.length) return;
    const btn = document.getElementById('imgConvertBtn');
    btn.disabled = true; btn.innerHTML = '<span class="loading-spinner"></span> Converting…';
    const fmt = document.getElementById('imgOutputFormat').value;
    const quality = parseInt(document.getElementById('imgQuality').value) / 100;
    const ext = getExt(fmt);
    const prog = document.getElementById('imgProgress');
    const fill = document.getElementById('imgProgressFill');
    prog.style.display = 'block'; fill.style.width = '0%';
    imgResults = [];
    const list = document.getElementById('imgResultList'); list.innerHTML = '';

    for (let i = 0; i < imgFiles.length; i++) {
        fill.style.width = ((i / imgFiles.length) * 100) + '%';
        const dataURL = await fileToDataURL(imgFiles[i]);
        const converted = await convertImage(dataURL, fmt, quality);
        const origName = imgFiles[i].name.replace(/\.[^.]+$/, '') + '.' + ext;
        imgResults.push({ dataURL: converted, name: origName });
        const sizeApprox = Math.round(converted.length * 0.75);
        const item = document.createElement('div'); item.className = 'result-item';
        item.innerHTML = `<img class="result-thumb" src="${converted}"><div class="result-info"><div class="result-name">${origName}</div><div class="result-meta">~${formatBytes(sizeApprox)} · ${ext.toUpperCase()}</div></div><a class="dl-btn" href="${converted}" download="${origName}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M5 8l3 3 3-3"/><path d="M3 14h10"/></svg>Download</a>`;
        list.appendChild(item);
    }

    fill.style.width = '100%';
    setTimeout(() => { prog.style.display = 'none'; }, 500);
    document.getElementById('imgResultCard').style.display = 'block';
    btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8a7 7 0 1 0 14 0"/><path d="M12 4l3 3-3 3"/></svg> Convert Images';
    showToast(`${imgFiles.length} image(s) converted! ✓`);
}

function fileToDataURL(file) { return new Promise(res => { const r = new FileReader(); r.onload = e => res(e.target.result); r.readAsDataURL(file); }); }

function convertImage(dataURL, fmt, quality) {
    return new Promise(res => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            if (fmt === 'image/jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
            ctx.drawImage(img, 0, 0);
            res(canvas.toDataURL(fmt, quality));
        }; img.src = dataURL;
    });
}

function downloadAllImages() {
    imgResults.forEach((r, i) => { setTimeout(() => triggerDownload(r.dataURL, r.name), i * 200); });
}

/* ═══════════════════════════════════
   PDF TO IMAGE
═══════════════════════════════════ */
let pdfDoc = null;
let pdfImageResults = [];

function handlePDFFile(file) {
    if (!file || file.type !== 'application/pdf') { showToast('Please upload a valid PDF file.'); return; }
    const info = document.getElementById('pdfFileInfo');
    document.getElementById('pdfFileName').textContent = file.name;
    document.getElementById('pdfFileMeta').textContent = formatBytes(file.size) + ' · Loading…';
    info.style.display = 'block';
    const reader = new FileReader();
    reader.onload = async e => {
        const arr = new Uint8Array(e.target.result);
        try {
            pdfDoc = await pdfjsLib.getDocument({ data: arr }).promise;
            document.getElementById('pdfFileMeta').textContent = formatBytes(file.size) + ' · ' + pdfDoc.numPages + ' page(s)';
            document.getElementById('pdfConvertBtn').disabled = false;
            document.getElementById('pdfResultCard').style.display = 'none';
        } catch (err) { showToast('Could not read PDF. Try another file.'); }
    };
    reader.readAsArrayBuffer(file);
}

async function convertPDFToImages() {
    if (!pdfDoc) return;
    const btn = document.getElementById('pdfConvertBtn');
    btn.disabled = true; btn.innerHTML = '<span class="loading-spinner"></span> Converting…';
    const fmt = document.getElementById('pdfOutputFmt').value;
    const scale = parseInt(document.getElementById('pdfQuality').value) / 72;
    const ext = getExt(fmt);
    const prog = document.getElementById('pdfProgress');
    const fill = document.getElementById('pdfProgressFill');
    prog.style.display = 'block'; fill.style.width = '0%';
    pdfImageResults = [];
    const list = document.getElementById('pdfResultList'); list.innerHTML = '';
    const total = pdfDoc.numPages;

    for (let i = 1; i <= total; i++) {
        fill.style.width = ((i / total) * 100) + '%';
        const page = await pdfDoc.getPage(i);
        const vp = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width; canvas.height = vp.height;
        const ctx = canvas.getContext('2d');
        if (fmt === 'image/jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        const dataURL = canvas.toDataURL(fmt, 0.92);
        const name = `page-${String(i).padStart(3, '0')}.${ext}`;
        pdfImageResults.push({ dataURL, name });
        const item = document.createElement('div'); item.className = 'result-item';
        item.innerHTML = `<img class="result-thumb" src="${dataURL}"><div class="result-info"><div class="result-name">${name}</div><div class="result-meta">Page ${i} of ${total} · ${vp.width}×${vp.height}px</div></div><a class="dl-btn" href="${dataURL}" download="${name}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M5 8l3 3 3-3"/><path d="M3 14h10"/></svg>Download</a>`;
        list.appendChild(item);
    }

    fill.style.width = '100%';
    setTimeout(() => { prog.style.display = 'none'; }, 500);
    document.getElementById('pdfResultTitle').textContent = `✅ ${total} Page(s) Converted`;
    document.getElementById('pdfResultCard').style.display = 'block';
    btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8a7 7 0 1 0 14 0"/><path d="M12 4l3 3-3 3"/></svg> Convert PDF to Images';
    showToast(`${total} page(s) converted! ✓`);
}

function downloadAllPDFImages() {
    pdfImageResults.forEach((r, i) => { setTimeout(() => triggerDownload(r.dataURL, r.name), i * 200); });
}

/* ═══════════════════════════════════
   IMAGE TO PDF
═══════════════════════════════════ */
let i2pFiles = [];

function handleI2PFiles(files) {
    i2pFiles = [...files].filter(f => f.type.startsWith('image/'));
    if (!i2pFiles.length) { showToast('Please upload valid image files.'); return; }
    const grid = document.getElementById('i2pPreviewGrid'); grid.innerHTML = '';
    i2pFiles.forEach((f, i) => {
        const reader = new FileReader();
        reader.onload = e => {
            const card = document.createElement('div'); card.className = 'preview-card';
            card.innerHTML = `<img class="preview-thumb" src="${e.target.result}"><div class="preview-info"><button class="preview-remove" onclick="i2pFiles.splice(${i},1);handleI2PFiles(i2pFiles)" title="Remove">×</button><div class="preview-name">Page ${i + 1}: ${f.name}</div><div class="preview-size">${formatBytes(f.size)}</div></div>`;
            grid.appendChild(card);
        }; reader.readAsDataURL(f);
    });
    document.getElementById('i2pConvertBtn').disabled = false;
    document.getElementById('i2pResultCard').style.display = 'none';
}

async function convertImagesToPDF() {
    if (!i2pFiles.length) return;
    const btn = document.getElementById('i2pConvertBtn');
    btn.disabled = true; btn.innerHTML = '<span class="loading-spinner"></span> Creating PDF…';
    const pageSize = document.getElementById('pdfPageSize').value;
    const orientation = document.getElementById('pdfOrientation').value;
    const prog = document.getElementById('i2pProgress');
    const fill = document.getElementById('i2pProgressFill');
    prog.style.display = 'block'; fill.style.width = '0%';

    try {
        const { jsPDF } = window.jspdf;
        let pdf = null;

        for (let i = 0; i < i2pFiles.length; i++) {
            fill.style.width = ((i / i2pFiles.length) * 100) + '%';
            const dataURL = await fileToDataURL(i2pFiles[i]);
            const imgProps = await getImageDimensions(dataURL);

            if (pageSize === 'fit') {
                const pxToPt = 0.75;
                const wPt = imgProps.w * pxToPt;
                const hPt = imgProps.h * pxToPt;
                if (!pdf) { pdf = new jsPDF({ orientation: wPt > hPt ? 'l' : 'p', unit: 'pt', format: [wPt, hPt] }); }
                else { pdf.addPage([wPt, hPt], wPt > hPt ? 'l' : 'p'); }
                pdf.addImage(dataURL, 'JPEG', 0, 0, wPt, hPt);
            } else {
                const fmtMap = { a4: [210, 297], letter: [215.9, 279.4], a3: [297, 420] };
                const dims = fmtMap[pageSize] || [210, 297];
                if (!pdf) { pdf = new jsPDF({ orientation, unit: 'mm', format: pageSize }); }
                else pdf.addPage(pageSize, orientation);
                const pw = orientation === 'portrait' ? dims[0] : dims[1];
                const ph = orientation === 'portrait' ? dims[1] : dims[0];
                const ar = imgProps.w / imgProps.h;
                let iw = pw, ih = pw / ar;
                if (ih > ph) { ih = ph; iw = ph * ar; }
                const x = (pw - iw) / 2, y = (ph - ih) / 2;
                pdf.addImage(dataURL, 'JPEG', x, y, iw, ih);
            }
        }

        fill.style.width = '100%';
        const pdfBlob = pdf.output('blob');
        const pdfURL = URL.createObjectURL(pdfBlob);
        const fname = `textaura-${i2pFiles.length}pages.pdf`;

        document.getElementById('i2pResultItem').innerHTML = `<div class="result-item"><div class="preview-thumb-pdf">📄</div><div class="result-info"><div class="result-name">${fname}</div><div class="result-meta">${i2pFiles.length} page(s) · ${formatBytes(pdfBlob.size)}</div></div><a class="dl-btn" href="${pdfURL}" download="${fname}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M5 8l3 3 3-3"/><path d="M3 14h10"/></svg>Download PDF</a></div>`;
        document.getElementById('i2pResultCard').style.display = 'block';
        setTimeout(() => { prog.style.display = 'none'; }, 400);
        showToast('PDF created! ✓');
    } catch (err) { showToast('Error creating PDF. Try again.'); console.error(err); }

    btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8a7 7 0 1 0 14 0"/><path d="M12 4l3 3-3 3"/></svg> Create PDF';
}

function getImageDimensions(dataURL) {
    return new Promise(res => { const img = new Image(); img.onload = () => res({ w: img.naturalWidth, h: img.naturalHeight }); img.src = dataURL; });
}

/* ═══════════════════════════════════
   RESIZE IMAGE
═══════════════════════════════════ */
let resizeFile = null;
let origW = 0, origH = 0;

function handleResizeFile(file) {
    if (!file || !file.type.startsWith('image/')) { showToast('Please upload a valid image.'); return; }
    resizeFile = file;
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            origW = img.naturalWidth; origH = img.naturalHeight;
            document.getElementById('resizeW').value = origW;
            document.getElementById('resizeH').value = origH;
            document.getElementById('resizeOrigInfo').style.display = 'block';
            document.getElementById('resizeOrigInfo').innerHTML = `Original: <strong style="color:var(--primary);font-family:'Fira Code',monospace">${origW}×${origH}px</strong> · ${formatBytes(file.size)}`;
            document.getElementById('resizeConvertBtn').disabled = false;
            document.getElementById('resizeResultCard').style.display = 'none';
        }; img.src = e.target.result;
    }; reader.readAsDataURL(file);
}

/* Keep aspect ratio */
document.addEventListener('DOMContentLoaded', () => {
    const wInp = document.getElementById('resizeW');
    const hInp = document.getElementById('resizeH');
    if (wInp && hInp) {
        wInp.addEventListener('input', () => { if (document.getElementById('keepAspect').checked && origW && origH) { hInp.value = Math.round(parseInt(wInp.value || 1) * (origH / origW)); } });
        hInp.addEventListener('input', () => { if (document.getElementById('keepAspect').checked && origW && origH) { wInp.value = Math.round(parseInt(hInp.value || 1) * (origW / origH)); } });
    }
});

function setResize(w, h) {
    document.getElementById('resizeW').value = w;
    document.getElementById('resizeH').value = h;
}

async function resizeImage() {
    if (!resizeFile) return;
    const w = parseInt(document.getElementById('resizeW').value) || origW;
    const h = parseInt(document.getElementById('resizeH').value) || origH;
    const fmt = document.getElementById('resizeFormat').value;
    const quality = parseInt(document.getElementById('resizeQuality').value) / 100;
    const ext = getExt(fmt);
    const btn = document.getElementById('resizeConvertBtn');
    btn.disabled = true; btn.innerHTML = '<span class="loading-spinner"></span> Resizing…';

    const dataURL = await fileToDataURL(resizeFile);
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (fmt === 'image/jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h); }
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, w, h);
        const result = canvas.toDataURL(fmt, quality);
        const fname = resizeFile.name.replace(/\.[^.]+$/, `_${w}x${h}.${ext}`);
        const sizeApprox = Math.round(result.length * 0.75);
        document.getElementById('resizeResultItem').innerHTML = `<div class="result-item"><img class="result-thumb" src="${result}"><div class="result-info"><div class="result-name">${fname}</div><div class="result-meta">${w}×${h}px · ~${formatBytes(sizeApprox)} · ${ext.toUpperCase()}</div></div><a class="dl-btn" href="${result}" download="${fname}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M5 8l3 3 3-3"/><path d="M3 14h10"/></svg>Download</a></div>`;
        document.getElementById('resizeResultCard').style.display = 'block';
        showToast('Image resized! ✓');
        btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8a7 7 0 1 0 14 0"/><path d="M12 4l3 3-3 3"/></svg> Resize & Download';
    }; img.src = dataURL;
}
