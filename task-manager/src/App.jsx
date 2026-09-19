import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/Protectedroute";

import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      task,
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  const completeTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: true,
              status: "Closed",
            }
          : task
      )
    );
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />

              <main className="main-content">
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <Dashboard tasks={tasks} />
                    }
                  />

                  <Route
                    path="/tasks"
                    element={
                      <Tasks
                        tasks={tasks}
                        onDelete={deleteTask}
                        onComplete={completeTask}
                      />
                    }
                  />

                  <Route
                    path="/tasks/add"
                    element={
                      <AddTask
                        onAddTask={addTask}
                      />
                    }
                  />

                  <Route
                    path="/tasks/:id"
                    element={
                      <TaskDetails
                        tasks={tasks}
                      />
                    }
                  />

                  <Route
                    path="/completed"
                    element={
                      <CompletedTasks
                        tasks={tasks}
                        onDelete={deleteTask}
                      />
                    }
                  />
                </Routes>
              </main>

              <Footer />
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;