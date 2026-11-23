/* Brand artwork: the crest colours are fixed brand colours, not theme tokens. */

const BRAND = {
  navy: '#0c2340',
  navyDark: '#071629',
  gold: '#d4af37',
  red: '#c8102e',
  blue: '#1d63b8',
  green: '#16803c',
  white: '#ffffff',
};

export function CrestMini({size = 44}: {size?: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="95" fill={BRAND.navy} stroke={BRAND.gold} strokeWidth="6" />
      <path d="M55 48 H145 V105 C145 138 100 160 100 160 C100 160 55 138 55 105 Z" fill={BRAND.white} stroke={BRAND.gold} strokeWidth="4" />
      <path d="M58 51 H100 V102 H58 Z" fill={BRAND.red} />
      <path d="M100 51 H142 V102 H100 Z" fill={BRAND.blue} />
      <path d="M58 102 H100 V142 C76 131 58 117 58 102 Z" fill={BRAND.green} />
      <path d="M100 102 H142 C142 117 124 131 100 142 Z" fill={BRAND.gold} />
      <polyline points="42,102 74,102 84,78 96,126 108,86 118,102 158,102" fill="none" stroke={BRAND.white} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Crest({size = 240}: {size?: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 260 260" role="img" aria-label="Clonervy Training Solutions official crest">
      <defs>
        <path id="crest-top-arc" d="M 34,130 A 96,96 0 1,1 226,130" />
        <path id="crest-bottom-arc" d="M 224,134 A 94,94 0 0,1 36,134" />
      </defs>
      <circle cx="130" cy="130" r="124" fill={BRAND.navyDark} stroke={BRAND.gold} strokeWidth="5" />
      <circle cx="130" cy="130" r="114" fill="none" stroke={BRAND.gold} strokeWidth="1.5" strokeDasharray="4 3" />

      <text fill={BRAND.white} fontSize="13.5" fontWeight="800" letterSpacing="2.2" fontFamily="system-ui, sans-serif">
        <textPath href="#crest-top-arc" startOffset="50%" textAnchor="middle">
          CLONERVY TRAINING SOLUTIONS
        </textPath>
      </text>
      <text fill={BRAND.gold} fontSize="11.5" fontWeight="700" letterSpacing="1.6" fontFamily="system-ui, sans-serif">
        <textPath href="#crest-bottom-arc" startOffset="50%" textAnchor="middle">
          TRAIN • PREPARE • SAVE LIVES
        </textPath>
      </text>

      <path d="M74 68 H186 V136 C186 176 130 202 130 202 C130 202 74 176 74 136 Z" fill={BRAND.white} stroke={BRAND.gold} strokeWidth="4" />
      <path d="M77 71 H130 V132 H77 Z" fill={BRAND.red} />
      <path d="M130 71 H183 V132 H130 Z" fill={BRAND.blue} />
      <path d="M77 132 H130 V197 C101 183 77 161 77 136 Z" fill={BRAND.green} />
      <path d="M130 132 H183 V136 C183 161 159 183 130 197 Z" fill={BRAND.gold} />

      <g fontFamily="system-ui, sans-serif" fontWeight="800" textAnchor="middle">
        <text x="103" y="96" fill={BRAND.white} fontSize="11">CFR</text>
        <text x="157" y="96" fill={BRAND.white} fontSize="11">BLS</text>
        <text x="104" y="156" fill={BRAND.white} fontSize="9.5">MANUAL</text>
        <text x="104" y="167" fill={BRAND.white} fontSize="9.5">HANDLING</text>
        <text x="155" y="156" fill={BRAND.navyDark} fontSize="9.5">PATIENT</text>
        <text x="155" y="167" fill={BRAND.navyDark} fontSize="9.5">MOVEMENT</text>
      </g>

      <polyline points="62,132 98,132 109,105 123,158 137,112 148,132 198,132" fill="none" stroke={BRAND.white} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="translate(130, 50) scale(0.75)">
        <circle cx="-7" cy="-4" r="7" fill={BRAND.green} stroke={BRAND.white} strokeWidth="1.5" />
        <circle cx="7" cy="-4" r="7" fill={BRAND.green} stroke={BRAND.white} strokeWidth="1.5" />
        <circle cx="0" cy="-13" r="7" fill={BRAND.green} stroke={BRAND.white} strokeWidth="1.5" />
        <path d="M0 -3 Q2 8 -4 14" fill="none" stroke={BRAND.green} strokeWidth="3" strokeLinecap="round" />
      </g>

      <rect x="68" y="198" width="124" height="22" rx="4" fill={BRAND.navy} stroke={BRAND.gold} strokeWidth="2" />
      <text x="130" y="213" fill={BRAND.gold} fontSize="10" fontWeight="800" textAnchor="middle" letterSpacing="1.2" fontFamily="system-ui, sans-serif">
        CAVAN • IRELAND
      </text>
    </svg>
  );
}
