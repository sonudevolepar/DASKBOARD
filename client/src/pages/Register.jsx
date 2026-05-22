import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/register", formData);

      alert(data.message || "Register Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Register Failed"
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
          }}
        >
          Register
        </h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}