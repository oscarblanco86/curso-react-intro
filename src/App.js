import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

let defaultTodos = [
  { text: 'Cortar Cebolla', isCompleted: true },
  { text: 'Cortar Tomate', isCompleted: false },
  { text: 'Otra cosa', isCompleted: true },
  { text: 'Otra cosa 2', isCompleted: false },
  { text: 'Otra cosa 3', isCompleted: true },
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(obj => obj.isCompleted).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.toLowerCase().includes(searchText);
  })
  const completeTodo = (text) => {
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    );
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted ;
    setTodos(newTodos);
    console.log(newTodos);
  }
const deleteTodo = (text) => {
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
    console.log(newTodos);
  }
  // console.log('Los usuario buscan todos de ' + searchValue);
  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text} 
            text={todo.text} 
            isCompleted={todo.isCompleted}
            // todos={todos} 
            // setTodos={setTodos} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
