const groups = [
  {
    title: "Child & Newborn Care",
    titleHindi: "बाल एवं नवजात शिशु देखभाल",
    items: [
      { en: "Fever, dengue, seasonal fever", hi: "बुखार, डेंगू, मौसमी बुखार" },
      { en: "All newborn ailments", hi: "सभी नवजात शिशु रोग" },
      { en: "Jaundice", hi: "पीलिया" },
      { en: "Asthma & pneumonia", hi: "अस्थमा एवं निमोनिया" },
      { en: "Beriberi treatment", hi: "बेरी रोग का इलाज" },
      { en: "Underweight & growth issues", hi: "कम वजन एवं विकास संबंधी समस्याएं" },
      { en: "Loss of appetite, vomiting, diarrhea", hi: "भूख कम लगना, उल्टी, दस्त" },
      { en: "Dehydration & anemia", hi: "पानी की कमी एवं खून की कमी" },
      { en: "Other stomach problems", hi: "पेट की अन्य समस्याएं" },
    ],
  },
  {
    title: "Adult General Medicine",
    titleHindi: "वयस्क सामान्य चिकित्सा",
    items: [
      { en: "BP (Blood Pressure)", hi: "बी.पी. (रक्तचाप)" },
      { en: "Sugar / Diabetes", hi: "शुगर / मधुमेह" },
      { en: "Breathlessness & respiratory issues", hi: "सांस फूलना एवं श्वसन संबंधी समस्याएं" },
      { en: "Stomach-related illnesses", hi: "पेट संबंधी बीमारियां" },
      { en: "Anemia", hi: "खून की कमी" },
      { en: "Chronic fever & infections", hi: "पुराना बुखार एवं संक्रमण" },
      { en: "Lifestyle disorders", hi: "जीवनशैली संबंधी रोग" },
    ],
  },
  {
    title: "Orthopaedic & Surgical",
    titleHindi: "हड्डी एवं शल्य चिकित्सा",
    items: [
      { en: "Piles", hi: "बवासीर" },
      { en: "Fistula", hi: "भगन्दर" },
      { en: "Fissure", hi: "फिशर" },
      { en: "Back pain & body pain", hi: "कमर दर्द एवं शरीर दर्द" },
      { en: "Swelling of hands and feet", hi: "हाथ पैर सूजा होना" },
      { en: "Fractures & joint pain", hi: "फ्रैक्चर एवं जोड़ों का दर्द" },
      { en: "Spine & nerve disorders", hi: "रीढ़ एवं नस संबंधी रोग" },
    ],
  },
];

type Props = { background?: "white" | "slate-50" };

export function ConditionsSection({ background = "white" }: Props) {
  const bg = background === "slate-50" ? "bg-slate-50" : "bg-white";
  const cardBg = background === "slate-50" ? "bg-white" : "bg-slate-50";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">
            Conditions Treated
          </span>
          <p className="text-xs text-slate-500 mt-1">उपचारित रोग</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            सभी प्रकार के रोगों का इलाज
          </h2>
          <p className="mt-1 text-base md:text-lg font-medium text-slate-700">
            All kinds of conditions treated
          </p>
          <p className="mt-4 text-slate-600">
            A summary of common cases handled across age groups.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            सभी आयु वर्ग के मरीजों का इलाज किया जाता है।
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl border border-slate-200 p-6 ${cardBg}`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
              <p className="text-sm text-slate-500 mt-0.5">{g.titleHindi}</p>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li key={it.en} className="flex gap-2">
                    <span className="text-brand mt-0.5">·</span>
                    <div>
                      <p className="text-sm text-slate-800">{it.en}</p>
                      <p className="text-xs text-slate-500">{it.hi}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600 italic leading-relaxed">
          हाथ पैर सूजा होना, बवासीर, भगन्दर, फिशर, कमर दर्द, शरीर दर्द इत्यादि सभी प्रकार के रोगों का इलाज किया जाता है।
        </p>
        <p className="mt-1 text-xs text-slate-500 italic">
          Swelling of hands and feet, piles, fistula, fissure, back pain, body pain and all other conditions are treated here.
        </p>
      </div>
    </section>
  );
}
