import { Interfaz } from './Interfaz';
import React from 'react';
import { TodoProvider } from "../TodoContext/TodoContext";

function App() {

  return(
    <TodoProvider>
      <Interfaz/>
    </TodoProvider>
  );
  
}

export default App;

/*const defaultTodos = [
  { text: 'Limpiar', completed: true },
  { text: 'Curso React', completed: false },
  { text: 'Cocinar', completed: true },
  { text: 'Wuii', completed: false },
];

/*localStorage.setItem( 'Todosv1', JSON.stringify(defaultTodos));
localStorage.removeItem('Todosv1');*/