import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/login.css"

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username: username,
      password,
    }
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => onLogin(user))
        }
      })
      .then(() => {
        navigate('/userhome')
      })
  }
  return (
    <>
      <div className="form-container">
        <form className="login-form" onSubmit={onSubmit}>
          <h1>Log In</h1>
          <input
            name="username"
            placeholder="Username"
            required=""
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            required=""
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  )
}
