// Centralized placeholder image URLs. Real photos go here later.
// TODO: replace each with the actual clinic photo.
const u = (id: string, w = 1600, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const IMAGES = {
  hero: {
    welcome: u("1538108149393-fbbd81895907"),
    friday: u("1576091160550-2173dba999ef"),
    seniors: u("1559757148-5c350d0d3c56"),
    emergency: u("1551884170-09fb70a3a2ed"),
  },
  doctors: {
    "dr-k-d-patel": u("1622253692010-333f2da6031d", 600, 600),
    "dr-ashish-kumar-singh": u("1559757175-5700dde675bc", 600, 600),
    "dr-pradeep-singh": u("1582750433449-648ed127bb54", 600, 600),
    "dr-ajay-maurya": u("1612349317150-e413f6a5b16d", 600, 600),
  },
  gallery: [
    { title: "Clinic Reception", src: u("1538108149393-fbbd81895907", 800, 800) },
    { title: "Waiting Area", src: u("1666214280391-8a9174a31bc4", 800, 800) },
    { title: "Consultation Room", src: u("1666214277657-2c2b9f1a4ba8", 800, 800) },
    { title: "Patient Examination", src: u("1559757148-5c350d0d3c56", 800, 800) },
    { title: "Pharmacy", src: u("1576602976047-174e57a47881", 800, 800) },
    { title: "Pediatric Care", src: u("1581595220892-b0739db3ba8c", 800, 800) },
    { title: "Diagnostic Lab", src: u("1582719508461-905c673771fd", 800, 800) },
    { title: "Front Desk", src: u("1631217872822-1c2546d6b864", 800, 800) },
  ],
  about: {
    mission: u("1666214280557-f1b5022eb634", 800, 600),
    story: u("1581595220892-b0739db3ba8c", 800, 600),
  },
  services: {
    header: u("1576091160399-112ba8d25d1d", 1600, 600),
  },
  testimonials: {
    header: u("1559757175-5700dde675bc", 1600, 600),
  },
  contact: {
    header: u("1538108149393-fbbd81895907", 1600, 500),
  },
};
