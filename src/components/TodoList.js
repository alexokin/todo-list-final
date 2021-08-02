import React from 'react';
import Todo from './Todo';


export const TodoList = ({ todos,setTodos, filteredTodos, setItemsLeft, itemsLeft}) => {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} setItemsLeft={setItemsLeft} itemsLeft={itemsLeft}/>
                ))}
            </ul>
        </div>
    )
}
