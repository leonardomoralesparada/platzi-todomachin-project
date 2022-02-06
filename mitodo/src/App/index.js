import React, {useState } from "react";
import AppUI from "./AppUI";

const defaulTodos = [
  {text:'cortar cebolla' ,completed: false},
  {text:'tomar el curso de intro a react', completed: false},
  {text:'llorar con la llorona', completed: false},
]


function App() {

  const [todos,setTodos] = useState(defaulTodos)
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if(!searchValue.length >= 1){
    searchTodos = todos;
  }else{
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo =  (text) => {
     const todoIndex = todos.findIndex(todo =>  todo.text === text);
     const newTodos = [...todos];
     newTodos[todoIndex].completed = true;
     setTodos(newTodos);
      
  }

  const deleteTodo =  (text) => {
    const todoIndex = todos.findIndex(todo =>  todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex , 1)
    setTodos(newTodos);
     
 }

  return (

    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchTodos={searchTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    /> 

  );
}

export default App;
