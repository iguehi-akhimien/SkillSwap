import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { clearAuth } from "../store/authSlice"; // Import the clearAuth action

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    dispatch(clearAuth()); // Dispatch clearAuth action
    navigate("/signup-login"); // Redirect to signup-login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" style={{ marginLeft: "20px" }}>
        <Link className="navbar-brand" to="/">
          SkillSwap {user && ` - ${user.username}`}{" "}
          {/* Display username if logged in */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup-login">
                    Signup/Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chat">
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/matchmaking">
                    Matchmaking
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
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
