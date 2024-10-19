import React, { useEffect, useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './runner-logoa.jpg';
import { Link } from 'react-router-dom';
import AuthUser from './AuthUser'; 

function Header({ onLogout }) {
  const { http, getToken, logout } = AuthUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      fetchUserDetail();
    }
  }, [getToken]);

  const fetchUserDetail = () => {
    http.get('/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Navbar brand and toggle */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Main Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="createpost">Car</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="carlist">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="showproduct">Reserved</Link>
              </li>
            </ul>

            {/* Auth Links or User Info */}
            <div className="d-flex auth-links">
              {user ? (
                <>
                  <span className="nav-link">Welcome, {user.name}</span>
                  <span className="nav-link">{user.email}</span>
                  <button className="btn btn-link nav-link" onClick={() => {
                    logout();
                    setUser(null); // Clear user info on logout
                    if (onLogout) onLogout();
                  }}>Logout</button>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/register">Sign Up</Link>
                  <Link className="nav-link" to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Bootstrap JS bundle */}
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Header;