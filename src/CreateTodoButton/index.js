import './CreateTodoButton.css';

function CreateTodoButton({isOpenModal, setOpenModal}) {
    return (
      <button 
        className="CreateTodoButton" 
        onClick={ () => setOpenModal(!isOpenModal) }
      >+</button>
    );
  }

  export { CreateTodoButton };