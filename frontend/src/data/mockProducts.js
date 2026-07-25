export const mockProducts = [
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro (128GB) - Natural Titanium",
    brand: "Apple",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    url: "https://amazon.in/dp/B0D1XXXXX",
    currentPrice: 119900,
    listPrice: 129900,
    currency: "₹",
    rating: 4.7,
    reviewCount: 14280,
    availability: "In Stock",
    recommendation: "WAIT", // BUY NOW or WAIT
    confidenceScore: 96,
    expectedLowestPrice: 104900,
    estimatedSavings: 15000,
    bestDateToBuy: "Oct 8, 2026 (Big Billion Days / Great Indian Festival)",
    reason: "Historical cycle shows 12-14% price drop during upcoming festive mega sales. Current price is at a 60-day plateau.",
    priceTrend: "downward", // upward, downward, stable
    aiVerdict: "Wait 2 months to save ~₹15,000. If urgent, buy on Flipkart with HDFC card instant discount.",
    pros: [
      "Unmatched A18 Pro performance & thermal headroom",
      "ProRes video recording and dedicated Camera Control button",
      "Stunning Titanium frame and all-day battery life"
    ],
    cons: [
      "Base storage remains at 128GB",
      "Fast charging speed capped at 27W"
    ],
    fakeReviewScore: 94, // 94% authentic
    fakeReviewText: "Analyzed 14,280 reviews across Amazon & Flipkart. 94% determined authentic based on verified purchase timestamps & linguistic patterns.",
    trustScore: 98,
    stores: [
      { name: "Amazon", price: 119900, stock: "In Stock", delivery: "Free Tomorrow", url: "https://amazon.in", badge: "Fastest Delivery" },
      { name: "Flipkart", price: 117900, stock: "In Stock", delivery: "2 Days", url: "https://flipkart.com", badge: "Lowest Today" },
      { name: "Croma", price: 119900, stock: "In Stock", delivery: "Store Pickup", url: "https://croma.com", badge: "Official Warranty" },
      { name: "Reliance Digital", price: 119990, stock: "Low Stock", delivery: "3 Days", url: "https://reliancedigital.in", badge: "Bank Cashback" }
    ],
    priceHistory: [
      { date: "Aug 2025", price: 129900, label: "Launch Price" },
      { date: "Sep 2025", price: 129900 },
      { date: "Oct 2025", price: 124900, label: "Diwali Sale" },
      { date: "Nov 2025", price: 126900 },
      { date: "Dec 2025", price: 125000 },
      { date: "Jan 2026", price: 122900, label: "Republic Day" },
      { date: "Feb 2026", price: 123500 },
      { date: "Mar 2026", price: 121900 },
      { date: "Apr 2026", price: 121900 },
      { date: "May 2026", price: 120500 },
      { date: "Jun 2026", price: 119900, label: "Current Price" },
      { date: "Jul 2026 (Pred)", price: 116000, isPredicted: true },
      { date: "Oct 2026 (Pred)", price: 104900, isPredicted: true, label: "Predicted Lowest" }
    ],
    alternatives: [
      {
        id: "samsung-s24-ultra",
        name: "Samsung Galaxy S24 Ultra (256GB)",
        price: 109999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80",
        reason: "Offers 100x zoom and integrated S-Pen at ₹10,000 less right now."
      },
      {
        id: "iphone-15-pro",
        name: "Apple iPhone 15 Pro (128GB)",
        price: 94900,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80",
        reason: "Save ₹25,000 while enjoying Titanium body and USB-C speed."
      }
    ]
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    url: "https://amazon.in/dp/B09X11111",
    currentPrice: 22990,
    listPrice: 34990,
    currency: "₹",
    rating: 4.6,
    reviewCount: 8940,
    availability: "In Stock",
    recommendation: "BUY NOW",
    confidenceScore: 98,
    expectedLowestPrice: 22490,
    estimatedSavings: 12000,
    bestDateToBuy: "Right Now (All-Time Low Alert)",
    reason: "Current price ₹22,990 matches the lowest historical price recorded in the past 12 months. Excellent value deal.",
    priceTrend: "downward",
    aiVerdict: "Strong BUY NOW recommendation! Price has dropped 34% below original MSRP with no further significant drops predicted.",
    pros: [
      "Industry-leading active noise cancellation with Auto NC Optimizer",
      "Exceptional 30-hour battery life with ultra-fast USB-PD charging",
      "Lightweight, pressure-relieving synthetic leather cushions"
    ],
    cons: [
      "Does not fold into a compact ball like XM4",
      "No IP water-resistance rating"
    ],
    fakeReviewScore: 97,
    fakeReviewText: "8,940 reviews analyzed. High authenticity score of 97%. Consistent audio praise across audiophile platforms.",
    trustScore: 99,
    stores: [
      { name: "Amazon", price: 22990, stock: "In Stock", delivery: "Prime Same Day", url: "https://amazon.in", badge: "Best Price" },
      { name: "Flipkart", price: 24990, stock: "In Stock", delivery: "2 Days", url: "https://flipkart.com", badge: "Standard" },
      { name: "Croma", price: 26990, stock: "In Stock", delivery: "Store Pickup", url: "https://croma.com", badge: "In-Store Demo" }
    ],
    priceHistory: [
      { date: "Aug 2025", price: 29990 },
      { date: "Oct 2025", price: 24990, label: "Festive Offer" },
      { date: "Dec 2025", price: 28990, label: "Peak Price" },
      { date: "Jan 2026", price: 26990 },
      { date: "Mar 2026", price: 25990 },
      { date: "May 2026", price: 24500 },
      { date: "Jun 2026", price: 22990, label: "Lowest Price Ever" },
      { date: "Jul 2026 (Pred)", price: 24990, isPredicted: true }
    ],
    alternatives: [
      {
        id: "bose-qc-ultra",
        name: "Bose QuietComfort Ultra Headphones",
        price: 31900,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
        reason: "Superior folding design and spatial immersion mode."
      }
    ]
  },
  {
    id: "macbook-air-m3",
    name: "Apple MacBook Air 15-inch M3 (16GB RAM, 512GB SSD)",
    brand: "Apple",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    url: "https://apple.com/in/macbook-air",
    currentPrice: 144900,
    listPrice: 154900,
    currency: "₹",
    rating: 4.9,
    reviewCount: 3410,
    availability: "In Stock",
    recommendation: "WAIT",
    confidenceScore: 92,
    expectedLowestPrice: 129900,
    estimatedSavings: 15000,
    bestDateToBuy: "Aug 15, 2026 (Back-to-School / Independence Day Sale)",
    reason: "Student discounts + HDFC bank offers drop this laptop to ₹1,29,900 next month with free AirPods.",
    priceTrend: "stable",
    aiVerdict: "Wait for the upcoming Back-to-School student promo to save ₹15,000 plus get bundled free audio accessories.",
    pros: [
      "Supercharged M3 chip with dual external display support",
      "Impossibly thin 11.5mm aluminum enclosure",
      "Silent fanless design with up to 18 hours battery life"
    ],
    cons: [
      "Base charger is only 35W Dual Port",
      "Limited port selection (2x Thunderbolt 4)"
    ],
    fakeReviewScore: 96,
    fakeReviewText: "3,410 verified customer logs scanned. 96% genuine rating.",
    trustScore: 98,
    stores: [
      { name: "Amazon", price: 144900, stock: "In Stock", delivery: "Free Tomorrow", url: "https://amazon.in", badge: "Bank Offer" },
      { name: "Apple Store", price: 154900, stock: "In Stock", delivery: "Free Pickup", url: "https://apple.com", badge: "Free Engraving" },
      { name: "Reliance Digital", price: 143900, stock: "In Stock", delivery: "2 Days", url: "https://reliancedigital.in", badge: "Lowest Today" }
    ],
    priceHistory: [
      { date: "Mar 2026", price: 154900, label: "Launch" },
      { date: "Apr 2026", price: 152900 },
      { date: "May 2026", price: 148900 },
      { date: "Jun 2026", price: 144900, label: "Current Price" },
      { date: "Aug 2026 (Pred)", price: 129900, isPredicted: true, label: "Student Promo" }
    ],
    alternatives: [
      {
        id: "macbook-air-m2",
        name: "Apple MacBook Air 13-inch M2",
        price: 89900,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80",
        reason: "Incredible performance for everyday tasks at under ₹90k."
      }
    ]
  },
  {
    id: "ps5-slim",
    name: "Sony PlayStation 5 Console (Slim Disc Edition)",
    brand: "Sony",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    url: "https://amazon.in/dp/B0CSXXXX",
    currentPrice: 44990,
    listPrice: 54990,
    currency: "₹",
    rating: 4.8,
    reviewCount: 19500,
    availability: "In Stock",
    recommendation: "BUY NOW",
    confidenceScore: 99,
    expectedLowestPrice: 43990,
    estimatedSavings: 10000,
    bestDateToBuy: "Buy Now (Limited Midnight Flash Promo)",
    reason: "Sony running limited ₹10,000 promotional price reduction across authorized Indian retailers.",
    priceTrend: "downward",
    aiVerdict: "Instant BUY! Discount expected to end in 48 hours when stock clears.",
    pros: [
      "30% smaller volume with 1TB high-speed SSD built-in",
      "Ultra HD Blu-ray disc drive included",
      "DualSense controller with haptic feedback & adaptive triggers"
    ],
    cons: [
      "Vertical stand sold separately",
      "Gets warm during extended 4K ray-tracing sessions"
    ],
    fakeReviewScore: 98,
    fakeReviewText: "19,500 reviews verified. 98% authentic score.",
    trustScore: 99,
    stores: [
      { name: "Amazon", price: 44990, stock: "In Stock", delivery: "Free Tomorrow", url: "https://amazon.in", badge: "Official Price Cut" },
      { name: "Flipkart", price: 44990, stock: "In Stock", delivery: "Tomorrow", url: "https://flipkart.com", badge: "Same Price" },
      { name: "Croma", price: 45990, stock: "In Stock", delivery: "Instant Pickup", url: "https://croma.com", badge: "Store Demo" }
    ],
    priceHistory: [
      { date: "Jan 2026", price: 54990, label: "Original Launch" },
      { date: "Mar 2026", price: 52990 },
      { date: "May 2026", price: 49990 },
      { date: "Jun 2026", price: 44990, label: "Current Special Deal" },
      { date: "Jul 2026 (Pred)", price: 51990, isPredicted: true, label: "Returns to Normal" }
    ],
    alternatives: [
      {
        id: "xbox-series-x",
        name: "Xbox Series X 1TB Console",
        price: 46990,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=400&q=80",
        reason: "Game Pass integration with hundreds of day-one games."
      }
    ]
  }
];

