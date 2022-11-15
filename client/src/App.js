import Home from "./pages/Home"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Userhome from "./pages/Userhome"


function App() {
  const [ user, setUser ] = useState(null);
  const [ userFriends, setUserFriends ] = useState([])


  
  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)})
      }
  });
}, []);

useEffect(() => {
  fetch(`/users/2/friends`)
  .then((res) => {
    if (res.ok) {
      res.json()
      .then((data) => {
        setUserFriends(data);
      });
    }
});
}, []);

function handleLogin(user) {
  setUser(user);
}

function handleLogout(user) {
  setUser(null);
}

  return (
    <>
    <Navbar user={user} onLogout={handleLogout}/>
    <div className="component-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/userhome" element={<Userhome user={user}/>} />
    </Routes>
    </div>
    </>
  )
}

export default App;
