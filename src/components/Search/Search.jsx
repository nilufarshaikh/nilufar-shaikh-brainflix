import "./Search.scss";
import searchIcon from "../../assets/icons/search.svg";

const Search = () => {
  return (
    <form className="search">
      <img className="search__icon" src={searchIcon} alt="Search Icon" />
      <input className="search__input" type="text" placeholder="Search" />
    </form>
  );
};

export default Search;
