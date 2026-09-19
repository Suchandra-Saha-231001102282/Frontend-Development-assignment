import TaskCard from "../components/TaskCard";

function CompletedTasks({
  tasks,
  onDelete,
}) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <div className="empty-state">
          <h3>No completed tasks</h3>
          <p>
            Complete a task and it will appear here.
          </p>
        </div>
      ) : (
        <div className="task-grid">
          {completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;