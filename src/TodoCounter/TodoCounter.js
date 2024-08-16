import './TodoCounter.css';
import { TodoContext } from "../TodoContext/TodoContext";
import React from 'react';

function TodoCounter() {

  const {completedTodos, totalTodos, loading} = React.useContext(TodoContext);

  let message;

  if(loading === true){
    message = 'Cargando...';
  }
  else if (totalTodos === 0) {
    message = 'No hay tareas pendientes';
  } else if (completedTodos === totalTodos) {
    message = 'Todas las tareas completadas';
  } else {
    message = `${completedTodos}/${totalTodos} Tareas Completadas`;
  }

  return (
    <h1>
      {message}
    </h1>
  );
}

export { TodoCounter };
