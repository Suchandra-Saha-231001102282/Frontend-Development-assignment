import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  getStoredUser,
  logoutUser,
} from "../authUtils";

function Navbar() {
  const navigate = useNavigate();
  const user = getStoredUser();

  const logout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Task Manager</h2>
      </div>

      <div className="nav-user">
        {user && (
          <span>
            Welcome, {user.username}
          </span>
        )}
      </div>

      <div className="nav-links">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          Tasks
        </NavLink>

        <NavLink to="/tasks/add">
          Add Task
        </NavLink>

        <NavLink to="/completed">
          Completed
        </NavLink>

        <button
          onClick={logout}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;