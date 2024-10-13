// import { TodoItem } from './TodoItem';


function TodoList(props) {
    
    return (
        // todos.map(todo => (
        //         <TodoItem 
        //             key={todo.text} 
        //             text={todo.text} 
        //             isCompleted={todo.isCompleted}
        //             todos={todos} 
        //             setTodos={setTodos} 
        //             onComplete={() => completeTodo}
        //             onDelete={() => deleteTodo}
        //         />
        //     )
        // )
           
        <ul className='TodoList'>{props.children}</ul> 
    );
}

export { TodoList };

