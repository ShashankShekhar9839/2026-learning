import { TodoProvider } from "./context/useTodo";
import EditableTodoList from "./EditableTodoList";

function EditableTodoWrapper() {
  return (
    <TodoProvider>
      <EditableTodoList />
    </TodoProvider>
  );
}

export default EditableTodoWrapper;
