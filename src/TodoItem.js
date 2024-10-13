import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.isCompleted && "Icon-check--active"}`} 
          onClick={props.onComplete}
          >V
        </span>
        <p 
          className={`TodoItem-p ${props.isCompleted && `TodoItem-p--complete`}`}>{props.text}</p>
        <span 
          className={`Icon Icon-delete`}
          onClick={props.onDelete}
          >X</span>
      </li>
    );
  }

export { TodoItem };