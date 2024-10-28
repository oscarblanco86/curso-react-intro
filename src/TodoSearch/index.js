import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {
  
  return (
    <input 
      placeholder="Search in your TODOs" 
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
      }}
      />
  );
}

  export { TodoSearch };