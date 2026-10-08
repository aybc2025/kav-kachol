// The order here is the learning order shown on the home screen.
export const UNITS = [
  { id: "basics", num: 1, title: "המשחק בקצרה", titleEn: "The basics", sub: "6 שחקנים, 3 שלישים" },
  { id: "rink", num: 2, title: "המגרש", titleEn: "The rink", sub: "אזורים וקווים" },
  { id: "faceoff", num: 3, title: "פייס-אוף", titleEn: "Faceoffs", sub: "תשע נקודות על הקרח" },
  { id: "offside", num: 4, title: "נבדל", titleEn: "Offside", sub: "Offside" },
  { id: "icing", num: 5, title: "איסינג", titleEn: "Icing", sub: "Icing" },
  { id: "penalties", num: 6, title: "עונשים", titleEn: "Penalties", sub: "Penalties" },
  { id: "goals", num: 7, title: "שער או לא שער", titleEn: "Goals & reviews", sub: "בעיטה, מקל גבוה, וידאו" },
  { id: "overtime", num: 8, title: "הארכה ופנדלים", titleEn: "Overtime & shootout", sub: "3 נגד 3, שוטאאוט, פלייאוף" },
  { id: "signals", num: 9, title: "סימני השופטים", titleEn: "Referee signals", sub: "מה רואים בשידור" },
];

export function getUnit(id) {
  return UNITS.find((u) => u.id === id) ?? null;
}

export function nextUnit(id) {
  const i = UNITS.findIndex((u) => u.id === id);
  return i >= 0 && i < UNITS.length - 1 ? UNITS[i + 1] : null;
}
