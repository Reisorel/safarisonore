import "./Card.scss";

type CardProps = {
  name: string;
  image: string;
  isActive: boolean;
  onPlay: () => void;
};

export default function Card({ name, image, isActive, onPlay }: CardProps) {
  return (
    <div className={`card ${isActive ? "card--active" : ""}`}>
      <img className="card__image" src={image} alt={name} />
      <span className="card__name">{name}</span>
      <button className="card__button" type="button" onClick={onPlay}>
        Écoute son cri
      </button>
    </div>
  );
}
