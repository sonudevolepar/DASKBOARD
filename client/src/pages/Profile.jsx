import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="page">
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
}