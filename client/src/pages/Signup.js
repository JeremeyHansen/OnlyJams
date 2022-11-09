import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [birthday, setBirthday] = useState("");
  const [pronouns, setPronouns] = useState("");
  const navigate = useNavigate();

  //create a new user

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      password,
      profile_picture: profilePicture,
      phone_number: phoneNumber,
      birthday,
      pronouns,
    };
    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/login");
      });
  }

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <h1>Sign Up</h1>
          <input
            name="firstName"
            placeholder="First Name"
            required=""
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            required=""
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            name="username"
            placeholder="Username"
            required=""
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="email"
            placeholder="Email"
            required=""
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            required=""
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            name="birthday"
            placeholder="Birthday: Month/Day/Year"
            required=""
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            name="phoneNumber"
            required=""
            placeholder="Phone Number: (123)-456-7890"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            name="pronouns"
            required=""
            placeholder="Pronouns"
            type="text"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
          />
          <input
            name="profilePic"
            required=""
            placeholder="Profile Picture URL"
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
          <div>
            <button className="submit-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
