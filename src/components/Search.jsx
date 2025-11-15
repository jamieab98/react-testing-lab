import React from "react";

function Search({setSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => {
          const currentSearch = (e.target.value)
          setSearch(currentSearch)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
