import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email }));
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="form-container">
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px",
            color: "#fff",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleLogin}>

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD INPUT */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}