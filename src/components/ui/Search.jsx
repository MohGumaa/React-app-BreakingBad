import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const q = e.target.value;
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={onChange}
        />
      </form>
    </section>
  );
};

export default Search;
