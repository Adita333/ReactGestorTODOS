import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";


function TodoForm() {

    const {setOpenModal, addTodo} = React.useContext(TodoContext);

    const [newTodo, setNewTodo] = React.useState('');

    const submit = (event)=> {
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    };

    const cancel = ()=> {
        setOpenModal(false);
    };

    const change = (event)=>{
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit = {submit}> 
            <label>Agregre su nuevo TODO</label>
            <textarea
                placeholder=" Nuevo TODO"
                value={newTodo}
                onChange={change}
            />

            <div className=" TodoForm-buttonContainer "> 
                <button className="TodoFormAceptar TodoForm-button " type = " submit ">
                    Agregar
                </button>

                <button className="TodoFormCancelar TodoForm-button " type="button" onClick = { cancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };