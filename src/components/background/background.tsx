import "./Background.scss";
import Card from "../Card/Card";
import { cardsData } from "../../data/cardsData";

export default function Background() {
  return (
    <div className="bg-container">
      <div className="bg-content">
        {cardsData.map((name) => (
          <Card key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
