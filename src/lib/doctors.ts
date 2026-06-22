// Availability: which weekdays each doctor sees patients.
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday.
export type Doctor = {
  slug: string;
  name: string;
  initial: string;
  role: string;
  roleHindi: string;
  qualifications: string;
  experience: string[];
  availability?: string;
  availableDays: number[];
  availableSlots?: string[];
  department: string;
};

const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];

export const DEFAULT_SLOTS = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-k-d-patel",
    name: "Dr. K. D. Patel",
    initial: "KP",
    role: "Pediatrician & Physician",
    roleHindi: "नवजात शिशु, बाल रोग एवं फिजिशियन",
    qualifications: "BAMS, CCYP-IMS, BHU",
    experience: [
      "Ex. RMO, Yash Life Care Hospital, Mau",
      "Ex. District Hospital, Mau",
    ],
    availableDays: ALL_DAYS,
    department: "Pediatrics & General Medicine",
  },
  {
    slug: "dr-ashish-kumar-singh",
    name: "Dr. Ashish Kumar Singh",
    initial: "AS",
    role: "Orthopaedic, Neuro & Spine Specialist",
    roleHindi: "हड्डी, नस एवं मांसिक रोग विशेषज्ञ",
    qualifications: "MBBS (SNMC Agra), DNB (Orthopaedics)",
    experience: [
      "Neuro Medicine Exp. - AIIMS, Delhi",
      "General Medicine Exp. - U.P.U.M.S, Saifai",
      "DNB Ortho Exp. - G.M.C., Rampur & Basti",
    ],
    availability: "Available every Sunday",
    availableDays: [0],
    department: "Orthopaedics / Neuro Medicine",
  },
  {
    slug: "dr-pradeep-singh",
    name: "Dr. Pradeep Singh",
    initial: "PS",
    role: "Ayurvedic Consultant",
    roleHindi: "आयुर्वेद विशेषज्ञ",
    qualifications: "MD (Ayurveda), GAU - Jamnagar, Gujarat",
    experience: ["MD in Ayurveda from Gujarat Ayurved University, Jamnagar"],
    availableDays: ALL_DAYS,
    department: "Ayurvedic Medicine",
  },
  {
    slug: "dr-ajay-maurya",
    name: "Dr. Ajay Maurya",
    initial: "AM",
    role: "General Physician & Surgeon",
    roleHindi: "जनरल फिजिशियन एवं सर्जन",
    qualifications: "BAMS, CCYP - IMS, BHU",
    experience: ["General Physician & Surgeon"],
    availability: "Available every Saturday, 11:00 AM - 3:00 PM",
    availableDays: [6],
    availableSlots: ["11:00 AM - 01:00 PM", "01:00 PM - 03:00 PM"],
    department: "General Physician & Surgery",
  },
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getDoctorBySelection(selection: string): Doctor | null {
  return DOCTORS.find((d) => selection.startsWith(d.name)) ?? null;
}

export function dayLabel(day: number): string {
  return DAY_NAMES[day] ?? "";
}

export function isDateAvailable(dateStr: string, doctor: Doctor | null): boolean {
  if (!doctor) return true;
  if (!dateStr) return true;
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return true;
  return doctor.availableDays.includes(d.getDay());
}

export function availableDayNames(doctor: Doctor): string {
  return doctor.availableDays.map((d) => dayLabel(d)).join(", ");
}

export function getSlotsForDoctor(doctor: Doctor | null): string[] {
  if (!doctor) return DEFAULT_SLOTS;
  return doctor.availableSlots ?? DEFAULT_SLOTS;
}
