const SYMBOL_CATS = [
    {
        id: 'stars', name: 'Stars & Sparkles', icon: '★',
        symbols: [
            { s: '★', n: 'Black Star' }, { s: '☆', n: 'White Star' }, { s: '✦', n: 'Four Point Star' }, { s: '✧', n: 'Four Point Outline' }, { s: '✩', n: 'Stress Star' }, { s: '✪', n: 'Circled Star' }, { s: '✫', n: 'Open Centre Star' }, { s: '✬', n: 'Centre Dot Star' }, { s: '✭', n: 'Outlined Black Star' }, { s: '✮', n: 'Heavy Outlined Star' }, { s: '✯', n: 'Pinwheel Star' }, { s: '✰', n: 'Shadowed White Star' }, { s: '✵', n: 'Eight Pointed Star' }, { s: '✶', n: 'Six Pointed Star' }, { s: '✷', n: 'Eight Pointed Pinwheel' }, { s: '✸', n: 'Heavy Eight Pointed' }, { s: '✹', n: 'Twelve Pointed' }, { s: '✺', n: 'Sixteen Pointed' }, { s: '⭐', n: 'Star Emoji' }, { s: '🌟', n: 'Glowing Star' }, { s: '💫', n: 'Dizzy Star' }, { s: '⚝', n: 'Outlined Star' }, { s: '🔯', n: 'Six Pointed Star' }, { s: '✴', n: 'Eight Pointed Black' }, { s: '❇', n: 'Sparkle' }, { s: '❈', n: 'Heavy Sparkle' }, { s: '✳', n: 'Eight Spoked Asterisk' }, { s: '٭', n: 'Arabic Five Star' }, { s: '⁂', n: 'Asterism' }, { s: '※', n: 'Reference Mark' },
        ]
    },
    {
        id: 'hearts', name: 'Hearts & Love', icon: '❤',
        symbols: [
            { s: '❤', n: 'Red Heart' }, { s: '♥', n: 'Heart Suit' }, { s: '♡', n: 'White Heart Suit' }, { s: '❥', n: 'Rotated Heart' }, { s: '❣', n: 'Heart Exclamation' }, { s: '❦', n: 'Floral Heart' }, { s: '❧', n: 'Floral Heart Bullet' }, { s: '💕', n: 'Two Hearts' }, { s: '💗', n: 'Growing Heart' }, { s: '💓', n: 'Beating Heart' }, { s: '💞', n: 'Revolving Hearts' }, { s: '💘', n: 'Heart Arrow' }, { s: '💝', n: 'Heart Ribbon' }, { s: '💖', n: 'Sparkling Heart' }, { s: '💟', n: 'Heart Decoration' }, { s: '🤍', n: 'White Heart' }, { s: '🖤', n: 'Black Heart' }, { s: '💛', n: 'Yellow Heart' }, { s: '💚', n: 'Green Heart' }, { s: '💙', n: 'Blue Heart' }, { s: '💜', n: 'Purple Heart' }, { s: '🧡', n: 'Orange Heart' }, { s: '🤎', n: 'Brown Heart' }, { s: '🤗', n: 'Hugging Face' }, { s: '💌', n: 'Love Letter' }, { s: '💋', n: 'Kiss Mark' }, { s: '😍', n: 'Heart Eyes' }, { s: '😘', n: 'Kissing Heart' }, { s: '❤️‍🔥', n: 'Heart on Fire' }, { s: '💑', n: 'Couple with Heart' },
        ]
    },
    {
        id: 'arrows', name: 'Arrows', icon: '→',
        symbols: [
            { s: '→', n: 'Right Arrow' }, { s: '←', n: 'Left Arrow' }, { s: '↑', n: 'Up Arrow' }, { s: '↓', n: 'Down Arrow' }, { s: '↔', n: 'Left Right Arrow' }, { s: '↕', n: 'Up Down Arrow' }, { s: '↗', n: 'Up Right Arrow' }, { s: '↘', n: 'Down Right Arrow' }, { s: '↙', n: 'Down Left Arrow' }, { s: '↖', n: 'Up Left Arrow' }, { s: '⇒', n: 'Right Double Arrow' }, { s: '⇐', n: 'Left Double Arrow' }, { s: '⇑', n: 'Up Double Arrow' }, { s: '⇓', n: 'Down Double Arrow' }, { s: '⇔', n: 'Left Right Double' }, { s: '⇕', n: 'Up Down Double' }, { s: '➡', n: 'Right Arrow Bold' }, { s: '⬅', n: 'Left Arrow Bold' }, { s: '⬆', n: 'Up Arrow Bold' }, { s: '⬇', n: 'Down Arrow Bold' }, { s: '↩', n: 'Left Hook Arrow' }, { s: '↪', n: 'Right Hook Arrow' }, { s: '↰', n: 'Up Left Arrow' }, { s: '↱', n: 'Up Right Arrow' }, { s: '↲', n: 'Down Left Arrow' }, { s: '↳', n: 'Down Right Arrow' }, { s: '⟶', n: 'Long Right Arrow' }, { s: '⟵', n: 'Long Left Arrow' }, { s: '⟷', n: 'Long Left Right' }, { s: '↻', n: 'Clockwise' }, { s: '↺', n: 'Anticlockwise' }, { s: '➜', n: 'Heavy Right Arrow' }, { s: '➟', n: 'Dashed Right Arrow' }, { s: '➠', n: 'Heavy Dash Right' }, { s: '➤', n: 'Right Arrow Head' }, { s: '➥', n: 'Right Arrow Curving Down' }, { s: '➦', n: 'Right Arrow Curving Up' }, { s: '➧', n: 'Heavy Right Arrow' }, { s: '➨', n: 'Heavy Wide Right' }, { s: '➩', n: 'Large Right Arrow' },
        ]
    },
    {
        id: 'math', name: 'Math & Science', icon: '∞',
        symbols: [
            { s: '∞', n: 'Infinity' }, { s: '≈', n: 'Almost Equal' }, { s: '≠', n: 'Not Equal' }, { s: '≤', n: 'Less or Equal' }, { s: '≥', n: 'Greater or Equal' }, { s: '±', n: 'Plus Minus' }, { s: '×', n: 'Multiplication' }, { s: '÷', n: 'Division' }, { s: '√', n: 'Square Root' }, { s: '∛', n: 'Cube Root' }, { s: '∜', n: 'Fourth Root' }, { s: '∑', n: 'Summation' }, { s: '∏', n: 'N-Ary Product' }, { s: '∫', n: 'Integral' }, { s: '∂', n: 'Partial Diff' }, { s: '∆', n: 'Delta' }, { s: '∇', n: 'Nabla' }, { s: '∈', n: 'Element Of' }, { s: '∉', n: 'Not Element Of' }, { s: '∩', n: 'Intersection' }, { s: '∪', n: 'Union' }, { s: '⊂', n: 'Subset Of' }, { s: '⊃', n: 'Superset Of' }, { s: '⊆', n: 'Subset Or Equal' }, { s: '⊇', n: 'Superset Or Equal' }, { s: '⊕', n: 'Circled Plus' }, { s: '⊗', n: 'Circled Times' }, { s: '⊥', n: 'Perpendicular' }, { s: '∥', n: 'Parallel' }, { s: '∠', n: 'Angle' }, { s: '°', n: 'Degree' }, { s: 'π', n: 'Pi' }, { s: 'α', n: 'Alpha' }, { s: 'β', n: 'Beta' }, { s: 'γ', n: 'Gamma' }, { s: 'δ', n: 'Delta' }, { s: 'ε', n: 'Epsilon' }, { s: 'θ', n: 'Theta' }, { s: 'λ', n: 'Lambda' }, { s: 'μ', n: 'Mu' }, { s: 'σ', n: 'Sigma' }, { s: 'φ', n: 'Phi' }, { s: 'ω', n: 'Omega' }, { s: 'Ω', n: 'Ohm' }, { s: '℃', n: 'Celsius' }, { s: '℉', n: 'Fahrenheit' }, { s: '‰', n: 'Per Mille' }, { s: '‱', n: 'Per Ten Thousand' },
        ]
    },
    {
        id: 'currency', name: 'Currency', icon: '€',
        symbols: [
            { s: '$', n: 'Dollar' }, { s: '€', n: 'Euro' }, { s: '£', n: 'Pound' }, { s: '¥', n: 'Yen/Yuan' }, { s: '₹', n: 'Rupee' }, { s: '₽', n: 'Ruble' }, { s: '₩', n: 'Won' }, { s: '₪', n: 'Shekel' }, { s: '₺', n: 'Lira' }, { s: '₦', n: 'Naira' }, { s: '₱', n: 'Peso' }, { s: '₫', n: 'Dong' }, { s: '₴', n: 'Hryvnia' }, { s: '₸', n: 'Tenge' }, { s: '₼', n: 'Manat' }, { s: '₾', n: 'Lari' }, { s: '฿', n: 'Baht' }, { s: '¢', n: 'Cent' }, { s: '¤', n: 'Currency' }, { s: '₡', n: 'Colon' }, { s: '₣', n: 'French Franc' }, { s: '₤', n: 'Lira Sign' }, { s: '₥', n: 'Mill' }, { s: '₧', n: 'Peseta' }, { s: '₨', n: 'Rupee Sign' }, { s: '₮', n: 'Tugrik' }, { s: '₯', n: 'Drachma' }, { s: '₰', n: 'German Penny' }, { s: '₲', n: 'Guarani' }, { s: '₳', n: 'Austral' },
        ]
    },
    {
        id: 'zodiac', name: 'Zodiac & Planets', icon: '♈',
        symbols: [
            { s: '♈', n: 'Aries' }, { s: '♉', n: 'Taurus' }, { s: '♊', n: 'Gemini' }, { s: '♋', n: 'Cancer' }, { s: '♌', n: 'Leo' }, { s: '♍', n: 'Virgo' }, { s: '♎', n: 'Libra' }, { s: '♏', n: 'Scorpio' }, { s: '♐', n: 'Sagittarius' }, { s: '♑', n: 'Capricorn' }, { s: '♒', n: 'Aquarius' }, { s: '♓', n: 'Pisces' }, { s: '⛎', n: 'Ophiuchus' }, { s: '☉', n: 'Sun' }, { s: '☽', n: 'Moon' }, { s: '☿', n: 'Mercury' }, { s: '♀', n: 'Venus' }, { s: '♂', n: 'Mars' }, { s: '♃', n: 'Jupiter' }, { s: '♄', n: 'Saturn' }, { s: '♅', n: 'Uranus' }, { s: '♆', n: 'Neptune' }, { s: '♇', n: 'Pluto' }, { s: '🌍', n: 'Earth' }, { s: '🌑', n: 'New Moon' }, { s: '🌒', n: 'Waxing Crescent' }, { s: '🌓', n: 'First Quarter' }, { s: '🌔', n: 'Waxing Gibbous' }, { s: '🌕', n: 'Full Moon' }, { s: '🌙', n: 'Crescent Moon' },
        ]
    },
    {
        id: 'weather', name: 'Weather & Nature', icon: '☀',
        symbols: [
            { s: '☀', n: 'Sun' }, { s: '☁', n: 'Cloud' }, { s: '☂', n: 'Umbrella' }, { s: '☃', n: 'Snowman' }, { s: '☄', n: 'Comet' }, { s: '⛅', n: 'Sun Behind Cloud' }, { s: '⛈', n: 'Thunderstorm' }, { s: '🌈', n: 'Rainbow' }, { s: '❄', n: 'Snowflake' }, { s: '❅', n: 'Snowflake' }, { s: '❆', n: 'Snowflake' }, { s: '🌊', n: 'Wave' }, { s: '💧', n: 'Droplet' }, { s: '💦', n: 'Splashing Water' }, { s: '🔥', n: 'Fire' }, { s: '🌪', n: 'Tornado' }, { s: '⚡', n: 'Lightning' }, { s: '🌬', n: 'Wind' }, { s: '🌫', n: 'Fog' }, { s: '⛄', n: 'Snowman' }, { s: '🌡', n: 'Thermometer' }, { s: '🌂', n: 'Closed Umbrella' }, { s: '☔', n: 'Umbrella Rain' }, { s: '⛆', n: 'Rain' }, { s: '🌤', n: 'Mostly Sunny' }, { s: '🌥', n: 'Partly Cloudy' }, { s: '🌦', n: 'Sun Rain' }, { s: '🌧', n: 'Rain Cloud' }, { s: '🌨', n: 'Snow Cloud' }, { s: '🌩', n: 'Lightning Cloud' },
        ]
    },
    {
        id: 'music', name: 'Music', icon: '♪',
        symbols: [
            { s: '♩', n: 'Quarter Note' }, { s: '♪', n: 'Eighth Note' }, { s: '♫', n: 'Beamed Eighth Notes' }, { s: '♬', n: 'Beamed Sixteenth Notes' }, { s: '♭', n: 'Flat' }, { s: '♮', n: 'Natural' }, { s: '♯', n: 'Sharp' }, { s: '𝄞', n: 'Treble Clef' }, { s: '𝄢', n: 'Bass Clef' }, { s: '𝄻', n: 'Whole Rest' }, { s: '𝄼', n: 'Half Rest' }, { s: '🎵', n: 'Musical Note' }, { s: '🎶', n: 'Musical Notes' }, { s: '🎼', n: 'Musical Score' }, { s: '🎸', n: 'Guitar' }, { s: '🎹', n: 'Piano' }, { s: '🥁', n: 'Drum' }, { s: '🎺', n: 'Trumpet' }, { s: '🎻', n: 'Violin' }, { s: '🪕', n: 'Banjo' }, { s: '🎷', n: 'Saxophone' }, { s: '🪗', n: 'Accordion' }, { s: '🎤', n: 'Microphone' }, { s: '🎧', n: 'Headphone' }, { s: '📻', n: 'Radio' }, { s: '🔔', n: 'Bell' }, { s: '🔕', n: 'No Bell' }, { s: '🔊', n: 'Speaker Loud' }, { s: '🔉', n: 'Speaker Medium' }, { s: '🔇', n: 'Muted Speaker' },
        ]
    },
    {
        id: 'chess', name: 'Chess & Games', icon: '♔',
        symbols: [
            { s: '♔', n: 'White King' }, { s: '♕', n: 'White Queen' }, { s: '♖', n: 'White Rook' }, { s: '♗', n: 'White Bishop' }, { s: '♘', n: 'White Knight' }, { s: '♙', n: 'White Pawn' }, { s: '♚', n: 'Black King' }, { s: '♛', n: 'Black Queen' }, { s: '♜', n: 'Black Rook' }, { s: '♝', n: 'Black Bishop' }, { s: '♞', n: 'Black Knight' }, { s: '♟', n: 'Black Pawn' }, { s: '♠', n: 'Spade Suit' }, { s: '♣', n: 'Club Suit' }, { s: '♥', n: 'Heart Suit' }, { s: '♦', n: 'Diamond Suit' }, { s: '♤', n: 'White Spade' }, { s: '♧', n: 'White Club' }, { s: '♡', n: 'White Heart' }, { s: '♢', n: 'White Diamond' }, { s: '🎲', n: 'Die' }, { s: '🎯', n: 'Bullseye' }, { s: '🎮', n: 'Game Controller' }, { s: '🃏', n: 'Joker' }, { s: '🀄', n: 'Mahjong Red Dragon' }, { s: '🎴', n: 'Flower Playing Cards' }, { s: '🎰', n: 'Slot Machine' }, { s: '🏆', n: 'Trophy' }, { s: '🥇', n: 'Gold Medal' }, { s: '🥈', n: 'Silver Medal' },
        ]
    },
    {
        id: 'punctuation', name: 'Punctuation & Quotes', icon: '«',
        symbols: [
            { s: '«', n: 'Left Guillemet' }, { s: '»', n: 'Right Guillemet' }, { s: '‹', n: 'Left Single Guillemet' }, { s: '›', n: 'Right Single Guillemet' }, { s: '"', n: 'Left Double Quote' }, { s: '"', n: 'Right Double Quote' }, { s: '', n: 'Left Single Quote' }, { s: '', n: 'Right Single Quote' }, { s: '„', n: 'Double Low Quote' }, { s: '‟', n: 'Double High Quote' }, { s: '…', n: 'Ellipsis' }, { s: '‥', n: 'Two Dot Ellipsis' }, { s: '※', n: 'Reference Mark' }, { s: '¶', n: 'Pilcrow' }, { s: '§', n: 'Section' }, { s: '†', n: 'Dagger' }, { s: '‡', n: 'Double Dagger' }, { s: '•', n: 'Bullet' }, { s: '◦', n: 'White Bullet' }, { s: '‣', n: 'Triangular Bullet' }, { s: '⁃', n: 'Hyphen Bullet' }, { s: '⁎', n: 'Low Asterisk' }, { s: '⁏', n: 'Reversed Semicolon' }, { s: '⁓', n: 'Swung Dash' }, { s: '⁕', n: 'Flower Punctuation' }, { s: '–', n: 'En Dash' }, { s: '—', n: 'Em Dash' }, { s: '―', n: 'Horizontal Bar' }, { s: '‐', n: 'Hyphen' }, { s: '‑', n: 'Non-Breaking Hyphen' },
        ]
    },
    {
        id: 'brackets', name: 'Brackets & Frames', icon: '【',
        symbols: [
            { s: '【', n: 'Left Black Lenticular' }, { s: '】', n: 'Right Black Lenticular' }, { s: '〖', n: 'Left White Lenticular' }, { s: '〗', n: 'Right White Lenticular' }, { s: '《', n: 'Left Double Angle' }, { s: '》', n: 'Right Double Angle' }, { s: '〈', n: 'Left Single Angle' }, { s: '〉', n: 'Right Single Angle' }, { s: '「', n: 'Left Corner Bracket' }, { s: '」', n: 'Right Corner Bracket' }, { s: '『', n: 'Left White Corner' }, { s: '』', n: 'Right White Corner' }, { s: '〔', n: 'Left Tortoise Shell' }, { s: '〕', n: 'Right Tortoise Shell' }, { s: '｛', n: 'Fullwidth Left Curly' }, { s: '｝', n: 'Fullwidth Right Curly' }, { s: '（', n: 'Fullwidth Left Paren' }, { s: '）', n: 'Fullwidth Right Paren' }, { s: '〚', n: 'Left White Square' }, { s: '〛', n: 'Right White Square' }, { s: '❨', n: 'Medium Left Paren Ornament' }, { s: '❩', n: 'Medium Right Paren Ornament' }, { s: '❪', n: 'Medium Flattened Left Paren' }, { s: '❫', n: 'Medium Flattened Right Paren' }, { s: '❬', n: 'Medium Left-Pointing Angle' }, { s: '❭', n: 'Medium Right-Pointing Angle' }, { s: '❮', n: 'Heavy Left-Pointing Angle' }, { s: '❯', n: 'Heavy Right-Pointing Angle' }, { s: '❰', n: 'Heavy Left Ornament' }, { s: '❱', n: 'Heavy Right Ornament' },
        ]
    },
    {
        id: 'geometric', name: 'Geometric Shapes', icon: '■',
        symbols: [
            { s: '■', n: 'Black Square' }, { s: '□', n: 'White Square' }, { s: '▪', n: 'Small Black Square' }, { s: '▫', n: 'Small White Square' }, { s: '▬', n: 'Black Rectangle' }, { s: '▭', n: 'White Rectangle' }, { s: '▲', n: 'Black Triangle Up' }, { s: '△', n: 'White Triangle Up' }, { s: '▼', n: 'Black Triangle Down' }, { s: '▽', n: 'White Triangle Down' }, { s: '◀', n: 'Left Triangle' }, { s: '▶', n: 'Right Triangle' }, { s: '◆', n: 'Black Diamond' }, { s: '◇', n: 'White Diamond' }, { s: '○', n: 'White Circle' }, { s: '●', n: 'Black Circle' }, { s: '◎', n: 'Bullseye' }, { s: '◉', n: 'Fisheye' }, { s: '◈', n: 'Diamond White Circle' }, { s: '◐', n: 'Left Half Black Circle' }, { s: '◑', n: 'Right Half Black Circle' }, { s: '◒', n: 'Bottom Half Black Circle' }, { s: '◓', n: 'Top Half Black Circle' }, { s: '◔', n: 'Upper Right Circle' }, { s: '◕', n: 'Upper Left Circle' }, { s: '◖', n: 'Left Half Black' }, { s: '◗', n: 'Right Half Black' }, { s: '❤', n: 'Heart' }, { s: '♦', n: 'Diamond' }, { s: '⬟', n: 'Black Pentagon' },
        ]
    },
    {
        id: 'religious', name: 'Religious & Spiritual', icon: '✝',
        symbols: [
            { s: '✝', n: 'Latin Cross' }, { s: '✞', n: 'Shadowed Cross' }, { s: '✟', n: 'Outlined Latin Cross' }, { s: '☩', n: 'Cross of Jerusalem' }, { s: '⛪', n: 'Church' }, { s: '☪', n: 'Star and Crescent' }, { s: '✡', n: 'Star of David' }, { s: '☸', n: 'Dharma Wheel' }, { s: '☯', n: 'Yin Yang' }, { s: '☮', n: 'Peace' }, { s: '🕉', n: 'Om' }, { s: '✡', n: 'Star of David' }, { s: '🕌', n: 'Mosque' }, { s: '🛕', n: 'Hindu Temple' }, { s: '⛩', n: 'Shinto Shrine' }, { s: '🕍', n: 'Synagogue' }, { s: '☦', n: 'Orthodox Cross' }, { s: '⚜', n: 'Fleur-de-lis' }, { s: '🔱', n: 'Trident Emblem' }, { s: '⚛', n: 'Atom Symbol' }, { s: '🉑', n: 'Accept' }, { s: '☬', n: 'Adi Shakti' }, { s: '⛎', n: 'Ophiuchus' }, { s: '🪬', n: 'Hamsa' }, { s: '🧿', n: 'Nazar Amulet' }, { s: '🌙', n: 'Crescent Moon' }, { s: '💫', n: 'Dizzy' }, { s: '✨', n: 'Sparkles' }, { s: '🌟', n: 'Glowing Star' }, { s: '⭐', n: 'Star' },
        ]
    },
    {
        id: 'technical', name: 'Technical & Misc', icon: '©',
        symbols: [
            { s: '©', n: 'Copyright' }, { s: '®', n: 'Registered' }, { s: '™', n: 'Trademark' }, { s: '℠', n: 'Service Mark' }, { s: '℃', n: 'Celsius' }, { s: '℉', n: 'Fahrenheit' }, { s: 'Ω', n: 'Ohm' }, { s: '℞', n: 'Prescription' }, { s: '℣', n: 'Versicle' }, { s: '℅', n: 'Care Of' }, { s: '℆', n: 'Cada Una' }, { s: '℗', n: 'Sound Recording' }, { s: '℘', n: 'Script Capital P' }, { s: 'ℓ', n: 'Script Small L' }, { s: '℮', n: 'Estimated' }, { s: '№', n: 'Numero' }, { s: '℀', n: 'Account Of' }, { s: '℁', n: 'Addressed To' }, { s: 'ℂ', n: 'Complex Numbers' }, { s: 'ℕ', n: 'Natural Numbers' }, { s: 'ℚ', n: 'Rational Numbers' }, { s: 'ℝ', n: 'Real Numbers' }, { s: 'ℤ', n: 'Integers' }, { s: '⌨', n: 'Keyboard' }, { s: '🖱', n: 'Mouse' }, { s: '💻', n: 'Laptop' }, { s: '📱', n: 'Mobile' }, { s: '🖨', n: 'Printer' }, { s: '⌚', n: 'Watch' }, { s: '📡', n: 'Satellite Antenna' },
        ]
    },
    {
        id: 'alphabets', name: 'Special Alphabets', icon: 'Ⓐ',
        symbols: [
            { s: 'Ⓐ', n: 'Circled A' }, { s: 'Ⓑ', n: 'Circled B' }, { s: 'Ⓒ', n: 'Circled C' }, { s: 'Ⓓ', n: 'Circled D' }, { s: 'Ⓔ', n: 'Circled E' }, { s: 'Ⓕ', n: 'Circled F' }, { s: 'Ⓖ', n: 'Circled G' }, { s: 'Ⓗ', n: 'Circled H' }, { s: 'Ⓘ', n: 'Circled I' }, { s: 'Ⓙ', n: 'Circled J' }, { s: 'Ⓚ', n: 'Circled K' }, { s: 'Ⓛ', n: 'Circled L' }, { s: 'Ⓜ', n: 'Circled M' }, { s: 'Ⓝ', n: 'Circled N' }, { s: 'Ⓞ', n: 'Circled O' }, { s: 'Ⓟ', n: 'Circled P' }, { s: 'Ⓠ', n: 'Circled Q' }, { s: 'Ⓡ', n: 'Circled R' }, { s: 'Ⓢ', n: 'Circled S' }, { s: 'Ⓣ', n: 'Circled T' }, { s: 'Ⓤ', n: 'Circled U' }, { s: 'Ⓥ', n: 'Circled V' }, { s: 'Ⓦ', n: 'Circled W' }, { s: 'Ⓧ', n: 'Circled X' }, { s: 'Ⓨ', n: 'Circled Y' }, { s: 'Ⓩ', n: 'Circled Z' }, { s: '🅐', n: 'Negative A' }, { s: '🅑', n: 'Negative B' }, { s: '🅒', n: 'Negative C' }, { s: '🅓', n: 'Negative D' },
        ]
    },
    {
        id: 'numbers', name: 'Special Numbers', icon: '①',
        symbols: [
            { s: '①', n: 'Circled 1' }, { s: '②', n: 'Circled 2' }, { s: '③', n: 'Circled 3' }, { s: '④', n: 'Circled 4' }, { s: '⑤', n: 'Circled 5' }, { s: '⑥', n: 'Circled 6' }, { s: '⑦', n: 'Circled 7' }, { s: '⑧', n: 'Circled 8' }, { s: '⑨', n: 'Circled 9' }, { s: '⑩', n: 'Circled 10' }, { s: '⑪', n: 'Circled 11' }, { s: '⑫', n: 'Circled 12' }, { s: '⑬', n: 'Circled 13' }, { s: '⑭', n: 'Circled 14' }, { s: '⑮', n: 'Circled 15' }, { s: '❶', n: 'Dingbat 1' }, { s: '❷', n: 'Dingbat 2' }, { s: '❸', n: 'Dingbat 3' }, { s: '❹', n: 'Dingbat 4' }, { s: '❺', n: 'Dingbat 5' }, { s: '½', n: 'One Half' }, { s: '⅓', n: 'One Third' }, { s: '¼', n: 'One Quarter' }, { s: '⅕', n: 'One Fifth' }, { s: '⅙', n: 'One Sixth' }, { s: '⅛', n: 'One Eighth' }, { s: '⅔', n: 'Two Thirds' }, { s: '¾', n: 'Three Quarters' }, { s: '⅖', n: 'Two Fifths' }, { s: '⅗', n: 'Three Fifths' },
        ]
    },
    {
        id: 'hands', name: 'Hands & Gestures', icon: '👋',
        symbols: [
            { s: '👋', n: 'Waving Hand' }, { s: '🤚', n: 'Raised Back' }, { s: '🖐', n: 'Hand Splayed' }, { s: '✋', n: 'Raised Hand' }, { s: '🖖', n: 'Vulcan Salute' }, { s: '👌', n: 'OK Hand' }, { s: '🤌', n: 'Pinched Fingers' }, { s: '✌', n: 'Victory Hand' }, { s: '🤞', n: 'Crossed Fingers' }, { s: '🤟', n: 'Love-You Gesture' }, { s: '🤘', n: 'Sign of Horns' }, { s: '🤙', n: 'Call Me' }, { s: '👈', n: 'Backhand Left' }, { s: '👉', n: 'Backhand Right' }, { s: '👆', n: 'Backhand Up' }, { s: '🖕', n: 'Middle Finger' }, { s: '👇', n: 'Backhand Down' }, { s: '☝', n: 'Index Up' }, { s: '👍', n: 'Thumbs Up' }, { s: '👎', n: 'Thumbs Down' }, { s: '✊', n: 'Raised Fist' }, { s: '👊', n: 'Oncoming Fist' }, { s: '🤛', n: 'Left Fist' }, { s: '🤜', n: 'Right Fist' }, { s: '👏', n: 'Clapping' }, { s: '🙌', n: 'Raising Hands' }, { s: '🤲', n: 'Palms Up' }, { s: '🙏', n: 'Folded Hands' }, { s: '✍', n: 'Writing Hand' }, { s: '💅', n: 'Nail Polish' },
        ]
    },
    {
        id: 'food', name: 'Food & Drinks', icon: '🍕',
        symbols: [
            { s: '🍕', n: 'Pizza' }, { s: '🍔', n: 'Burger' }, { s: '🌮', n: 'Taco' }, { s: '🍜', n: 'Noodles' }, { s: '🍱', n: 'Bento' }, { s: '🍣', n: 'Sushi' }, { s: '🍩', n: 'Donut' }, { s: '🎂', n: 'Cake' }, { s: '🧁', n: 'Cupcake' }, { s: '🍦', n: 'Ice Cream' }, { s: '🍰', n: 'Shortcake' }, { s: '🍫', n: 'Chocolate' }, { s: '🍬', n: 'Candy' }, { s: '🍭', n: 'Lollipop' }, { s: '☕', n: 'Hot Beverage' }, { s: '🍵', n: 'Tea' }, { s: '🧃', n: 'Juice' }, { s: '🥤', n: 'Soft Drink' }, { s: '🍺', n: 'Beer' }, { s: '🍷', n: 'Wine' }, { s: '🥂', n: 'Clinking Glasses' }, { s: '🍾', n: 'Champagne' }, { s: '🧋', n: 'Bubble Tea' }, { s: '🍓', n: 'Strawberry' }, { s: '🍉', n: 'Watermelon' }, { s: '🍊', n: 'Orange' }, { s: '🍋', n: 'Lemon' }, { s: '🍇', n: 'Grapes' }, { s: '🍑', n: 'Peach' }, { s: '🍒', n: 'Cherry' },
        ]
    },
    {
        id: 'animals', name: 'Animals & Nature', icon: '🐾',
        symbols: [
            { s: '🐾', n: 'Paw Prints' }, { s: '🦁', n: 'Lion' }, { s: '🐯', n: 'Tiger' }, { s: '🦊', n: 'Fox' }, { s: '🐺', n: 'Wolf' }, { s: '🦝', n: 'Raccoon' }, { s: '🐻', n: 'Bear' }, { s: '🐼', n: 'Panda' }, { s: '🐨', n: 'Koala' }, { s: '🦄', n: 'Unicorn' }, { s: '🐉', n: 'Dragon' }, { s: '🦋', n: 'Butterfly' }, { s: '🐝', n: 'Bee' }, { s: '🌸', n: 'Cherry Blossom' }, { s: '🌺', n: 'Hibiscus' }, { s: '🌻', n: 'Sunflower' }, { s: '🌹', n: 'Rose' }, { s: '🌷', n: 'Tulip' }, { s: '🍀', n: 'Four Leaf Clover' }, { s: '🌿', n: 'Herb' }, { s: '🍃', n: 'Leaf Fluttering' }, { s: '🍂', n: 'Fallen Leaf' }, { s: '🍁', n: 'Maple Leaf' }, { s: '🌴', n: 'Palm Tree' }, { s: '🌵', n: 'Cactus' }, { s: '🦚', n: 'Peacock' }, { s: '🦜', n: 'Parrot' }, { s: '🐬', n: 'Dolphin' }, { s: '🐋', n: 'Whale' }, { s: '🦈', n: 'Shark' },
        ]
    },
    {
        id: 'dingbats', name: 'Dingbats & Misc', icon: '✔',
        symbols: [
            { s: '✔', n: 'Heavy Check' }, { s: '✓', n: 'Check Mark' }, { s: '✗', n: 'Ballot X' }, { s: '✘', n: 'Heavy Ballot X' }, { s: '⚠', n: 'Warning' }, { s: '⛔', n: 'No Entry' }, { s: '🚫', n: 'Prohibited' }, { s: '✅', n: 'Check Button' }, { s: '❌', n: 'Cross Mark' }, { s: '❎', n: 'Cross Button' }, { s: '☑', n: 'Check Box' }, { s: '☒', n: 'Ballot Box X' }, { s: '🔴', n: 'Red Circle' }, { s: '🟠', n: 'Orange Circle' }, { s: '🟡', n: 'Yellow Circle' }, { s: '🟢', n: 'Green Circle' }, { s: '🔵', n: 'Blue Circle' }, { s: '🟣', n: 'Purple Circle' }, { s: '⚫', n: 'Black Circle' }, { s: '⚪', n: 'White Circle' }, { s: '🔶', n: 'Orange Diamond' }, { s: '🔷', n: 'Blue Diamond' }, { s: '🔸', n: 'Small Orange Diamond' }, { s: '🔹', n: 'Small Blue Diamond' }, { s: '🔺', n: 'Red Triangle Up' }, { s: '🔻', n: 'Red Triangle Down' }, { s: '💠', n: 'Diamond with Dot' }, { s: '🔘', n: 'Radio Button' }, { s: '🔳', n: 'White Square Button' }, { s: '🔲', n: 'Black Square Button' },
        ]
    },
];

