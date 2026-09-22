export const siteConfig = {
  name: "Big Sky Salvage",
  shortName: "Big Sky Salvage",
  parentTagline: "Used OEM Auto Parts in St Cloud, FL",
  chainTagline: "One of the Biggest Auto Parts Chains in the USA",
  description:
    "Big Sky Salvage offers high-quality used OEM auto parts in St Cloud, FL. Shop used engines, transmissions, wheels, radiators and more with fast US shipping.",
  url: "https://www.bigskysalvageus.com",
  domain: "bigskysalvageus.com",

  phone: "+1 (866) 906-6144",
  phoneHref: "tel:+18669066144",

  // Secondary direct line, shown alongside the toll-free number.
  altPhone: "+1 (321) 441-2855",
  altPhoneHref: "tel:+13214412855",

  // Shown publicly on the site (mailto links, footer, contact page).
  publicEmail: "sales2@bigskysalvage.com",
  // Technical inbox used server-side to send/receive form submissions.
  adminEmail: "williamautoparts1950@gmail.com",

  address: {
    line1: "5255 E Irlo Bronson Memorial Hwy Unit S395d",
    city: "St Cloud",
    state: "FL",
    zip: "34771",
    country: "United States",
    full: "5255 E Irlo Bronson Memorial Hwy Unit S395d, St Cloud, FL 34771",
  },

  hours: {
    weekday: "Mon-Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 4:00 PM",
    sunday: "Sun: Closed",
  },

  mapEmbedSrc:
    "https://www.google.com/maps?q=5255+E+Irlo+Bronson+Memorial+Hwy+Unit+S395d,+St+Cloud,+FL+34771&output=embed",

  social: {
    whatsapp: "https://wa.me/13214412855",
  },
} as const;
