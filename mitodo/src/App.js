import React, { Fragment, useState } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
//import './App.css';

const defaulTodos = [
  {text:'cortar cebolla' ,completed: true},
  {text:'tomar el curso de intro a react', completed: false},
  {text:'llorar con la llorona', completed: true},
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

  return (

  <Fragment>                   
    <TodoCounter
    total={totalTodos}
    completed={completedTodos}

    />

    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    

    <TodoList>
    {searchTodos.map(todo =>(
        <TodoItem
         key={todo.text} 
         text={todo.text}
         completed={todo.completed}
         />
    ))}
    </TodoList>

    <CreateTodoButton/>
  
  </Fragment>   
  );
}

export default App;
