// src/components/Intro/Intro.tsx
import "./Intro.scss";
import Logo from "../../assets/images/01_Specta.png";

type IntroProps = {
  title: string;
  paragraphs: string[];
  cta: string;
};

export default function Intro({ title, paragraphs, cta }: IntroProps) {
  return (
    <div className="Intro-container">
      <img className="Intro__image" src={Logo} alt="Specta_logo" />
      <h2>{title}</h2>

      <div className="text__content">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
        <p>{cta}</p>
      </div>
    </div>
  );
}
