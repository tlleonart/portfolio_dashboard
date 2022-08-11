import React from "react";
import PropTypes from "prop-types";
import "../../styles/greetings.scss";

const Greetings = () => {
  // TODO: Recibir el nombre por props
  return (
    <header className="greetings">
      <h1 className="greetings__h1">Bienvenido Tommy!</h1>
    </header>
  );
};

Greetings.propTypes = {};

export default Greetings;
