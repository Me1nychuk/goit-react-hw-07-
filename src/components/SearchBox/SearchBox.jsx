import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchTerm = useSelector(selectNameFilter);
  const searchId = useId();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={css.searchWrapper}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Search
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="searchInput"
        id={searchId}
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
