import { ReactComponent as CheckSvg} from './check.svg'
import { ReactComponent as DeleteSvg} from './delete.svg'
import './TodoIcon.css';

function TodoIcon ({type, color,onClick }){


    const iconType = {
        "check" : (color)=> <CheckSvg className='Icon-svg' fill = {color}/>,
        "delete" : (color)=> <DeleteSvg className='Icon-svg' fill = {color}/>,
    }

    return(
        <span
            className= { `Icon Icon-${type} `}
            onClick = {onClick}
        >
            {iconType[type](color)}
        </span>
    )
}

export { TodoIcon};