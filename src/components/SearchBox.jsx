import React from "react";

const SearchBox = (props) => {
  return (
    <div className="p-4">
      <input className="py-2" type="text" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Serach a movie" />
    </div>
  );
};

export default SearchBox;
