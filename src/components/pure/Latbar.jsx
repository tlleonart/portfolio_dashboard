import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../assets/Foto.jpg";
import "../../styles/latbar.scss";
import { NavLink } from "react-router-dom";

const Latbar = () => {
  let activeStyle = {
    borderLeft: "3px solid gray",
    paddingLeft: "10px",
  };

  return (
    <div className="latbar">
      <div className="latbar__user">
        <img
          className="latbar__user__thumbnail"
          src={thumbnail}
          alt="user-thumbnail"
        />
        <h2 className="latbar__user__username">Tomás Lleonart</h2>
      </div>
      <nav className="latbar__nav">
        <ul className="latbar__nav__ul">
          <li className="latbar__nav__ul__li">
            <NavLink
              className="latbar__nav__ul__li__navlink"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard{" "}
            </NavLink>
          </li>
          <li className="latbar__nav__ul__li">
            <NavLink
              className="latbar__nav__ul__li__navlink"
              to="database"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Base de Datos{" "}
            </NavLink>
          </li>
          <li className="latbar__nav__ul__li">
            <NavLink
              className="latbar__nav__ul__li__navlink"
              to="actions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Acciones{" "}
            </NavLink>
          </li>
          <li className="latbar__nav__ul__li">
            <NavLink
              className="latbar__nav__ul__li__navlink"
              to="config"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Configuración{" "}
            </NavLink>
          </li>
          <li className="latbar__nav__ul__li">
            <NavLink
              className="latbar__nav__ul__li__navlink"
              to="todos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Tareas{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Latbar.propTypes = {};

export default Latbar;
