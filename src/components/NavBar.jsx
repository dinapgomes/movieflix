import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
        <h2>MovieFlix</h2>
      </Link>
    </div>
  );
};

export default NavBar;