/* ── FLATTEN ALL FOR SEARCH ── */
const ALL_SYMBOLS = [];
SYMBOL_CATS.forEach(cat => {
    cat.symbols.forEach(sym => {
        ALL_SYMBOLS.push({ ...sym, cat: cat.name, catId: cat.id });
    });
});

/* ── BUILD SIDEBAR ── */
function buildSidebar() {
    const sb = document.getElementById('catSidebar');
    // "All" item
    const allItem = document.createElement('div');
    allItem.className = 'cat-nav-item active';
    allItem.id = 'nav-all';
    allItem.innerHTML = `All Symbols <span class="cat-nav-count">${ALL_SYMBOLS.length}</span>`;
    allItem.onclick = () => scrollToTop();
    sb.appendChild(allItem);

    SYMBOL_CATS.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'cat-nav-item';
        item.id = 'nav-' + cat.id;
        item.innerHTML = `${cat.icon} ${cat.name} <span class="cat-nav-count">${cat.symbols.length}</span>`;
        item.onclick = () => {
            document.getElementById('section-' + cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveNav(item);
        };
        sb.appendChild(item);
    });
}

function setActiveNav(el) {
    document.querySelectorAll('.cat-nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav(document.getElementById('nav-all'));
}

/* ── BUILD SYMBOL SECTIONS ── */
function buildSections() {
    const content = document.getElementById('symContent');
    content.innerHTML = '';

    SYMBOL_CATS.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'sym-section';
        section.id = 'section-' + cat.id;

        const head = document.createElement('div');
        head.className = 'sym-section-head';
        head.innerHTML = `
                    <div class="sym-section-icon">${cat.icon}</div>
                    <span class="sym-section-title">${cat.name}</span>
                    <span class="sym-section-count">${cat.symbols.length} symbols</span>`;
        section.appendChild(head);

        const grid = document.createElement('div');
        grid.className = 'sym-grid';
        grid.id = 'grid-' + cat.id;

        cat.symbols.forEach(sym => {
            grid.appendChild(makeSymBtn(sym));
        });

        section.appendChild(grid);
        content.appendChild(section);
    });
}

