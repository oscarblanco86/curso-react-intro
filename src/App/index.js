import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from "./../TodoContext";

// let defaultTodos = [
//   { text: 'picar Cebolla' = {'} isCompleted: true },
//   { text: 'Cortar Tomate', isCompleted: false },
//   { text: 'Otra cosa', isCompleted: true },
//   { text: 'Otra cosa 2', isCompleted: false },
//   { text: 'algo por hacer', isCompleted: true },
// ];
// localStorage.setItem('TODOS_V1',defaultTodos);
// localStorage.removeItem('TODOS_V1');


// let defaultTodos = [
//   { text: 'picar Cebolla', isCompleted: true },
//   { text: 'Cortar pepino', isCompleted: false },
//   { text: 'Otra cosa', isCompleted: true },
//   { text: 'Otra cosa 2', isCompleted: false },
//   { text: 'algo por hacer', isCompleted: true },
// ];
// const stringyfiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1',stringyfiedTodos);

function App() {
  
  
    return (
      <TodoProvider>
        <AppUI />

      </TodoProvider>
    );
}

export default App;
