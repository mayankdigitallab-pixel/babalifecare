import { whatsappLink } from "@/lib/clinic";

export function WhatsAppButton() {
  const link = whatsappLink(
    "Hello Baba Life Care Clinic, I would like to book an appointment."
  );
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.5 1.34 5.02L2 22l5.06-1.33a10 10 0 0 0 4.98 1.27h.01c5.53 0 10.04-4.5 10.04-10.04 0-2.68-1.05-5.2-2.94-7.09l-.1-.4ZM12.04 20.13h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3 .79.8-2.93-.2-.3a8.3 8.3 0 0 1-1.27-4.42c0-4.6 3.74-8.34 8.34-8.34 2.23 0 4.32.87 5.9 2.44a8.28 8.28 0 0 1 2.44 5.9c0 4.6-3.74 8.34-8.34 8.34l-.13-.14Zm4.57-6.24c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13s-.64.81-.79.97c-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/>
      </svg>
    </a>
  );
}
