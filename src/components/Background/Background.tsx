// Background.tsx
import { useEffect, useRef, useState } from "react";
import "./Background.scss";
import Card from "../Card/Card";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import { cardData } from "../../data/cardData";
import { introData } from "../../data/introData";
import type { Lang } from "../../data/introData";

export default function Background() {
  const lastClickRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const [lang, setLang] = useState<Lang>("fr");
  const intro = introData[lang];

  const uiText: Record<Lang, { playLabel: string }> = {
    fr: { playLabel: "Écoute son cri" },
    en: { playLabel: "Listen to its call" },
  };

  const { playLabel } = uiText[lang];

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audioRef.current = audio;

    audio.onended = () => setActiveId(null);

    return () => {
      audio.onended = null;
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  const playFromStart = async (id: string, soundUrl: string) => {
    const now = Date.now();
    if (now - lastClickRef.current < 120) return;
    lastClickRef.current = now;

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    if (audio.src !== soundUrl) audio.src = soundUrl;

    setActiveId(id);

    try {
      await audio.play();
    } catch {
      setActiveId(null);
    }
  };

  return (
    <div className="bg-container">
      <div className="bg-content">
        {/* Toggle minimal */}
        <div className="lang-toggle">
          <button
            type="button"
            onClick={() => setLang("fr")}
            aria-pressed={lang === "fr"}
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>

        <Intro
          title={intro.title}
          paragraphs={intro.paragraphs}
          cta={intro.cta}
        />

        {cardData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            isActive={activeId === item.id}
            onPlay={() => playFromStart(item.id, item.sound)}
            playLabel={playLabel} // ✅ nouveau
          />
        ))}

        <Footer />
      </div>
    </div>
  );
}