export const mockSalesCalendar = [
  {
    id: "sale-amazon-gif",
    store: "Amazon",
    title: "Amazon Great Indian Festival 2026",
    startDate: "2026-10-08T00:00:00",
    banner: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    expectedDiscount: "Up to 80% OFF on Tech & Fashion",
    topCategories: ["Smartphones", "Laptops", "Smart TVs", "Audio"],
    bankOffers: "10% Instant Discount on SBI & ICICI Cards",
    status: "Upcoming"
  },
  {
    id: "sale-flipkart-bbd",
    store: "Flipkart",
    title: "Flipkart Big Billion Days 2026",
    startDate: "2026-10-07T00:00:00",
    banner: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&w=1200&q=80",
    expectedDiscount: "Lowest Prices of the Year on iPhones & Electronics",
    topCategories: ["iPhones", "Gaming Laptops", "Home Appliances"],
    bankOffers: "10% Instant Discount on HDFC & Axis Cards",
    status: "Upcoming"
  },
  {
    id: "sale-prime-day",
    store: "Amazon",
    title: "Amazon Prime Day Sale",
    startDate: "2026-07-28T00:00:00",
    banner: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80",
    expectedDiscount: "Exclusive Member Deals & New Product Launches",
    topCategories: ["Kindle", "Echo Devices", "Headphones"],
    bankOffers: "10% ICICI & Amazon Pay ICICI Cashback",
    status: "Starting Soon"
  },
  {
    id: "sale-diwali",
    store: "Multi-Store",
    title: "Diwali Mega Tech Carnival",
    startDate: "2026-11-01T00:00:00",
    banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    expectedDiscount: "Festive Bonanza & Exchange Upgrades",
    topCategories: ["OLED TVs", "Refrigerators", "Smartwatches"],
    bankOffers: "No-Cost EMI up to 24 Months",
    status: "Scheduled"
  }
];

export const mockTrustedBrands = [
  { name: "Amazon", logo: "🛒 Amazon.in" },
  { name: "Flipkart", logo: "⚡ Flipkart" },
  { name: "Croma", logo: "🏬 Croma" },
  { name: "Reliance Digital", logo: "💎 Reliance Digital" },
  { name: "Apple Store", logo: "🍎 Apple" },
  { name: "Tata CLiQ", logo: "✨ Tata CLiQ" }
];
