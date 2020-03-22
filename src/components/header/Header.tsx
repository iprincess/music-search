import './Header.css';
import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>      
      <nav className="nav container">
        <h3 className="item">Search by:</h3>
        <NavLink className="nav-link item" to="/artist">Artist</NavLink>
        <NavLink className="nav-link item" to="/album">Album</NavLink>
        <NavLink className="nav-link item" to="/song">Song</NavLink>
      </nav>
    </header>

  );
}