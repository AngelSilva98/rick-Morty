import Card from "./Card";
import style from "../components/Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  const element = characters.map((character, index) => (
    <Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      id={character.id}
      key={index}
    />
  ));

  return <div className={style.contenedor}>{element}</div>;
}
