import { useEffect, useRef, useState } from "react";
import "./Background.scss";
import Card from "../Card/Card";
import Intro from "../Intro/Intro"
import { cardData } from "../../data/cardData";

export default function Background() {
  const lastClickRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audioRef.current = audio;

    audio.onended = () => {
      setActiveId(null);
    };

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

    // Anti-queue: on coupe tout, on remet à zéro, puis on relance
    audio.pause();
    audio.currentTime = 0;

    // Si on clique sur un autre son, on change la source
    if (audio.src !== soundUrl) {
      audio.src = soundUrl;
    }

    setActiveId(id);

    try {
      await audio.play();
    } catch {
      // Si play échoue (rare après un clic), on nettoie l'état
      setActiveId(null);
    }
  };

  return (
    <div className="bg-container">
      <div className="bg-content">
        <Intro/>
        {cardData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            isActive={activeId === item.id}
            onPlay={() => playFromStart(item.id, item.sound)}
          />
        ))}
      </div>
    </div>
  );
}
