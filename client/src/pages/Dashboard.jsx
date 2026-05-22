import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Welcome: {user?.email}</p>
    </div>
  );
}