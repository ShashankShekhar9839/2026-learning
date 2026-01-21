import "./style.css";
import { useTodo } from "./context/useTodo";
import { useState } from "react";
import { useRef } from "react";

function EditableTodoList() {
  const [todo, setTodo] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef();

  const { addTodo, editTodo, deleteTodo, todos } = useTodo();

  const handleEditTodo = (id) => {
    setIsEditing(true);
    editTodo(id);
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
          <button>Save</button>
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
      {todos?.map((item) => (
        <div key={item.id} className="todo">
          <span>{item.todo}</span>
          <div>
            <button onClick={() => handleEditTodo(item.id)}>Edit</button>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditableTodoList;
