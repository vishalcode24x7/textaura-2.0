
let history = [];
let lastShort = '';

async function shortenURL() {
    const url = document.getElementById('urlInput').value.trim();
    const err = document.getElementById('errorMsg');
    err.style.display = 'none';
    if (!url) { err.textContent = 'Please enter a URL.'; err.style.display = 'block'; return; }
    if (!/^https?:\/\//i.test(url)) { err.textContent = 'Please enter a valid URL starting with http:// or https://'; err.style.display = 'block'; return; }
    const btn = document.getElementById('shortenBtn');
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Shortening…';
    try {
        const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error('API error');
        const short = await res.text();
        lastShort = short.trim();
        document.getElementById('resultUrl').textContent = lastShort;
        document.getElementById('resultBox').style.display = 'block';
        // Add to history
        history.unshift({ orig: url, short: lastShort });
        if (history.length > 10) history.pop();
        renderHistory();
        showToast('URL shortened!');
    } catch (e) {
        err.textContent = 'Failed to shorten URL. Please try again.'; err.style.display = 'block';
    } finally { btn.disabled = false; btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" transform="scale(0.65) translate(2,2)"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" transform="scale(0.65) translate(2,2)"/></svg> Shorten'; }
}
function copyShort() { navigator.clipboard.writeText(lastShort).then(() => showToast('Copied!')); }
function shareWA() { window.open(`https://wa.me/?text=${encodeURIComponent('Check this out: ' + lastShort)}`); }
function openShort() { window.open(lastShort, '_blank'); }
function renderHistory() {
    if (!history.length) { document.getElementById('histCard').style.display = 'none'; return; }
    document.getElementById('histCard').style.display = 'block';
    document.getElementById('histList').innerHTML = history.map(h => `
    <div class="hist-item">
      <span class="hist-orig" title="${h.orig}">${h.orig}</span>
      <span class="hist-short">${h.short}</span>
      <button class="hist-copy" onclick="navigator.clipboard.writeText('${h.short}').then(()=>showToast('Copied!'))">Copy</button>
    </div>`).join('');
}
function clearHistory() {
    history = []; renderHistory();
}
