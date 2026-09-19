import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!header.trim() || !description.trim()) {
      return;
    }

    const now = new Date();

    const newTask = {
      id: Date.now(),
      header: header.trim(),
      description: description.trim(),
      priority,
      category,
      raisedDate: now.toLocaleString(),
      dueDate: "28 August 2026",
      status: "Raised",
      completed: false,
    };

    onAddTask(newTask);

    setHeader("");
    setDescription("");
    setPriority("Medium");
    setCategory("Academic");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Task Header
      </label>

      <input
        type="text"
        value={header}
        onChange={(event) =>
          setHeader(event.target.value)
        }
        placeholder="Enter task title"
      />

      <label>
        Task Description
      </label>

      <textarea
        value={description}
        onChange={(event) =>
          setDescription(event.target.value)
        }
        placeholder="Enter task description"
        rows="5"
      />

      <label>
        Priority
      </label>

      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value)
        }
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <label>
        Category
      </label>

      <select
        value={category}
        onChange={(event) =>
          setCategory(event.target.value)
        }
      >
        <option value="Academic">Academic</option>
        <option value="Personal">Personal</option>
      </select>

      <button
        type="submit"
        className="primary-button"
      >
        Create Task
      </button>
    </form>
  );
}

export default TaskForm;