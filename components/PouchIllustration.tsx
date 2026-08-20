const FLAVORS = {
  orange: { from: "#F5C518", to: "#D99E00", textDark: true, name: "ORANGE" },
  grape: { from: "#C084FC", to: "#7C3AED", textDark: false, name: "GRAPE" },
  raspberry: { from: "#FB7185", to: "#E11D48", textDark: false, name: "RASPBERRY" },
} as const;

export default function PouchIllustration({
  flavor = "orange",
  className,
}: {
  flavor?: keyof typeof FLAVORS;
  className?: string;
}) {
  const f = FLAVORS[flavor];
  const uid = flavor; // unique-enough for gradient ids when only one instance per flavor is on a page

  return (
    <svg viewBox="0 0 320 440" className={className} role="img" aria-label={`FORGED ${f.name} caffeine gummies pouch`}>
      <defs>
        <linearGradient id={`pouchGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#33333c" />
          <stop offset="35%" stopColor="#1a1a20" />
          <stop offset="70%" stopColor="#0c0c10" />
          <stop offset="100%" stopColor="#020203" />
        </linearGradient>
        <linearGradient id={`sealGrad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a42" />
          <stop offset="100%" stopColor="#1c1c22" />
        </linearGradient>
        <linearGradient id={`bandGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={f.from} />
          <stop offset="100%" stopColor={f.to} />
        </linearGradient>
        <radialGradient id={`highlight-${uid}`} cx="30%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`shadowBlur-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={`glossBlur-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <clipPath id={`pouchClip-${uid}`}>
          <path
            d="M58,78
               C58,52 72,32 96,28
               L224,28
               C248,32 262,52 262,78
               L270,330
               C270,378 226,404 160,404
               C94,404 50,378 50,330
               Z"
          />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="160" cy="400" rx="95" ry="18" fill="#000000" opacity="0.55" filter={`url(#shadowBlur-${uid})`} />

      {/* pouch body */}
      <path
        d="M58,78
           C58,52 72,32 96,28
           L224,28
           C248,32 262,52 262,78
           L270,330
           C270,378 226,404 160,404
           C94,404 50,378 50,330
           Z"
        fill={`url(#pouchGrad-${uid})`}
        stroke="#000"
        strokeWidth="1"
      />

      {/* ambient highlight */}
      <path
        d="M58,78
           C58,52 72,32 96,28
           L224,28
           C248,32 262,52 262,78
           L270,330
           C270,378 226,404 160,404
           C94,404 50,378 50,330
           Z"
        fill={`url(#highlight-${uid})`}
      />

      {/* diagonal gloss streak + rim light */}
      <g clipPath={`url(#pouchClip-${uid})`}>
        <polygon points="70,50 110,50 60,300 20,300" fill="#ffffff" opacity="0.06" filter={`url(#glossBlur-${uid})`} />
        <polygon points="130,40 155,40 95,340 70,340" fill="#ffffff" opacity="0.1" filter={`url(#glossBlur-${uid})`} />
        <rect x="255" y="20" width="10" height="390" fill="#ffffff" opacity="0.07" />
      </g>

      {/* top seal band */}
      <path
        d="M92,28 C92,20 100,14 112,14 L208,14 C220,14 228,20 228,28
           L228,44 L92,44 Z"
        fill={`url(#sealGrad-${uid})`}
        stroke="#000"
        strokeWidth="1"
      />
      <g stroke="#000" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="100" y1="18" x2="100" y2="42" />
        <line x1="115" y1="16" x2="115" y2="42" />
        <line x1="130" y1="15" x2="130" y2="42" />
        <line x1="145" y1="14" x2="145" y2="42" />
        <line x1="160" y1="14" x2="160" y2="42" />
        <line x1="175" y1="14" x2="175" y2="42" />
        <line x1="190" y1="15" x2="190" y2="42" />
        <line x1="205" y1="16" x2="205" y2="42" />
        <line x1="220" y1="18" x2="220" y2="42" />
      </g>

      {/* hang hole */}
      <circle cx="160" cy="24" r="6.5" fill="#050506" stroke="#3a3a42" strokeWidth="1.5" />

      {/* side gusset creases */}
      <path d="M96,60 C90,160 90,260 100,340" fill="none" stroke="#000" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M224,60 C230,160 230,260 220,340" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="2" />

      {/* plus mark */}
      <g transform="translate(160,110)">
        <rect x="-3" y="-14" width="6" height="28" rx="2" fill="#F2B705" />
        <rect x="-14" y="-3" width="28" height="6" rx="2" fill="#F2B705" />
      </g>

      {/* wordmark */}
      <text x="160" y="160" textAnchor="middle" fontFamily="var(--font-display), Arial, sans-serif" fontWeight={800} fontSize="34" letterSpacing="1" fill="#F5F5F2">
        FORGED
      </text>
      <text x="160" y="182" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={700} fontSize="10.5" letterSpacing="3" fill="#F2B705">
        CAFFEINE GUMMIES
      </text>
      <text x="160" y="204" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={600} fontSize="9" letterSpacing="1.5" fill="#a8a8ac">
        40MG CAFFEINE · ZERO SUGAR
      </text>

      {/* flavor band */}
      <rect x="76" y="222" width="168" height="34" rx="4" fill={`url(#bandGrad-${uid})`} />
      <text
        x="160"
        y="245"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight={800}
        fontSize="16"
        letterSpacing="2"
        fill={f.textDark ? "#0c0c0e" : "#ffffff"}
      >
        {f.name}
      </text>
      <text x="160" y="270" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={600} fontSize="9" letterSpacing="1.5" fill="#8a8a8e">
        NATURALLY FLAVORED
      </text>

      {/* gummies */}
      <g transform="translate(160,300)">
        <ellipse cx="-22" cy="6" rx="14" ry="10" fill={f.from} opacity="0.9" />
        <ellipse cx="0" cy="0" rx="16" ry="11" fill={f.from} />
        <ellipse cx="24" cy="8" rx="13" ry="9" fill={f.to} opacity="0.9" />
      </g>

      {/* bottom info */}
      <text x="160" y="340" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={700} fontSize="11" letterSpacing="1" fill="#e5e5e2">
        60 GUMMIES
      </text>
      <text x="160" y="356" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={500} fontSize="8" letterSpacing="1.5" fill="#6a6a6e">
        DIETARY SUPPLEMENT
      </text>
    </svg>
  );
}
