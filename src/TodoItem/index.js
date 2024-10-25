import { CompleteIcon, DeleteIcon } from '../Icons/';
import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon 
          completed={props.isCompleted}
          onComplete={props.onComplete}
        />
        <p 
          className={`TodoItem-p ${props.isCompleted && `TodoItem-p--complete`}`}>{props.text}</p>
        <DeleteIcon onDelete={props.onDelete}  />
      </li>
    );
  }

export { TodoItem };