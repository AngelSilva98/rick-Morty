import style from "../components/Cards.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => alert("Se cerró")}>
        x
      </button>
      <h2 className={style.name}>{props.name}</h2>
      <h2 className={style.species}>{props.species}</h2>
      <h2 className={style.gender}>{props.gender}</h2>
      <img className={style.image} src={props.image} alt={props.name} />
    </div>
  );
}
