

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Navbar = ({ title = "CMS" }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand">{title}</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/myregistertopics">
                    <a className="nav-link">All Register Topics</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/registertopic">
                    <a className="nav-link">Topic Registration</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addgroup">
                    <a className="nav-link">ADD STUDENT GROUP</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/alladdgroup">
                    <a className="nav-link">ADD GROUPS</a>
                  </Link>
                </li>
                
                <li
                  className="nav-item"
                  onClick={() => {
                    setUser(null);
                    localStorage.clear();
                    toast.success("Logged out.");
                    navigate("/login", { replace: true });
                  }}
                >
                  <button className="btn btn-danger">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/home">
                    <a className="nav-link">home</a>
                  </Link>
                </li>






              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
