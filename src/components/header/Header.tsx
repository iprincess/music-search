import './Header.scss';
import React from 'react';
import { NavLink } from "react-router-dom";
import { ITunesBadgeIcon } from '../icons/Icons';

export const Header = () => {
  return (
    <header className="flex-container flex-col center-items">   
      <ITunesBadgeIcon /> 
      <h1>Apple Music Search </h1>  
      <nav className="nav flex-container ">
        <h3 className="item">Search by:</h3>
        <NavLink className="nav-link item" to="/artist">Artist</NavLink>
        <NavLink className="nav-link item" to="/album">Album</NavLink>
        <NavLink className="nav-link item" to="/song">Song</NavLink>
      </nav>
    </header>
  );
}