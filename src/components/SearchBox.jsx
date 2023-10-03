import React from "react";
import {UilSearch} from '@iconscout/react-unicons'
const SearchBox = (props) => {
  return (
    <div className="p-4">
      <input className="py-2" type="text" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Serach a movie" />
      <div className="s-icon">
               <UilSearch/>
           </div>
    </div>
  );
};

export default SearchBox;
