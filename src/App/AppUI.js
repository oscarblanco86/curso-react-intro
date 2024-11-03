import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
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
          error,
          openModal,
          setOpenModal
        }) => (
          
          <>
              <TodoCounter
                completed={completedTodos}
                total={totalTodos} />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />
              <TodoList>
                {loading && (
                  <>
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
                  )
                )}
              </TodoList>
              
              <CreateTodoButton 
                isOpenModal = {openModal}
                setOpenModal = {setOpenModal} 
              />

              {openModal &&(
                <Modal>
                  <TodoForm />
                </Modal>
              )}
            </>
          )}
      </TodoContext.Consumer>
    </>
  );
}

export {AppUI};