/* ── CREATE SYMBOL BUTTON ── */
function makeSymBtn(sym) {
    const btn = document.createElement('button');
    btn.className = 'sym-btn';
    btn.setAttribute('data-name', sym.n);
    btn.setAttribute('title', sym.n);
    btn.setAttribute('aria-label', 'Copy ' + sym.n);
    btn.innerHTML = `<span class="sym-char">${sym.s}</span>`;
    btn.onclick = () => copySymbol(sym.s, sym.n, btn);
    return btn;
}

/* ── COPY SYMBOL ── */
function copySymbol(sym, name, btn) {
    navigator.clipboard.writeText(sym).then(() => {
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 1200);
        showToast('"' + sym + '" ' + name + ' — Copied!');
    });
}

/* ── SEARCH ── */
let searchTimeout;
function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(doSearch, 120);
}

function doSearch() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    const content = document.getElementById('symContent');
    const countEl = document.getElementById('searchCount');

    if (!q) {
        buildSections();
        countEl.textContent = '';
        return;
    }

    const results = ALL_SYMBOLS.filter(sym =>
        sym.s.includes(q) ||
        sym.n.toLowerCase().includes(q) ||
        sym.cat.toLowerCase().includes(q)
    );

    content.innerHTML = '';
    countEl.textContent = results.length + ' symbol' + (results.length !== 1 ? 's' : '') + ' found for "' + q + '"';

    if (results.length === 0) {
        content.innerHTML = `<div class="no-results"><span>🔍</span>No symbols found for "<strong>${q}</strong>".<br>Try a different keyword like "heart", "arrow", or "star".</div>`;
        return;
    }

    // Group results by category
    const grouped = {};
    results.forEach(sym => {
        if (!grouped[sym.catId]) grouped[sym.catId] = { name: sym.cat, symbols: [], icon: SYMBOL_CATS.find(c => c.id === sym.catId)?.icon || '✦' };
        grouped[sym.catId].symbols.push(sym);
    });

    Object.values(grouped).forEach(group => {
        const section = document.createElement('section');
        section.className = 'sym-section';
        section.innerHTML = `<div class="sym-section-head"><div class="sym-section-icon">${group.icon}</div><span class="sym-section-title">${group.name}</span><span class="sym-section-count">${group.symbols.length} found</span></div>`;
        const grid = document.createElement('div');
        grid.className = 'sym-grid';
        group.symbols.forEach(sym => grid.appendChild(makeSymBtn(sym)));
        section.appendChild(grid);
        content.appendChild(section);
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchCount').textContent = '';
    buildSections();
}

/* ── SCROLL SPY ── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id.replace('section-', '');
            const navEl = document.getElementById('nav-' + id);
            if (navEl) setActiveNav(navEl);
        }
    });
}, { rootMargin: '-20% 0px -60% 0px' });

/* ── INIT ── */
buildSidebar();
buildSections();

// Observe sections
document.querySelectorAll('.sym-section').forEach(s => observer.observe(s));
