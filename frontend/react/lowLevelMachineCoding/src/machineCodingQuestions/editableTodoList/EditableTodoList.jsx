// able to solve it 90% ---> but when it comes to senior level solution, i can change these states in one object state .

import "./style.css";
import { useTodo } from "./context/useTodo";
import { useEffect, useRef, useState } from "react";

function EditableTodoList() {
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const inputRef = useRef();

  const { addTodo, editTodo, deleteTodo, todos } = useTodo();

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEditTodo = (id) => {
    setTodoId(id);
    setIsEditing(true);

    const currentTodo = todos.find((t) => t.id === id);
    setTodo(currentTodo?.todo || "");
  };

  const handleSave = () => {
    editTodo(todoId, todo);
    setTodo("");
    setTodoId(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h4>Editable Todo List</h4>

      <div>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef}
        />

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button
            onClick={() => {
              addTodo(todo);
              setTodo("");
            }}
          >
            Add
          </button>
        )}
      </div>

      {todos.map((item) => (
        <div key={item.id} className="todo">
          <span>{item.todo}</span>
          <div>
            <button
              onClick={() => handleEditTodo(item.id)}
              disabled={isEditing}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditableTodoList;
