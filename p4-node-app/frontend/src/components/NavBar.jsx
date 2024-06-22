import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('signedIn');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav>
      <div className="topNav">
        <div className="friendster-logo">
          <NavLink to="/">
            <img
              id="f_logo"
              alt="Friendster"
              src="https://web.archive.org/web/20090322215714/http://images.friendster.com/images/friendster_nav_logo.png"
              border="0"
              width="130"
              height="18"
            />
          </NavLink>
        </div>

        <div className="right-nav">
          <NavLink className="right-nav-links" to="/settings">
            Settings
          </NavLink>
          <span className="globnav_pipe"> | </span>
          <a className="right-nav-links" href="#" onClick={logout}>
            Log Out
          </a>
        </div>
      </div>

      <div className="mainNav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <NavLink to="/">Profile</NavLink>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Connections</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Classified</a>
          </li>
          <li>
            <a href="#">Find Friends</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
