import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './supervisor/nav_bar.css';
import logo from './supImages/nav_logo.png'

import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';


const Navbar = () => {

  const {user, setUser} = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const navigate = useNavigate();

  return (
    // #303666
    <nav className="navbar navbar-expand-lg color">
    <div className="container-fluid">
    
      <Link className='navbar-brand title-color' to="/">  <img src={logo} alt="logo" width="60%"/></Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
                <Link className='nav-link item-color' to="/request-list">Students Request</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link item-color' to="/topics-request">Topics Request</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link item-color' to="/topics-list">Topics List</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link item-color' to="/marking-schema">Marking Schema</Link>
              </li>
              <li className="nav-item" onClick={() => {
                setUser(null);
                localStorage.clear();
                toast.success("Logged Out");
                navigate("/login", { replace: true });
              }}>
                <button className='btn btn-danger'>Logout</button>
              </li>
              
            </>
          ): (
            <>
              <li className="nav-item">
                <Link className='nav-link item-color' to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className='nav-link item-color' to="/register">Register</Link>
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