import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks({
  tasks,
  onDelete,
  onComplete,
}) {
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "All" ||
      (filter === "Pending" && !task.completed) ||
      (filter === "Completed" && task.completed);

    const matchesCategory =
      category === "All" ||
      task.category === category;

    const matchesSearch =
      task.header
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    return (
      matchesStatus &&
      matchesCategory &&
      matchesSearch
    );
  });

  return (
    <div className="page">
      <h1>Tasks</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">
            Completed
          </option>
        </select>

        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>
            Try changing the filters or create a
            new task.
          </p>
        </div>
      ) : (
        <div className="task-grid">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;