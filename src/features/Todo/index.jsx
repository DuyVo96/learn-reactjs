import React, { useState } from "react";

import TodoList from "./components/TodoList";

const initTodoList = [
  {
    id: 1,
    title: "Eat",
    status: "new",
  },
  {
    id: 2,
    title: "Sleep",
    status: "completed",
  },
  {
    id: 3,
    title: "Code",
    status: "new",
  },
];
function TodoFeature(props) {
  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    // clone current array to the new one
    const newTodoList = [...todoList];
    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    newTodoList[idx] = newTodo;
    // update todo list
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
