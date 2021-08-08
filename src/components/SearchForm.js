import { useGlobalContext } from '../context';
const SearchForm = () => {
  const { value, setValue, error } = useGlobalContext();
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error.isError && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
