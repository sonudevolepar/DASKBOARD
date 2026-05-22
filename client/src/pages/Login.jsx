import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../services/api";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(
        "/auth/login",
        formData
      );

      dispatch(login(data.user));

      alert(data.message);

      navigate("/dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
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

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}