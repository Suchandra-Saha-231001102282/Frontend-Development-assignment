import { Link } from "react-router-dom";

function Dashboard({ tasks }) {
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p className="page-subtitle">
        Manage your academic and personal tasks.
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Tasks</h3>
          <p>{pendingTasks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <Link
          to="/tasks/add"
          className="primary-button"
        >
          + Add New Task
        </Link>

        <Link
          to="/tasks"
          className="secondary-button"
        >
          View Tasks
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;