import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  
  return (
    // <p>Cargando...</p>
    <div className='TodosLoading-container'>
      <span className='LoadingTodo-completeIcon'></span>
      <p className='LoadingTodo-text'></p>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export { TodosLoading };