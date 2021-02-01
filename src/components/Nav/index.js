import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import "./styles.css";
function newNav() {
  return (
    <div className="nav">
      <Nav>
        <Nav.Item>
          <Link to="/" className="nav-link">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/search" className="nav-link">
            Books
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default newNav;
