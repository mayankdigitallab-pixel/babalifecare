// Single source of truth for consultation pricing.
// Razorpay uses paise (1 INR = 100 paise).
export const VIDEO_CONSULTATION_FEE_INR = 300;
export const VIDEO_CONSULTATION_FEE_PAISE = VIDEO_CONSULTATION_FEE_INR * 100;

// Returns a unique, hard-to-guess Jitsi meet room URL.
// Jitsi rooms are free and require no API or login.
export function generateJitsiLink(): string {
  const random =
    Math.random().toString(36).slice(2, 8) +
    Math.random().toString(36).slice(2, 8);
  const ts = Date.now().toString(36);
  return `https://meet.jit.si/baba-life-care-${ts}-${random}`;
}
