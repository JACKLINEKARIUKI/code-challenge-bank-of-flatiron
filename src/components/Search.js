import React, { useState } from "react";

function Search({ setSearchString }) {
  const [input, setInput] = useState("");

  const handleSearch = (text) => {
    setSearchString(text);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        value={input}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setInput(e.target.value)}
      />
      <i
        onClick={() => handleSearch(input)}
        className="circular search link icon"
      ></i>
    </div>
  );
}

export default Search;
