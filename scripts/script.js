const bubbleMap = {
    a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ',
    h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ',
    o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ',
    v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
    A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ',
    H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ',
    O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ',
    V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
    '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

const squareMap = {
    A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵',
    G: '🄶', H: '🄷', I: '🄸', J: '🄹', K: '🄺', L: '🄻',
    M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
    S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇',
    Y: '🅈', Z: '🅉',
    '0': '🄌', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
    '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
};

const STYLES = [
    {
        n: "Bold", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97));
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48));
            return c;
        })
    },

    {
        n: "Italic", f: t => t.replace(/[A-Za-z]/g, c => {
            if (c === 'h') return 'ℎ';
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97));
            return c;
        })
    },

    {
        n: "BoldItalic", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D468 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D482 + (code - 97));
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48));
            return c;
        })
    },

    {
        n: "Script", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'h': 'ℎ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒' };
            if (patches[c]) return patches[c];
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D49C + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4B6 + (code - 97));
            return c;
        })
    },

    {
        n: "Fraktur", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            if (patches[c]) return patches[c];
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D504 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D51E + (code - 97));
            return c;
        })
    },

    {
        n: "BoldFraktur", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D56C + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D586 + (code - 97));
            return c;
        })
    },

    {
        n: "BoldScript", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D4D0 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4EA + (code - 97));
            return c;
        })
    },

    {
        n: "BlackBulletify", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const isUpper = c >= 'A' && c <= 'Z';
            const base = isUpper ? 0x1D400 : 0x1D41A;
            return '•' + String.fromCodePoint(base + (code - (isUpper ? 65 : 97))) + '•';
        })
    },

    {
        n: "DoubleStruck", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = { 'C': 'ℂ', 'H': 'ℍ', 'N': 'ℕ', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'Z': 'ℤ' };
            const code = c.charCodeAt(0);
            if (patches[c]) return patches[c];
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D538 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D552 + (code - 97));
            if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7D8 + (code - 48));
            return c;
        })
    },

    { n: "Wired", f: t => t.split('').map(c => c + '\u0336').join('') },

    { n: "Bubble", f: t => t.split('').map(c => bubbleMap[c] || c).join('') },

    { n: "Square", f: t => t.split('').map(c => squareMap[c.toUpperCase()] || c).join('') },

    {
        n: "MonoSafe", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D670 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D68A + (code - 97));
            if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7F6 + (code - 48));
            return c;
        })
    },

    {
        n: "SquaredDod", f: t => t.replace(/[A-Za-z]/g, c => {
            const patches = {
                'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
                'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
                'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩'
            };
            return patches[c.toUpperCase()] || c;
        })
    },

    {
        n: "TinyFont", f: t => t.replace(/[a-zA-Z0-9]/g, c => {
            const tiny = {
                a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ᶦ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ',
                n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ᑫ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
                A: 'ᴬ', B: 'ᴮ', C: 'ᶜ', D: 'ᴰ', E: 'ᴱ', F: 'ᶠ', G: 'ᴳ', H: 'ᴴ', I: 'ᴵ', J: 'ᴶ', K: 'ᴷ', L: 'ᴸ', M: 'ᴹ',
                N: 'ᴺ', O: 'ᴼ', P: 'ᴾ', Q: 'ᑫ', R: 'ᴿ', S: 'ˢ', T: 'ᵀ', U: 'ᵁ', V: 'ⱽ', W: 'ᵂ', X: 'ˣ', Y: 'ʸ', Z: 'ᶻ',
                '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
            };
            return tiny[c] || c;
        })
    },

    {
        n: "Symbol", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = {
                'A': '∆', 'B': 'β', 'C': '©', 'D': 'ↄ', 'E': '∑', 'F': 'ϝ', 'G': 'ɢ', 'H': '♓', 'I': 'ℹ', 'J': 'Ɉ',
                'K': 'Ҝ', 'L': 'Ↄ', 'M': '♏', 'N': '₪', 'O': '⊙', 'P': '¶', 'Q': 'ℚ', 'R': '®', 'S': '§', 'T': '†',
                'U': '∪', 'V': '√', 'W': 'ω', 'X': '✕', 'Y': '¥', 'Z': 'ℤ',
                '0': '⊘', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
            };
            return patches[c.toUpperCase()] || c;
        })
    },

    {
        n: "FancyFont", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            const patches = {
                'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒',
                '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
            };
            if (patches[c]) return patches[c];
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D4D0 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4EA + (code - 97));
            return c;
        })
    },

    {
        n: "SansSerif", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D5A0 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D5BA + (code - 97));
            if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7E2 + (code - 48));
            return c;
        })
    },

    { n: "VerticalText", f: t => t.split('').join('\n') },

    {
        n: "SansSerifBold", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D5D4 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D5EE + (code - 97));
            if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7EC + (code - 48));
            return c;
        })
    },

    {
        n: "SansSerifItalic", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D608 + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D622 + (code - 97));
            return c;
        })
    },

    {
        n: "SansSerifBoldItalic", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D63C + (code - 65));
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D656 + (code - 97));
            return c;
        })
    },

    {
        n: "Currency", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = {
                'A': '₳', 'B': '฿', 'C': '¢', 'D': '₫', 'E': '€', 'F': '₣', 'G': '₲', 'H': '₴', 'I': 'ł', 'J': 'J',
                'K': '₭', 'L': '£', 'M': '₥', 'N': '₦', 'O': '¤', 'P': '₱', 'Q': 'Q', 'R': '₹', 'S': '$', 'T': '₮',
                'U': 'U', 'V': 'V', 'W': '₩', 'X': 'X', 'Y': '¥', 'Z': 'Z',
                '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
            };
            return patches[c.toUpperCase()] || c;
        })
    },

    {
        n: "Fantasy", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = {
                'A': 'ᚨ', 'B': 'ℬ', 'C': 'ᚲ', 'D': 'ᛞ', 'E': 'ℰ', 'F': 'ᚠ', 'G': 'ᚷ', 'H': 'ℋ', 'I': 'ℑ', 'J': 'ᛃ',
                'K': 'ᚴ', 'L': 'ℒ', 'M': 'ᛗ', 'N': 'ᚾ', 'O': 'ᛟ', 'P': '℘', 'Q': 'ℚ', 'R': 'ᚱ', 'S': 'ᛋ', 'T': 'ᛏ',
                'U': 'ᚢ', 'V': 'ᚡ', 'W': 'ᚹ', 'X': 'ᛪ', 'Y': 'ᛦ', 'Z': 'ℨ',
                'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
                'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
                'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
                '0': '⓿', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
            };
            return patches[c] || c;
        })
    },

    {
        n: "zalgoText", f: t => {
            const zalgo = {
                up: ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f'],
                down: ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'],
                mid: ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489']
            };
            const rand = arr => arr[Math.floor(Math.random() * arr.length)];
            const repeat = (arr, count) => Array.from({ length: count }, () => rand(arr)).join('');
            return t.split('').map(c => {
                if (c === ' ') return c;
                return c + repeat(zalgo.up, Math.floor(Math.random() * 3)) + repeat(zalgo.mid, Math.floor(Math.random() * 2)) + repeat(zalgo.down, Math.floor(Math.random() * 3));
            }).join('');
        }
    },

    { n: "Fullwidth", f: t => t.replace(/[A-Za-z0-9]/g, c => String.fromCodePoint(c.charCodeAt(0) + 0xFF00 - 0x20)) },

    {
        n: "Superscript", f: t => t.replace(/[a-z0-9]/g, c => {
            const supers = {
                a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ',
                n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ᑫ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
                '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
            };
            return supers[c] || c;
        })
    },

    {
        n: "cursiveSymbols", f: t => {
            const cursive = {
                a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂',
                n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
                A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹', G: '𝒢', H: '𝐻', I: '𝐼', J: '𝒥', K: '𝒦', L: '𝐿', M: '𝑀',
                N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: '𝑅', S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
                '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
            };
            const symbols = ['☯︎', '⚡︎', '✞', '★', '♛', '☠', '❖', '☾', '✧', '♨'];
            return t.split('').map(c => (cursive[c] || c) + (Math.random() < 0.3 ? symbols[Math.floor(Math.random() * symbols.length)] : '')).join('');
        }
    },

    { n: "InkSplatter", f: t => t.replace(/./g, c => c + '\u0489') },

    { n: "Inverted", f: t => [...t].reverse().join('') },

    { n: "slashyFont", f: t => t.split('').map(c => `/${c}/`).join('') },

    {
        n: "upsideDown", f: t => {
            const flipMap = {
                a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'ʃ', m: 'ɯ',
                n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
                A: '∀', B: '𐐒', C: 'Ɔ', D: '◖', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ', K: '⋊', L: '⅂', M: 'W',
                N: 'N', O: 'O', P: 'Ԁ', Q: 'Ό', R: 'ᴚ', S: 'S', T: '⊥', U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z'
            };
            return t.split('').map(c => flipMap[c] || c).reverse().join('');
        }
    },

    { n: "happyFont", f: t => t.split('').map(c => c + '\u0306' + '\u0308').join('') },

    { n: "sadFont", f: t => t.split('').map(c => c + '\u0311' + '\u0308').join('') },

    {
        n: "BoldUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D400 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D41A + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0332';
        })
    },

    {
        n: "ItalicUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return r + '\u0332';
        })
    },

    {
        n: "GothicText", f: t => t.replace(/[A-Za-z]/g, c => {
            const gothic = {
                A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: 'ℌ', I: 'ℑ', J: '𝔍', K: '𝔎', L: '𝔏',
                M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗', U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ',
                a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩',
                m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
            };
            return gothic[c] || c;
        })
    },

    {
        n: "BoldItalicUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D468 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D482 + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0332';
        })
    },

    {
        n: "BoldDoubleUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D400 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D41A + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0333';
        })
    },

    {
        n: "ItalicOverlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return r + '\u0305';
        })
    },

    {
        n: "BoldOverlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D400 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D41A + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0305';
        })
    },

    {
        n: "BoldStrikethrough", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D400 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D41A + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0336';
        })
    },

    {
        n: "ItalicStrikethrough", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return r + '\u0336';
        })
    },

    {
        n: "BoldItalicStrikethrough", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c;
            if (c >= 'A' && c <= 'Z') r = String.fromCodePoint(0x1D468 + (code - 65));
            else if (c >= 'a' && c <= 'z') r = String.fromCodePoint(0x1D482 + (code - 97));
            else if (code >= 48 && code <= 57) r = String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0336';
        })
    },

    {
        n: "ScriptUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒', 'h': 'ℎ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D49C + (code - 65)) : String.fromCodePoint(0x1D4B6 + (code - 97)));
            return r + '\u0332';
        })
    },

    {
        n: "ScriptOverlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒', 'h': 'ℎ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D49C + (code - 65)) : String.fromCodePoint(0x1D4B6 + (code - 97)));
            return r + '\u0305';
        })
    },

    {
        n: "FrakturUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D504 + (code - 65)) : String.fromCodePoint(0x1D51E + (code - 97)));
            return r + '\u0332';
        })
    },

    {
        n: "FrakturStrikethrough", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D504 + (code - 65)) : String.fromCodePoint(0x1D51E + (code - 97)));
            return r + '\u0336';
        })
    },

    {
        n: "GreekStyle", f: t => t.replace(/[A-Za-z]/g, c => {
            const greek = {
                A: 'Α', B: 'Β', C: 'Ϲ', D: 'Δ', E: 'Ε', F: 'Ϝ', G: 'Γ', H: 'Η', I: 'Ι', J: 'Ј', K: 'Κ', L: 'Λ',
                M: 'Μ', N: 'Ν', O: 'Ο', P: 'Ρ', Q: 'Ϙ', R: 'Ʀ', S: 'Σ', T: 'Τ', U: 'Υ', V: 'Ѵ', W: 'Ω', X: 'Χ', Y: 'Υ', Z: 'Ζ',
                a: 'α', b: 'β', c: 'ς', d: 'δ', e: 'ε', f: 'ϝ', g: 'γ', h: 'η', i: 'ι', j: 'ј', k: 'κ', l: 'λ',
                m: 'μ', n: 'ν', o: 'ο', p: 'ρ', q: 'ϙ', r: 'ʀ', s: 'σ', t: 'τ', u: 'υ', v: 'ν', w: 'ω', x: 'χ', y: 'ψ', z: 'ζ'
            };
            return greek[c] || c;
        })
    },

    {
        n: "BoldFrakturUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D56C + (code - 65)) : String.fromCodePoint(0x1D586 + (code - 97));
            return r + '\u0332';
        })
    },

    {
        n: "BoldScriptUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D4D0 + (code - 65)) : String.fromCodePoint(0x1D4EA + (code - 97));
            return r + '\u0332';
        })
    },

    {
        n: "DoubleCircled", f: t => t.replace(/[1-9]/g, c => {
            const dblCirc = { '1': '⓵', '2': '⓶', '3': '⓷', '4': '⓸', '5': '⓹', '6': '⓺', '7': '⓻', '8': '⓼', '9': '⓽', '0': '⓪' };
            return dblCirc[c] || c;
        })
    },

    {
        n: "DoubleStruckUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = { 'C': 'ℂ', 'H': 'ℍ', 'N': 'ℕ', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'Z': 'ℤ' };
            const code = c.charCodeAt(0);
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D538 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D552 + (code - 97)) : String.fromCodePoint(0x1D7D8 + (code - 48)));
            return r + '\u0332';
        })
    },

    {
        n: "MonoUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D670 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D68A + (code - 97)) : String.fromCodePoint(0x1D7F6 + (code - 48));
            return r + '\u0332';
        })
    },

    {
        n: "SansSerifBoldUnderlined", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D5D4 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D5EE + (code - 97)) : String.fromCodePoint(0x1D7EC + (code - 48));
            return r + '\u0332';
        })
    },

    {
        n: "SansSerifItalicUnderlined", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D608 + (code - 65)) : String.fromCodePoint(0x1D622 + (code - 97));
            return r + '\u0332';
        })
    },

    {
        n: "BoldWithDots", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0307';
        })
    },

    {
        n: "ItalicWithDots", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return r + '\u0307';
        })
    },

    {
        n: "BoldWithRing", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u030A';
        })
    },

    {
        n: "ItalicWithTilde", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return r + '\u0303';
        })
    },

    {
        n: "BoldWithTilde", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0303';
        })
    },

    {
        n: "ScriptWithDots", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒', 'h': 'ℎ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D49C + (code - 65)) : String.fromCodePoint(0x1D4B6 + (code - 97)));
            return r + '\u0307';
        })
    },

    {
        n: "FrakturWithDots", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D504 + (code - 65)) : String.fromCodePoint(0x1D51E + (code - 97)));
            return r + '\u0307';
        })
    },

    {
        n: "BoldItalicWithDots", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D468 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D482 + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0307';
        })
    },

    { n: "WavyText", f: t => t.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('') },

    { n: "SentenceCase", f: t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() },

    {
        n: "BoldItalicWithTilde", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D468 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D482 + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return r + '\u0303';
        })
    },

    {
        n: "BoldWideSpaced", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65)) + '　';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97)) + '　';
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)) + '　';
            return c + '　';
        }).trim()
    },

    {
        n: "ItalicWideSpaced", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c === 'h') return 'ℎ' + '　';
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65)) + '　';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97)) + '　';
            return c + '　';
        }).trim()
    },

    {
        n: "BoldSpaced", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65)) + ' ';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97)) + ' ';
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)) + ' ';
            return c + ' ';
        }).trim()
    },

    {
        n: "ItalicSpaced", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c === 'h') return 'ℎ ';
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65)) + ' ';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97)) + ' ';
            return c + ' ';
        }).trim()
    },

    {
        n: "ScriptSpaced", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒', 'h': 'ℎ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D49C + (code - 65)) : String.fromCodePoint(0x1D4B6 + (code - 97)));
            return r + ' ';
        }).trim()
    },

    {
        n: "FrakturSpaced", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D504 + (code - 65)) : String.fromCodePoint(0x1D51E + (code - 97)));
            return r + ' ';
        }).trim()
    },

    {
        n: "BoldDashed", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65)) + '-';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97)) + '-';
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)) + '-';
            return c + '-';
        }).slice(0, -1)
    },

    {
        n: "ItalicDashed", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c === 'h') return 'ℎ-';
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65)) + '-';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97)) + '-';
            return c + '-';
        }).slice(0, -1)
    },

    {
        n: "BoldDotted", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65)) + '·';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97)) + '·';
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)) + '·';
            return c + '·';
        }).slice(0, -1)
    },

    {
        n: "ItalicDotted", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            if (c === 'h') return 'ℎ·';
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65)) + '·';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97)) + '·';
            return c + '·';
        }).slice(0, -1)
    },

    {
        n: "BoldSlashed", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + (code - 65)) + '/';
            if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + (code - 97)) + '/';
            if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)) + '/';
            return c + '/';
        }).slice(0, -1)
    },

    {
        n: "BoldBoxed", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return '[' + r + ']';
        })
    },

    {
        n: "ItalicBoxed", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return '[' + r + ']';
        })
    },

    {
        n: "BoldParenthesized", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return '(' + r + ')';
        })
    },

    {
        n: "ItalicParenthesized", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            let r = c === 'h' ? 'ℎ' : c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D434 + (code - 65)) : String.fromCodePoint(0x1D44E + (code - 97));
            return '(' + r + ')';
        })
    },

    {
        n: "BoldAngled", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D400 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D41A + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return '<' + r + '>';
        })
    },

    {
        n: "ScriptBoxed", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ', 'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒', 'h': 'ℎ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D49C + (code - 65)) : String.fromCodePoint(0x1D4B6 + (code - 97)));
            return '[' + r + ']';
        })
    },

    {
        n: "FrakturBoxed", f: t => t.replace(/[A-Za-z]/g, c => {
            const code = c.charCodeAt(0);
            const patches = { 'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ' };
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D504 + (code - 65)) : String.fromCodePoint(0x1D51E + (code - 97)));
            return '[' + r + ']';
        })
    },

    {
        n: "BoldItalicBoxed", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D468 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D482 + (code - 97)) : String.fromCodePoint(0x1D7CE + (code - 48));
            return '[' + r + ']';
        })
    },

    {
        n: "MonoSpaced", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D670 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D68A + (code - 97)) : String.fromCodePoint(0x1D7F6 + (code - 48));
            return r + ' ';
        }).trim()
    },

    {
        n: "MonoDashed", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const code = c.charCodeAt(0);
            let r = c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D670 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D68A + (code - 97)) : String.fromCodePoint(0x1D7F6 + (code - 48));
            return r + '-';
        }).slice(0, -1)
    },

    {
        n: "DoubleStruckSpaced", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = { 'C': 'ℂ', 'H': 'ℍ', 'N': 'ℕ', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'Z': 'ℤ' };
            const code = c.charCodeAt(0);
            let r = patches[c] || (c >= 'A' && c <= 'Z' ? String.fromCodePoint(0x1D538 + (code - 65)) : c >= 'a' && c <= 'z' ? String.fromCodePoint(0x1D552 + (code - 97)) : String.fromCodePoint(0x1D7D8 + (code - 48)));
            return r + ' ';
        }).trim()
    },

    {
        n: "CircledNegative", f: t => t.replace(/[A-Za-z0-9]/g, c => {
            const patches = {
                '0': '⓿', '1': '❶', '2': '❷', '3': '❸', '4': '❹', '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾',
                A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘', J: '🅙', K: '🅚', L: '🅛',
                M: '🅜', N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩'
            };
            return patches[c.toUpperCase()] || c;
        })
    },

    { n: "ParenthesizedLatin", f: t => t.replace(/[a-z]/g, c => String.fromCodePoint(0x249C + (c.charCodeAt(0) - 97))) },

    { n: "RegionalIndicator", f: t => t.replace(/[A-Za-z]/g, c => String.fromCodePoint(0x1F1E6 + (c.toUpperCase().charCodeAt(0) - 65))) },

    { n: "FireFont", f: t => t.split('').map(c => '🔥' + c).join('') },

    {
        n: "cuteFont", f: t => {
            const emojis = ['💖', '🌸', '🐾', '🍭', '✨', '🧸'];
            return t.split('').map(c => c + emojis[Math.floor(Math.random() * emojis.length)]).join('');
        }
    },

    { n: "sparkleFont", f: t => t.split('').map(c => c + '✨').join('') },

    {
        n: "darkFont", f: t => {
            const symbols = ['☠️', '🕷️', '🩸', '🪦', '⚰️', '🧛'];
            return t.split('').map(c => symbols[Math.floor(Math.random() * symbols.length)] + c).join('');
        }
    },
];


