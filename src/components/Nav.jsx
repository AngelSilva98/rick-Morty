import SearchBar from "./SearchBar.jsx";
import style from "./NavBar.module.css";

export default function NavBar(props) {
  return;

  <div className={style.cont}>
    <SearchBar onSearch={(characterID) => window.alert(characterID)} />
  </div>;
}
