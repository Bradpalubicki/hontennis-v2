// Shared schema.org structured data for HON Tennis

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hontennis.com",
  "name": "HON Tennis — Coach Tim Brielmaier",
  "description": "RSPA and IPTPA certified tennis and pickleball coaching across Florida's Space Coast and Treasure Coast. Mobile coach — Tim comes to your court.",
  "url": "https://hontennis.com",
  "telephone": "+14142326840",
  "email": "brielmaiert@gmail.com",
  "image": "https://hontennis.com/images/coach-tim-portrait.webp",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Venmo",
  "areaServed": [
    { "@type": "City", "name": "Melbourne", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Palm Bay", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Viera", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Suntree", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Rockledge", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Indialantic", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Indian Harbour Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Vero Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Sebastian", "containedInPlace": { "@type": "State", "name": "Florida" } },
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.0836",
    "longitude": "-80.6081",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "19:00",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tennis & Pickleball Coaching Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Private Tennis Lessons", "description": "One-on-one tennis instruction at your court. RSPA certified coaching for all skill levels." },
        "price": "80",
        "priceCurrency": "USD",
        "unitText": "per hour",
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Private Pickleball Lessons", "description": "One-on-one pickleball instruction at your court. IPTPA certified coaching for all skill levels." },
        "price": "80",
        "priceCurrency": "USD",
        "unitText": "per hour",
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Group Tennis & Pickleball Clinics", "description": "Small group clinics for 5-8 players. 90 minutes of structured instruction." },
        "price": "20",
        "priceCurrency": "USD",
        "unitText": "per person",
      },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1",
  },
  "founder": {
    "@type": "Person",
    "name": "Tim Brielmaier",
    "jobTitle": "Tennis & Pickleball Coach",
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "RSPA Certified Tennis Instructor" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "IPTPA Certified Pickleball Instructor" },
    ],
    "knowsAbout": ["Tennis", "Pickleball", "Sports Coaching", "Racquet Sports", "Senior Athletics"],
    "worksFor": { "@type": "LocalBusiness", "name": "HON Tennis" },
  },
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tim Brielmaier",
  "alternateName": "Coach Tim",
  "jobTitle": "Tennis & Pickleball Instructor",
  "description": "RSPA and IPTPA certified tennis and pickleball coach with 40+ years experience. Mobile coaching across Florida's Space Coast and Treasure Coast.",
  "telephone": "+14142326840",
  "email": "brielmaiert@gmail.com",
  "image": "https://hontennis.com/images/coach-tim-portrait.webp",
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "RSPA Certified Tennis Instructor" },
    { "@type": "EducationalOccupationalCredential", "name": "IPTPA Certified Pickleball Instructor" },
  ],
  "knowsAbout": ["Tennis coaching", "Pickleball instruction", "Senior sports", "Racquet stringing", "Har-Tru court maintenance"],
  "alumniOf": [
    { "@type": "Organization", "name": "Vizcaya Clubhouse", "description": "Former Director of Tennis" },
    { "@type": "Organization", "name": "Hong Kong Country Club" },
    { "@type": "Organization", "name": "Huntington Lakes" },
  ],
  "workLocation": {
    "@type": "Place",
    "name": "Space Coast & Treasure Coast, Florida",
    "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" },
  },
}

export function articleSchema({ title, description, datePublished, dateModified, slug }: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": `https://hontennis.com/education/${slug}`,
    "image": "https://hontennis.com/images/coach-tim-portrait.webp",
    "author": {
      "@type": "Person",
      "name": "Tim Brielmaier",
      "url": "https://hontennis.com/about",
    },
    "publisher": {
      "@type": "Organization",
      "name": "HON Tennis",
      "url": "https://hontennis.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hontennis.com/education/${slug}`,
    },
  }
}
