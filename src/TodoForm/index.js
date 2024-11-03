import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)

    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                onChange={onChange}
                value={newTodoValue}
                placeholder="Otra cosa por hacer"
            />
            <button 
                type="" 
                className="TodoForm-Button TodoForm-Button--cancel" 
                onClick={onCancel}>cancel
            </button>
            <button 
                type="submit" 
                className="TodoForm-Button TodoForm-Button--add" 
                onClick={onSubmit}>add
            </button>
        </form>
    )
}

export { TodoForm }