import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import UserProfile from "./pages/UserProfile.js";
import User from './pages/User.js'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Messages } from './pages/Messages.js';



export default function Navbar({ user, onLogout, setUser }) {
  const [allUsers, setAllUsers] = useState([]);
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [userSearchOpen, setUserSearchOpen] = useState(false);

  const navigate = useNavigate();
  //snag all users
  useEffect(() => {
    // auto-login
    fetch("/users")
    .then((res) => res.json())
    .then((data) => setAllUsers(data));
  }, []);
  
  //search users
  const usersToDisplay = allUsers?.filter((user) =>
  (user.first_name + user.last_name)
  .toLowerCase()
  .includes(userSearchTerm.toLowerCase())
  );
  function handleUserSearch(event) {
    setUserSearchTerm(event.target.value);
  }
  
  const handleOpenUserSearch = () => {
    setUserSearchOpen(true)
  }
  const handleCloseUserSearch = () => {
    setUserSearchOpen(false)
  }
  
  //log user out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(() => onLogout())
    .then(() => {
      navigate("/");
    })
    .then(setOpen(!open));
  }
  
  //set the drop down menu to open
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  };

  //open user profile
  
  const [openProfile, setOpenProfile] = useState(false);
  
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
          <Link to="/userhome">          
          <BsFillHouseDoorFill className="home"/>
          </Link>
          <input
            className="friend-searcher"
            placeholder="Find New Friends?"
            value={userSearchTerm}
            onChange={handleUserSearch}
            onClick={handleOpenUserSearch}
          ></input>
          {userSearchOpen&&<div className="all-users-list">
          {userSearchOpen&& usersToDisplay.map((singleUser) => {
              return <User key={singleUser.id} singleUser={singleUser}/>
            })}
           {userSearchOpen&&<button onClick={handleCloseUserSearch}>X</button>} 
          </div>}
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
                  <button className="profile-btn" onClick={handleOpenProfile}>
                    Profile
                  </button>
                  {openProfile && (
                    <UserProfile
                      handleUserClose={handleUserClose}
                      user={user}
                      setUser={setUser}
                    />
                  )}
                  <Link to="/messages"> 
                  <button className="profile-btn" onClick={() => setOpen(false)}>
                    Messages
                  </button>
                  </Link>
                  <Link to="/savedpostspage">
                  <button className="profile-btn">
                    Saved Posts
                  </button>
                  </Link>
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
