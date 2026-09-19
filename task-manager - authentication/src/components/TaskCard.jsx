import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onComplete }) {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3>{task.header}</h3>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p>{task.description}</p>

      <div className="task-meta">
        <span>
          Category: {task.category}
        </span>

        <span>
          Status: {task.status}
        </span>
      </div>

      <div className="task-dates">
        <span>
          Raised: {task.raisedDate}
        </span>

        <span>
          Due: {task.dueDate}
        </span>
      </div>

      <div className="task-actions">
        <Link
          to={`/tasks/${task.id}`}
          className="view-button"
        >
          View
        </Link>

        {!task.completed && (
          <button
            onClick={() => onComplete(task.id)}
            className="complete-button"
          >
            Complete
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;