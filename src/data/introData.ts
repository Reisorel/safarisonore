// src/data/introData.ts
export type Lang = "fr" | "en";

export const introData: Record<
  Lang,
  { title: string; paragraphs: string[]; cta: string }
> = {
  fr: {
    title: "Safari Sonore",
    paragraphs: [
      "Tous les 777 ans, une merveilleuse ménagerie se réunit au Mont-Saint-Michel avant de reprendre son voyage dans notre imaginaire.",
      "Dans ce sanctuaire entre mer et ciel, leurs chants glissent, se répondent et brillent comme un écho venu d'un autre temps.",
      "En suivant le chemin de l'abbaye, le son de sept des créatures se dévoilera à vous.",
      "Ouvrez grand vos oreilles, laissez votre imagination voyager et tentez de les reconnaître...",
    ],
    cta: "Lequel entendrez-vous ?",
  },
  en: {
    title: "Sound Safari",
    paragraphs: [
      "Every 777 years, a wondrous menagerie gathers at Mont-Saint-Michel before resuming its journey through our imagination.",
      "In this sanctuary between sea and sky, their songs drift, answer one another, and shimmer like an echo from another time.",
      "As you follow the path of the abbey, the sound of seven creatures will reveal itself to you.",
      "Open your ears wide, let your imagination roam, and try to recognize them...",
    ],
    cta: "Which one will you hear?",
  },
};
