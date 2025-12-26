import "./Intro.scss";
import Logo from "../../assets/images/01_Specta.png";

function Intro() {
  return (
    <div className="Intro-container">
      <img className="Intro__image" src={Logo} alt={"Specta_logo"} />
      <h2>Safari Sonore</h2>
      <div className="text__content">
        <p>
          {" "}
          Tous les 777 ans, une merveilleuse ménagerie se réunit au
          Mont-Saint-Michel avant de reprendre son voyage dans notre imaginaire.
        </p>
        <p>
          Dans ce sanctuaire entre mer et ciel, leurs chants glissent, se
          répondent et brillent comme un écho venu d'un autre temps
        </p>
        <p>
          En suivante le chemin de l'abbaye, le son de sept des créatures se
          dévoilera à vous
        </p>
        <p>
          Ouvrez grand vos oreilles, laissez votre imagination voyager et tentez
          de les reconnaître...
        </p>
        <p>Lequel entendrez-vous ?</p>
      </div>
    </div>
  );
}
export default Intro;
