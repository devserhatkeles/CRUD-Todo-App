import React, { useState, useEffect } from "react";
import "./styles/App.scss";
const NewItem = React.lazy(() => import("./components/Form/NewItem"));
const ItemList = React.lazy(() => import("./components/List/ItemList"));
const Form = React.lazy(() => import("./components/Form/Form"));
const UpdateItem = React.lazy(() => import("./components/Form/UpdateItem"));
const List = React.lazy(() => import("./components/List/List"));

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = function (enteredValue) {
    if (!enteredValue) return;
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({
        text: enteredValue.trim(),
        id: Math.random().toString(),
      });
      return updatedTodos;
    });
  };

  const deleteTodoHandler = function (todoId) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  //EDIT
  const startEditHandler = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleEditChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div className="container">
      <Form>
        {isEditing ? (
          <UpdateItem
            editHandler={setIsEditing}
            currentTodo={currentTodo}
            handleEditFormSubmit={handleEditFormSubmit}
            handleEditChange={handleEditChange}
          />
        ) : (
          <NewItem addTodo={addTodoHandler} />
        )}
      </Form>
      <List itemsLength={todos.length}>
        <ItemList
          items={todos}
          deleteTodo={deleteTodoHandler}
          startEditHandler={startEditHandler}
        />
      </List>
    </div>
  );
}

export default App;
