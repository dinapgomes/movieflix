import { Link } from "react-router-dom";
import "./NavBar.css";
import { Navbar } from "./styles";

const NavBar = () => {
  return (
    <Navbar>
      <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
        <h2>MovieFlix</h2>
      </Link>
    </Navbar>
  );
};

export default NavBar;
