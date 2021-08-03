import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: Math.random() * 1000, text: input, completed: false },
    ]);
    console.log(todos);

    setInput("");
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //get from local
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="container">
      <h1>Niel's Todo List</h1>
      <div className="row add-content">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            value={input}
            onChange={handleChange}
            className=""
            placeholder="Add a todo"
          />
          <button className="todo-btn">Add todo</button>
        </form>
      </div>
      <div className="row body-content">
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
};

export default TodoForm;
