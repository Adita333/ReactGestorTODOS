import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { TodoLoading} from '../TodoLoading/TodoLoading';
import {TodoError} from '../TodoError/TodoError.js';
import {TodoEmpty} from '../TodoEmpty/TodoEmpty.js';
import {Modal} from '../Modal/Modal.js';
import {TodoForm} from '../TodoForm/TodoForm.js';
import { TodoContext } from "../TodoContext/TodoContext";
import React from 'react';

function Interfaz(){

  const {loading, error, totalTodos, searchedTodos,completarTodo, borrarTodo, openModal,  } = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && 
            <>
              <TodoLoading/>
              <TodoLoading/>
              <TodoLoading/>
              <TodoLoading/>
            </>
          }


          {error && <TodoError/>}
          {(!loading && totalTodos === 0) && <TodoEmpty/>}
          
          
          {searchedTodos.map(todo => (
            <TodoItem 
              text={todo.text}
              completed={todo.completed}
              onCompletar={() => completarTodo(todo.text)}
              onBorrar={() => borrarTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodo/>

        {openModal && (
          <Modal>
          <TodoForm/>
          </Modal>         
        )}
    
        </>
      );   
}

export {Interfaz};