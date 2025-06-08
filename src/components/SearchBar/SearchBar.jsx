import { useState } from "react";

const SearchBar = ({ onSumbit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSumbit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }} htmlFor="input_field">
          Seatch Bar
        </label>
        <input
          type="text"
          id="input_field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here in!!!"
          style={{
            display: "block",
            border: "1px solid black",
            padding: "4px",
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
