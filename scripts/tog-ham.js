/* ── THEME ── */
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    document.getElementById('toggleThumb').textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('textaura-theme', isDark ? 'dark' : 'light');
}
(function () {
    const s = localStorage.getItem('textaura-theme');
    const p = window.matchMedia('(prefers-color-scheme:dark)').matches;
    if (s === 'dark' || (s === null && p)) {
        document.documentElement.classList.add('dark');
        document.addEventListener('DOMContentLoaded', () => {
            const t = document.getElementById('toggleThumb');
            if (t) t.textContent = '🌙';
        });
    }
})();

/* ── MOBILE DRAWER ── */
const hamburger = document.querySelector('.hamburger');
const drawer = document.getElementById('mobileDrawer');
function toggleDrawer() { drawer.classList.toggle('open'); }
document.addEventListener('click', e => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target))
        drawer.classList.remove('open');
});

/* ── TOAST ── */
let toastTimer;
function showToast(msg) {
    document.getElementById('toastMsg').textContent = msg;
    const t = document.getElementById('toast');
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}