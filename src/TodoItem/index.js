import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
  const importanceLevel = {
    'poca':"😴",
    'moderada':"😊",
    'gran':"🤩"
  }
  return (
    <li className='TodoItem'>
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <span className='importanceLevel'>{importanceLevel[props.importance]}</span>
      <p className={props.completed?"done":"undone"}>{props.text}</p>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  ); 
}

export { TodoItem };
