import Home from "./pages/Home"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {
  const [ user, setUser ] = useState(null);
  
  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);
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
    </Routes>
    </div>
    </>
  )
}

export default App;