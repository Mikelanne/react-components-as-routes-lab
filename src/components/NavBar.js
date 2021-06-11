import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        exact style={link} 
        activeStyle={{
          background: 'darkGreen'
        }}
        to="/">
          Home
        </NavLink>
      <NavLink 
        exact style={link} 
        activeStyle={{
          background: 'darkGreen'
        }}
        to="/movies">
          Movies
        </NavLink>
      <NavLink 
        exact style={link} 
        activeStyle={{
          background: 'darkGreen'
        }}
        to="/directors">
          Directors
      </NavLink>
      <NavLink 
        exact style={link} 
        activeStyle={{
          background: 'darkGreen'
        }}
        to="/actors">
          Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
