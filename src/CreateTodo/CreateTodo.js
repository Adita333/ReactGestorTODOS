import './CreateTodo.css'
import { TodoContext } from "../TodoContext/TodoContext";
import React from 'react';

function CreateTodo() {

  const { setOpenModal, } = React.useContext(TodoContext);

  return (
    <button
      className="CreateTodo"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >
      +
    </button>

  );
}

export { CreateTodo };