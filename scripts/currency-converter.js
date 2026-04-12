
const CURRENCIES = {
    USD: { name: 'US Dollar', flag: '🇺🇸' }, EUR: { name: 'Euro', flag: '🇪🇺' }, GBP: { name: 'British Pound', flag: '🇬🇧' },
    INR: { name: 'Indian Rupee', flag: '🇮🇳' }, JPY: { name: 'Japanese Yen', flag: '🇯🇵' }, AUD: { name: 'Australian Dollar', flag: '🇦🇺' },
    CAD: { name: 'Canadian Dollar', flag: '🇨🇦' }, CHF: { name: 'Swiss Franc', flag: '🇨🇭' }, CNY: { name: 'Chinese Yuan', flag: '🇨🇳' },
    AED: { name: 'UAE Dirham', flag: '🇦🇪' }, SAR: { name: 'Saudi Riyal', flag: '🇸🇦' }, SGD: { name: 'Singapore Dollar', flag: '🇸🇬' },
    HKD: { name: 'Hong Kong Dollar', flag: '🇭🇰' }, NZD: { name: 'New Zealand Dollar', flag: '🇳🇿' }, NOK: { name: 'Norwegian Krone', flag: '🇳🇴' },
    SEK: { name: 'Swedish Krona', flag: '🇸🇪' }, DKK: { name: 'Danish Krone', flag: '🇩🇰' }, MXN: { name: 'Mexican Peso', flag: '🇲🇽' },
    BRL: { name: 'Brazilian Real', flag: '🇧🇷' }, ZAR: { name: 'South African Rand', flag: '🇿🇦' },
    TRY: { name: 'Turkish Lira', flag: '🇹🇷' }, RUB: { name: 'Russian Ruble', flag: '🇷🇺' }, PKR: { name: 'Pakistani Rupee', flag: '🇵🇰' },
    BDT: { name: 'Bangladeshi Taka', flag: '🇧🇩' }, IDR: { name: 'Indonesian Rupiah', flag: '🇮🇩' },
    MYR: { name: 'Malaysian Ringgit', flag: '🇲🇾' }, PHP: { name: 'Philippine Peso', flag: '🇵🇭' }, THB: { name: 'Thai Baht', flag: '🇹🇭' },
    KRW: { name: 'South Korean Won', flag: '🇰🇷' }, TWD: { name: 'Taiwan Dollar', flag: '🇹🇼' },
    QAR: { name: 'Qatari Riyal', flag: '🇶🇦' }, KWD: { name: 'Kuwaiti Dinar', flag: '🇰🇼' },
    OMR: { name: 'Omani Rial', flag: '🇴🇲' }, BHD: { name: 'Bahraini Dinar', flag: '🇧🇭' },
    EGP: { name: 'Egyptian Pound', flag: '🇪🇬' }, NGN: { name: 'Nigerian Naira', flag: '🇳🇬' },
    GHS: { name: 'Ghanaian Cedi', flag: '🇬🇭' }, KES: { name: 'Kenyan Shilling', flag: '🇰🇪' },
    MAD: { name: 'Moroccan Dirham', flag: '🇲🇦' }, ILS: { name: 'Israeli Shekel', flag: '🇮🇱' },
    PLN: { name: 'Polish Zloty', flag: '🇵🇱' }, CZK: { name: 'Czech Koruna', flag: '🇨🇿' }, HUF: { name: 'Hungarian Forint', flag: '🇭🇺' },
    RON: { name: 'Romanian Leu', flag: '🇷🇴' }, BGN: { name: 'Bulgarian Lev', flag: '🇧🇬' },
    HRK: { name: 'Croatian Kuna', flag: '🇭🇷' }, UAH: { name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
};

const POPULAR_PAIRS = [
    { from: 'USD', to: 'INR' }, { from: 'USD', to: 'EUR' }, { from: 'EUR', to: 'INR' },
    { from: 'GBP', to: 'INR' }, { from: 'AED', to: 'INR' }, { from: 'USD', to: 'GBP' },
];
const MULTI_DISPLAY = ['EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'AED', 'CHF', 'CNY', 'SAR', 'SGD', 'MXN'];

let rates = {};
let lastUpdate = '';

/* POPULATE SELECTS */
function populateSelects() {
    ['currFrom', 'currTo'].forEach(id => {
        const sel = document.getElementById(id);
        Object.keys(CURRENCIES).sort().forEach(code => {
            const opt = document.createElement('option');
            opt.value = code; opt.textContent = `${code} — ${CURRENCIES[code].name}`;
            sel.appendChild(opt);
        });
    });
    document.getElementById('currFrom').value = 'USD';
    document.getElementById('currTo').value = 'INR';
}

/* FLAGS */
function updateFlag() {
    const from = document.getElementById('currFrom').value;
    const to = document.getElementById('currTo').value;
    document.getElementById('flagFrom').textContent = CURRENCIES[from]?.flag || '🏳️';
    document.getElementById('flagTo').textContent = CURRENCIES[to]?.flag || '🏳️';
}

/* FETCH RATES */
async function fetchRates() {
    try {
        const r = await fetch('https://open.er-api.com/v6/latest/USD');
        const d = await r.json();
        if (d.result === 'success') {
            rates = d.rates;
            lastUpdate = new Date(d.time_last_update_unix * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
            document.getElementById('rateStatus').textContent = 'Live rates · Updated ' + lastUpdate;
            document.getElementById('updateTime').textContent = 'Updated: ' + lastUpdate;
            convert('from');
            buildPairs();
            buildMultiTable();
        }
    } catch (e) {
        document.getElementById('rateStatus').textContent = 'Using cached rates (offline)';
        /* Fallback static rates */
        rates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.2, JPY: 149.5, AUD: 1.53, CAD: 1.36, CHF: 0.89, CNY: 7.24, AED: 3.67, SAR: 3.75, SGD: 1.34, QAR: 3.64, KWD: 0.31 };
        convert('from'); buildPairs(); buildMultiTable();
    }
}

/* CONVERT */
function convert(dir) {
    if (!Object.keys(rates).length) return;
    const from = document.getElementById('currFrom').value;
    const to = document.getElementById('currTo').value;
    document.getElementById('baseLabel').textContent = from;

    if (dir === 'from') {
        const amt = parseFloat(document.getElementById('amountFrom').value) || 0;
        const fromRate = rates[from] || 1;
        const toRate = rates[to] || 1;
        const result = (amt / fromRate) * toRate;
        document.getElementById('amountTo').value = result.toFixed(4);
        showResult(amt, result, from, to);
    } else {
        const amt = parseFloat(document.getElementById('amountTo').value) || 0;
        const fromRate = rates[from] || 1;
        const toRate = rates[to] || 1;
        const result = (amt / toRate) * fromRate;
        document.getElementById('amountFrom').value = result.toFixed(4);
        showResult(result, amt, from, to);
    }
    updateFlag();
}

function showResult(fromAmt, toAmt, from, to) {
    const d = document.getElementById('resultDisplay');
    d.style.display = 'block';
    const fromRate = rates[from] || 1;
    const toRate = rates[to] || 1;
    const oneUnit = (1 / fromRate) * toRate;
    const inv = (1 / toRate) * fromRate;
    document.getElementById('resultMain').textContent = `${formatNum(fromAmt)} ${from} = ${formatNum(toAmt)} ${to}`;
    document.getElementById('resultRate').innerHTML = `<strong>1 ${from}</strong> = ${formatNum(oneUnit)} ${to} &nbsp;|&nbsp; <strong>1 ${to}</strong> = ${formatNum(inv)} ${from}`;
}

function formatNum(n) {
    if (n >= 1000) return n.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    if (n >= 1) return n.toFixed(4);
    return n.toFixed(6);
}

function setAmount(n) {
    document.getElementById('amountFrom').value = n;
    convert('from');
}

function swapCurrencies() {
    const f = document.getElementById('currFrom').value;
    const t = document.getElementById('currTo').value;
    document.getElementById('currFrom').value = t;
    document.getElementById('currTo').value = f;
    convert('from'); updateFlag();
}

/* POPULAR PAIRS */
function buildPairs() {
    const g = document.getElementById('pairsGrid'); g.innerHTML = '';
    POPULAR_PAIRS.forEach(p => {
        const fromRate = rates[p.from] || 1;
        const toRate = rates[p.to] || 1;
        const r = (1 / fromRate) * toRate;
        const card = document.createElement('div');
        card.className = 'pair-card';
        card.innerHTML = `<div class="pair-from">${CURRENCIES[p.from]?.flag || ''} ${p.from} → ${CURRENCIES[p.to]?.flag || ''} ${p.to}</div><div class="pair-rate">${formatNum(r)}</div><div class="pair-name">1 ${p.from} = ${formatNum(r)} ${p.to}</div>`;
        card.onclick = () => { document.getElementById('currFrom').value = p.from; document.getElementById('currTo').value = p.to; document.getElementById('amountFrom').value = 1; convert('from'); updateFlag(); };
        g.appendChild(card);
    });
}

/* MULTI TABLE */
function buildMultiTable() {
    const from = document.getElementById('currFrom').value;
    const amt = parseFloat(document.getElementById('amountFrom').value) || 1;
    const fromRate = rates[from] || 1;
    const t = document.getElementById('multiTable'); t.innerHTML = '';
    MULTI_DISPLAY.filter(c => c !== from).forEach(code => {
        const toRate = rates[code] || 1;
        const val = (amt / fromRate) * toRate;
        const row = document.createElement('div'); row.className = 'multi-row';
        row.innerHTML = `<div class="multi-left"><span class="multi-flag">${CURRENCIES[code]?.flag || '🏳️'}</span><div><div class="multi-code">${code}</div><div class="multi-name">${CURRENCIES[code]?.name || ''}</div></div></div><div class="multi-val">${formatNum(val)}</div>`;
        t.appendChild(row);
    });
}
populateSelects(); fetchRates();