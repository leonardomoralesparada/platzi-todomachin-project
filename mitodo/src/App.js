import React, { Fragment } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
//import './App.css';

const todos = [
  {text:'cortar cebolla' ,completed: false},
  {text:'tomar el curso de intro a react', completed: false},
  {text:'llorar con la llorona', completed: true},
]


function App() {
  return (

  <Fragment>                   
    <TodoCounter/>

    <TodoSearch/>
    

    <TodoList>
    {todos.map(todo =>(
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
