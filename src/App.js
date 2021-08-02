import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    filterHandler();
  },[todos, status]);

  useEffect(() => {
    setItemsLeft(calcItemsLeft());
  })

  const calcItemsLeft = () => {
    let x = 0;
    for (const item of todos) {
      if (item.completed === false) {
        x += 1;
      }
    }
    return x;
  }
  

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>
          Todo List
        </h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      setItemsLeft={setItemsLeft}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} itemsLeft={itemsLeft} setItemsLeft={setItemsLeft}/>
      <h2>{itemsLeft} items left</h2>
    </div>
  );
}

export default App;
