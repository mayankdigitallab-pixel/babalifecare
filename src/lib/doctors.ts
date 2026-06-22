export type Doctor = {
  slug: string;
  name: string;
  initial: string;
  role: string;
  roleHindi: string;
  qualifications: string;
  experience: string[];
  availability?: string;
  department: string;
};

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
    department: "Orthopaedics / Neuro Medicine",
  },
  {
    slug: "dr-pradeep-singh",
    name: "Dr. Pradeep Singh",
    initial: "PS",
    role: "Ayurvedic Consultant",
    roleHindi: "आयुर्वेद विशेषज्ञ",
    qualifications: "MD (Ayurveda), GAU - Jamnagar, Gujarat",
    experience: [
      "MD in Ayurveda from Gujarat Ayurved University, Jamnagar",
    ],
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
    availability: "Available every Saturday, 11:00 AM – 3:00 PM",
    department: "General Physician & Surgery",
  },
];
