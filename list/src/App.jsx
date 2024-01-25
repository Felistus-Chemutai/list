import { useState } from "react";
import Adder from "./components/Adder";
import TodoList from "./components/TodoList";
import "./App.css"
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "wine-testing",
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: "zip-lining ",
      completed: false,
      deleted: false,
    },
  ]);

  function handleAdd(inputText) {
    console.log(inputText);
    let newId = 1;
    if(todos.length > 0) {
      newId = todos.length + 1;
    }
    const newTodo = {
      id: newId,
      title: inputText,
      completed: false,
      deleted: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos)
  }

  function handleDelete(id){
    console.log(id)
    const todosWithoutDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(todosWithoutDeleted);
  }
  return (
    <div className="app">
      <h1>To do list</h1>
      <Adder onAdd={handleAdd} />
      <TodoList todos={todos}  onDelete={handleDelete}/>
    </div>
  );
}

export default App;