const CC = ['cc1', 'cc2', 'cc3', 'cc4', 'cc5', 'cc6'];
function clearAll() {
    document.getElementById('inputText').value = '';
    updateAll();
}

function buildGrid() {
    const g = document.getElementById('stylesGrid');
    STYLES.forEach((s, i) => {
        const cc = CC[i % CC.length];
        const d = document.createElement('div');
        d.className = `style-card ${cc}`; d.setAttribute('role', 'listitem');
        d.innerHTML = `<div class="card-head"><span class="style-tag">${s.n}</span><button class="copy-btn" onclick="doCopy(event,${i})" aria-label="Copy ${s.n}"><svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>Copy</button></div><div class="style-output empty" id="out-${i}"></div>`;
        g.appendChild(d);
    });
}

const DONE_SVG = "✔️";
const COPY_SVG = `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M2 10V2h8"/></svg>`;

function doCopy(e, i) {
    e.stopPropagation();
    const raw = document.getElementById('inputText').value;
    if (!raw.trim()) return;

    const b = e.currentTarget;

    navigator.clipboard.writeText(STYLES[i].f(raw))
        .then(() => {
            b.innerHTML = DONE_SVG + ' Copied';
            b.classList.add('done');

            setTimeout(() => {
                b.innerHTML = COPY_SVG + ' Copy';
                b.classList.remove('done');
            }, 1800);
        })
        .catch(err => {
            console.error("Copy failed: ", err);
            showToast("Copy failed!");
        });
}

function updateAll() {
    const raw = document.getElementById('inputText').value;
    document.getElementById('charCount').textContent = raw.length + ' character' + (raw.length !== 1 ? 's' : '');
    STYLES.forEach((s, i) => {
        const el = document.getElementById('out-' + i);
        if (!raw.trim()) { el.textContent = ''; el.classList.add('empty'); }
        else { el.textContent = s.f(raw); el.classList.remove('empty'); }
    });
}

buildGrid();