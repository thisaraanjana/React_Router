import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      This is Home page
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>go to profile page</button>
    </div>
  );
}
