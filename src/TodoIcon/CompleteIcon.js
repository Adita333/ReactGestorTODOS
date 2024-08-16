import React from "react";
import {TodoIcon} from './TodoIcon';

function CompleteIcon({completed, onCompletar}){
    return (
        <TodoIcon
            type = "check"
        color = {completed ? 'green' : 'gray'}
         onClick = { onCompletar}   
        />
    );
}
export { CompleteIcon};