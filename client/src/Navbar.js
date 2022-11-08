import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"
// import { faCoffee } from "@fontawesome/free-solid-svg-icons"

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate()


  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout())
    .then(() => {
      navigate("/")
    })
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <span className="only">Only</span><span className="jams">Jams.</span>
      </Link>
      <ul>
        {user ? (
          <>
            <img className="nav-profile-pic" src={user.profile_picture} alt={user.first_name}/>
            <p>{user.first_name} {user.last_name}</p>
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            <button className="logout" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/signup">Sign Up</CustomLink>
          </>
        )}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
