import React from "react";
import './TodoCounter.css'

function TodoCounter ({total,completed}) {
    return(
        <h2 className="TodoCounter">Has Completado {completed} a {total} TODOs</h2>
    )
}

export default TodoCounter;