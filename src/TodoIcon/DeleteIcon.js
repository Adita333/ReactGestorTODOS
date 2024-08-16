import React from "react";
import {TodoIcon} from './TodoIcon'

function DeleteIcon({onBorrar}){
    return (
        <TodoIcon
            type = "delete"
            color = "gray"
            onClick = {onBorrar}
        />
    );
}
export { DeleteIcon};