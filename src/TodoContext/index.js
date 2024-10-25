import React from "react";
// import { useLocalStorage } from "./useLocalStorage.js";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage('TODOS_V1',[]);
      
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(obj => obj.isCompleted).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.toLowerCase().includes(searchText);
      });
    
      
      const completeTodo = (text) => {
        const newTodos =[...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted ;
        saveTodos(newTodos);
      }
      const deleteTodo = (text) => {
        const newTodos =[...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>

        );
}

export { TodoContext, TodoProvider };