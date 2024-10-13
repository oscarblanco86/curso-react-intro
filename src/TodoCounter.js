import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
      <h1 
        cassName="TodoCounter" 
        onChange={(event) => console.log('todo counter updated',total,completed)}>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1> 
    );
  }

  export { TodoCounter }; 