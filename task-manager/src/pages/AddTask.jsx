import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function AddTask({ onAddTask }) {
  const navigate = useNavigate();

  const handleAddTask = (task) => {
    onAddTask(task);
    navigate("/tasks");
  };

  return (
    <div className="page">
      <h1>Add Task</h1>

      <p className="page-subtitle">
        Create a new task.
      </p>

      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default AddTask;