import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          const { id, text, completed } = todo;
          return (
            <Todo
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              key={id}
              text={text}
              completed={completed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
