import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter((val) => {
        return val.id !== todo.id;
      })
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((comp) => {
        if (comp.id === todo.id) {
          return { ...comp, completed: !comp.completed };
        }
        return comp;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div>
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
