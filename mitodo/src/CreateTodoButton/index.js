import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton () {

const onClickButton = (msg) => {
  alert(msg)
}

  return(
    <button 
    className="CreateTodoButton"
    onClick={() => onClickButton('aqui se deberia abrir el modal')}
    
    >

      +

    </button>
  )
}

export default CreateTodoButton;