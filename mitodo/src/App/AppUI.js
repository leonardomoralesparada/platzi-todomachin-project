import React,{Fragment} from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";

function AppUI ({

    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo


}) {
    return(

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
                     onComplete={() => completeTodo(todo.text)}
                     onDelete={() => deleteTodo(todo.text)}
                    />
                 ))}
                </TodoList>

                 <CreateTodoButton/>
  
             </Fragment>   
    )
}

export default AppUI;