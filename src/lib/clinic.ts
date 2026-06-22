// Central clinic config.
export const CLINIC = {
  name: "Baba Life Care Clinic",
  tagline: "Trusted Multi-Specialty Care on the UP-Bihar Border",
  taglineHindi: "आपकी सेवा में समर्पित !! बाबा नाम केवलम !!",
  motto: "बाबा नाम केवलम",
  registration: "DAUO/DEORIA/348/2026-31",
  address: {
    line1: "Rampur Buzurg, Salempur-Mairwa Main Road (North Side)",
    line2: "Near house of Sri Ramayan Singh (Teacher)",
    line3: "UP-Bihar Border, Deoria (U.P.)",
    full: "Rampur Buzurg, Salempur-Mairwa Main Road (North Side), near house of Sri Ramayan Singh (Teacher), UP-Bihar Border, Deoria (U.P.)",
    hindi: "रामपुर बुजुर्ग, सलेमपुर-मैरवा मेन रोड उत्तरी पटरी पर, रामायण सिंह (शिक्षक) के मकान में, यूपी-बिहार बॉर्डर, देवरिया (उ0प्र0)",
  },
  phone: "+91 73790 03604",
  phoneRaw: "917379003604",
  phoneAlt: "+91 90265 95237",
  phoneAltRaw: "919026595237",
  // TODO: replace with real clinic email once available.
  email: "babalifecareclinic@gmail.com",
  hours: {
    weekdays: "9:00 AM to 8:00 PM",
    sunday: "10:00 AM to 2:00 PM",
    emergency: "24x7",
  },
  freeConsultDay: "Friday",
  freeConsultLabel: "Nishulk Paramarsh (Free Consultation)",
  facilities: ["Nebulizer (Steam Therapy)", "Oxygen Facility"],
  mapsEmbed:
    "https://www.google.com/maps?q=Salempur+Mairwa+Deoria+Uttar+Pradesh&output=embed",
};

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC.phoneRaw}?text=${encoded}`;
}

export const HEADER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
