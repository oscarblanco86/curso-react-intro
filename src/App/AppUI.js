import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "./../TodoContext";

function AppUI() {
    return (
    <>
      <TodoContext.Consumer>
        {({
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          loading,
          error
        }) => (
          
          <>
              <TodoCounter
                completed={completedTodos}
                total={totalTodos} /><TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} /><TodoList>
                  {loading && (
                    <>
                    console.log("Here",TodoContext);
                      <TodosLoading />
                      <TodosLoading />
                      <TodosLoading />
                    </>
                  )}
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                  {searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      isCompleted={todo.isCompleted}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)} />
                  ))}
              </TodoList><CreateTodoButton />
            </>
          )}
      </TodoContext.Consumer>
    </>
  );
}

export {AppUI};