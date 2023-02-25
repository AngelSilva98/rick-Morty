import style from "../components/Searchbar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.contenedorSearch}>
      <input className={style.search} type="search" />
      <button className={style.button} onClick={() => props.onSearch()}>
        Agregar
      </button>
    </div>
  );
}
