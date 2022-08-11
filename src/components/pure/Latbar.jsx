import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../assets/Foto.jpg";
import "../../styles/latbar.scss";

const Latbar = () => {
  // TODO: Recibir los menúes disponibles desde la base de datos

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
          <li className="latbar__nav__ul__li">Dashboard</li>
          <li className="latbar__nav__ul__li">Base de Datos</li>
          <li className="latbar__nav__ul__li">Acciones</li>
          <li className="latbar__nav__ul__li">Configuración</li>
          <li className="latbar__nav__ul__li">Tareas</li>
        </ul>
      </nav>
    </div>
  );
};

Latbar.propTypes = {};

export default Latbar;
