import React from "react";
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItems: saveTodos,
        loading,
        error,
      } = useLocalStorage('Todosv1', []);
 
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;

      const [ openModal, setOpenModal] = React.useState(false);
    
      const [searchValue, setSearchValue] = React.useState('');
    
      const searchedTodos = todos.filter(
        (todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      }
    
      const completarTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const borrarTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completarTodo,
            borrarTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};