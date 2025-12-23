import "./Card.scss";

type CardProps = {
  name: string;
  isActive: boolean; // optionnel si tu veux styliser
  onPlay: () => void;
};

export default function Card({ name, onPlay }: CardProps) {
  return (
    <div className="card">
      <span className="card__name">{name}</span>

      <button className="card__button" type="button" onClick={onPlay}>
        Écoute son cri
      </button>
    </div>
  );
}

