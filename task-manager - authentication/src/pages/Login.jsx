import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  generateFakeJWT,
  getStoredUser,
} from "../authUtils";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(true);

  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] =
    useState("");

  useEffect(() => {
    const storedUser = getStoredUser();

    if (storedUser) {
      setUsername(storedUser.username);
    }
  }, []);

  const checkPasswordStrength = (value) => {
    setPassword(value);

    if (!value) {
      setPasswordStrength("");
      return;
    }

    if (value.length < 6) {
      setPasswordStrength("Weak");
    } else if (
      value.length >= 6 &&
      value.length < 10
    ) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    const token = generateFakeJWT(
      username.trim()
    );

    if (rememberUser) {
      localStorage.setItem(
        "taskUser",
        JSON.stringify({
          username: username.trim(),
          rememberUser: true,
        })
      );

      localStorage.setItem(
        "jwtToken",
        token
      );
    } else {
      sessionStorage.setItem(
        "taskAccess",
        "true"
      );

      sessionStorage.setItem(
        "jwtToken",
        token
      );
    }

    const destination =
      location.state?.from?.pathname ||
      "/dashboard";

    navigate(destination, {
      replace: true,
    });
  };

  return (
    <div className="login-page">
      <form
        className="login-card"
        onSubmit={handleLogin}
      >
        <h1>Task Manager</h1>

        <p className="login-subtitle">
          Authentication System
        </p>

        <label>
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

        <label>
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) =>
            checkPasswordStrength(
              event.target.value
            )
          }
        />

        {passwordStrength && (
          <p
            className={`password-strength ${passwordStrength.toLowerCase()}`}
          >
            Password Strength:{" "}
            {passwordStrength}
          </p>
        )}

        <label className="remember-option">
          <input
            type="checkbox"
            checked={rememberUser}
            onChange={(event) =>
              setRememberUser(
                event.target.checked
              )
            }
          />

          Remember Me
        </label>

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