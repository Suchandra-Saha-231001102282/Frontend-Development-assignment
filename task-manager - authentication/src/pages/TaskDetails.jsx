import {
  Link,
  useParams,
} from "react-router-dom";

function TaskDetails({ tasks }) {
  const { id } = useParams();

  const task = tasks.find(
    (item) => item.id.toString() === id
  );

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>

        <Link to="/tasks">
          Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <h1>{task.header}</h1>

        <div className="detail-row">
          <strong>Description:</strong>
          <span>{task.description}</span>
        </div>

        <div className="detail-row">
          <strong>Priority:</strong>
          <span>{task.priority}</span>
        </div>

        <div className="detail-row">
          <strong>Category:</strong>
          <span>{task.category}</span>
        </div>

        <div className="detail-row">
          <strong>Raised Date & Time:</strong>
          <span>{task.raisedDate}</span>
        </div>

        <div className="detail-row">
          <strong>Due Date:</strong>
          <span>{task.dueDate}</span>
        </div>

        <div className="detail-row">
          <strong>Status:</strong>
          <span>
            {task.completed
              ? "Closed"
              : task.status}
          </span>
        </div>

        <Link
          to="/tasks"
          className="secondary-button"
        >
          ← Back to Tasks
        </Link>
      </div>
    </div>
  );
}

export default TaskDetails;