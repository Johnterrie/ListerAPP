import React, { useState } from "react";
import "./list.css";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([{ text: inputValue, isCompleted: false }, ...todos]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];

    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

  return (
    <div>
      <main className="list-container">
        <input
          className="input"
          type="text"
          placeholder="Add a Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" onClick={addTodo}>
          Add
        </button>
        <ul className="list-ul">
          {todos.map((todo, index) => (
            <li
              className="list-item"
              onClick={(e) => {
                handleClick(e)}}
              onContextMenu={(e) => {
                e.preventDefault();
                removeTodo(index);
              }}
              key={index}
            >
              {todo.isCompleted ? <s>{todo.text}</s> : todo.text}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default List;
