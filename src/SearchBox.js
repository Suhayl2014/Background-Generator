import React from "react";
//import { useState } from "react";

const SearchBox = ({searchChange}) => {

    return (
        <div>
        <label>Search...</label>
        <input className="Input" placeholder="Search Robo" onChange={searchChange}></input>
        </div>
      );
}
 
export default SearchBox;