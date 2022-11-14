import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import UserProfile from './pages/UserProfile.js'

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  //log user out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => onLogout())
      .then(() => {
        navigate("/");
      }).then(setOpen(!open));
  }

  //set the drop down menu to open
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [ openProfile, setOpenProfile ] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(true)
  };

  const handleUserClose = () => {
    setOpenProfile(false);
  };


  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <span className="only">Only</span>
        <span className="jams">Jams.</span>
      </Link>
      {user && (
        <ul>
          <input
            className="friend-searcher"
            placeholder="Find New Friends?"
            ></input>
        </ul>
      )}
      <ul>
        {user ? (
          <>
            <img
              className="nav-profile-pic"
              src={user.profile_picture}
              alt={user.first_name}
              />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <HiMenu className="dropdown" onClick={handleOpen} />
            {open ? (
              <div className="menu">
                  <div className="dropdown-container">
                  <button className="profile-btn" onClick={handleOpenProfile}>Profile</button>
                  {openProfile&&(<UserProfile  handleUserClose={handleUserClose} user={user}/>)}
                  <button className="logout" onClick={handleLogout}>
                    Log Out
                  </button>
                  </div>
                </div>
            ) : null}
          </>
        ) : (
          <>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/signup">Sign Up</CustomLink>
          </>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
