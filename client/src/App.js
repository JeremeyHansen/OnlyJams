import Home from "./pages/Home"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Userhome from "./pages/Userhome"
import Messages from "./pages/Messages"
import SavedPostsPage from "./pages/SavedPostsPage"


function App() {
  const [ user, setUser ] = useState(null);
  
  
  
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
    
    
    function handleLogin(user) {
      setUser(user);
    }
    
    function handleLogout(user) {
      setUser(null);
    }
    
    const [ newFriend, setNewFriend ] = useState(null);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
      fetch("/users")
        .then((res) => res.json())
        .then((data) => setAllUsers(data));
    }, []);

    return (
    <>
    <Navbar user={user} onLogout={handleLogout} setNewFriend={setNewFriend} allUsers={allUsers} setAllUsers={setAllUsers} setUser={setUser}/>
    <div className="component-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup allUsers={allUsers} setAllUsers={setAllUsers}/>} />
      <Route path="/userhome" element={<Userhome user={user} newFriend={newFriend}/>} />
      <Route path="/messages" element={<Messages user={user} allUsers={allUsers}/>} />
      <Route path="/savedpostspage" element={<SavedPostsPage user={user} />} />
    </Routes>
    </div>
    </>
  )
}

export default App;
