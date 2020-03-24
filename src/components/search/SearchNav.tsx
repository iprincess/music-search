import './SearchNav.scss';
import React from 'react';
import { NavLink, useLocation, useParams } from "react-router-dom";

export const SearchNav = () => {
	const location = useLocation();
	const params = useParams();

	console.log(location);
	console.log(params);

	const getTo = (path) => {
		return path;
	}

  return (
		<nav className="nav search-nav flex-container center-items center-content">
			<span>Search by:</span>
			<NavLink className="nav-link" to={getTo("/artist")}>Artist</NavLink>
			<NavLink className="nav-link" to={getTo("/album")}>Album</NavLink>
			<NavLink className="nav-link" to={getTo("/song")}>Song</NavLink>
		</nav>
  );
}