import "./Card.scss";

type CardProps = {
  name: string;
};

export default function Card({ name }: CardProps) {
  return (
    <div className="card">
      {name}
    </div>
  );
}
