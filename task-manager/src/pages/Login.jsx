import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    sessionStorage.setItem("taskAccess", "true");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <form
        className="login-card"
        onSubmit={handleLogin}
      >
        <h1>Task Manager</h1>

        <p>
          Basic Login
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;