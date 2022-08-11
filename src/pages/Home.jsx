import React from "react";
import Greetings from "../components/pure/Greetings";
import "../styles/home.scss";
import TodosContainer from "../components/containers/TodosContainer";
import TodoForm from "../components/pure/forms/TodoForm";

const Home = () => {
  // TODO: Pasar nombre por params.

  return (
    <div className="home">
      <Greetings />
      <TodoForm />
      <TodosContainer />
    </div>
  );
};

export default Home;
