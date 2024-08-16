import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className=" TodoItem">
      <CompleteIcon
        completed={props.completed}
        onCompletar={props.onCompletar}
      />
      {/*<span 
              className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
              onClick = { props.onCompletar}
      >
        V
      </span>*/}
      <p className={`TodoItem-t ${props.completed && "TodoItem-t--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
        onBorrar={props.onBorrar}
      />
      {/*<span 
        className="Icon Icon-delete"
        onClick = { props.onBorrar}
      >
        X
      </span>*/}
    </li>
  );
}

export { TodoItem };