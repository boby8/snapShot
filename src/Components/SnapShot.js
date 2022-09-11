import React from "react";
import { NavLink } from "react-router-dom";
import "./SnapShot.css";

export default function SnapShot(props) {
  return (
    <>
      <div className="snapshot">
        <h1>Sanp shop</h1>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={props.handleSearch}
        />
        <button name="search" id="search" onClick={props.handleSearching}>
          Search
        </button>

        <nav>
          <NavLink to="/"  onClick={props.handleMountain }>Mountain</NavLink>
          <NavLink to="beaches" onClick={props.handleBeach}>Beaches</NavLink>
          <NavLink to="birds/" onClick={props.handleBird}>Birds</NavLink>
          <NavLink to="food/" onClick={props.handleFood}>Food</NavLink>
        </nav>
      </div>
    </>
  );
}
