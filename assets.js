// Inlined SVG assets for local file execution support
window.assets = {
    // Template reference: Side view helmet, Front view body
    // ViewBox optimized for a full standing figure (approx 200x500)

    helmet: `<svg id="helmet-svg" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Side View Helmet facing Right (matching standard profile) -->
    <!-- Shell -->
    <path id="helmet-shell" d="M60,50 Q60,10 100,10 Q145,10 150,50 Q152,70 145,80 L145,95 Q130,105 100,100 Q70,95 60,85 Z" fill="#D0D0D0" stroke="none" />
    
    <!-- Facemask -->
    <path id="helmet-mask" d="M145,55 L170,55 L170,95 L130,95 L125,85" fill="none" stroke="#555" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Decal/Stripe Area -->
    <path id="helmet-decal" d="M60,50 Q60,10 100,10 Q145,10 150,50" fill="none" stroke="transparent" stroke-width="0" />
</svg>`,

    jersey: `<svg id="jersey-svg" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Front View Jersey -->
    <!-- Shoulders/Sleeves -->
    <path id="jersey-body" d="M40,110 L20,130 L30,150 L50,135 L50,260 L150,260 L150,135 L170,150 L180,130 L160,110 L130,95 Q100,110 70,95 Z" fill="#FFFFFF" stroke="#000" stroke-width="1"/>
    
    <!-- Collar -->
    <path id="jersey-trim" d="M70,95 L130,95 L100,120 Z" fill="none" stroke="#000" stroke-width="1" />
    
    <!-- Number -->
    <text id="jersey-number" x="100" y="180" text-anchor="middle" font-family="Impact, Arial, sans-serif" font-weight="bold" font-size="50" fill="#000000">10</text>
</svg>`,

    pants: `<svg id="pants-svg" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Front View Pants -->
    <path id="pants-main" d="M50,260 L150,260 L145,350 L130,420 L110,420 L100,320 L90,420 L70,420 L55,350 Z" fill="#FFFFFF" stroke="#000" stroke-width="1" />
    
    <!-- Belt/Waist (optional detail) -->
    <path d="M50,260 L150,260 L148,275 L52,275 Z" fill="none" stroke="#000" stroke-width="0.5" />
    
    <!-- Side Stripes (Visible on edges of front view) -->
    <path id="pants-stripe" d="M50,260 L55,350 L70,420 M150,260 L145,350 L130,420" fill="none" stroke="#000" stroke-width="3" />
</svg>`,

    socks: `<svg id="socks-svg" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Front View Socks (Two Legs) -->
    <!-- Left Leg -->
    <path id="sock-main-left" d="M75,420 L95,420 L90,520 L75,530 L65,520 Z" fill="#FFFFFF" stroke="#000" stroke-width="1" />
    
    <!-- Right Leg -->
    <path id="sock-main-right" d="M125,420 L105,420 L110,520 L125,530 L135,520 Z" fill="#FFFFFF" stroke="#000" stroke-width="1" />
</svg>`
};
