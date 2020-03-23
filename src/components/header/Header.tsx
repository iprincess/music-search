import './Header.scss';
import React from 'react';
import { NavLink } from "react-router-dom";
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="flex-container flex-col center-items">   
      <Logo /> 
      <h1>Apple Music Search </h1>  
      <nav className="nav flex-container center-items">
        <span>Search by:</span>
        <NavLink className="nav-link" to="/artist">Artist</NavLink>
        <NavLink className="nav-link" to="/album">Album</NavLink>
        <NavLink className="nav-link" to="/song">Song</NavLink>
      </nav>
    </header>
  );
}