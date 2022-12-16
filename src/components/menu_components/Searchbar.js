import React, { useEffect, useRef, useState } from "react";

function Searchbar({ search, setSearch }) {
  //const searchRef = useRef();
  //const [searchState, setSearchState] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="z-50  input input-bordered input-secondary w-full"
        //ref={searchRef}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
          //searchRef = e.target.value;
        }}
        value={search}
      />
    </div>
  );
}

export default Searchbar;
