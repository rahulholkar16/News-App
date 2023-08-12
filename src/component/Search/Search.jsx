import React, { useState } from "react";
import "./Search.scss";
import { Navigate, useNavigate } from "react-router-dom";

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const nevigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button className="search-button" onClick={()=>{nevigate(`q=${searchQuery}`)}}>Search</button>
    </div>
  );
};

export default SearchComponent;
