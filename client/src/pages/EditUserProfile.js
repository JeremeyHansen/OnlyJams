import { useState } from "react";
import '../css/edituser.css'

export default function EditUserProfile({
  user,
  setUser,
  closeEditProfile,
}) {
  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);
  const [profilePicture, setProfilePicture] = useState(user?.profile_picture);
  const [email, setEmail] = useState(user?.email);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [username, setUsername] = useState(user?.username);
  const [pronouns, setPronouns] = useState(user?.pronouns);
  const [password, setPassword] = useState(user?.password);

  function handleSubmit(e) {
    e.preventDefault();
    const fixedUser = {
      id: user?.id,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      username: username,
      email: email,
      birthday: birthday,
      pronouns: pronouns,
      profile_picture: profilePicture,
      password: password,
      user_id: user?.id,
      groups: user?.groups,
      friends: user?.friends,
      messages: user?.messages
    };
    fetch(`/users/${user?.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixedUser),
    })
      .then(setUser(fixedUser))
      .then(closeEditProfile);
    }
    
    return (
        <>
      <div className="edit-popup">
        <div className="edit-popup-inner">
        <button className="group-close-btn"onClick={closeEditProfile}>Return To Profile</button>
          <form className="edit-form" onSubmit={handleSubmit}>
          <h1>Edit Profile</h1>
            <input
              name="firstName"
              required=""
              type="text"
              defaultValue={user.first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              name="lastName"
              required=""
              type="text"
              defaultValue={user.last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
                      <input
              name="profilePicture"
              required=""
              type="text"
              defaultValue={user.profile_picture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
              <input
               name="username"
               required=""
               type="text"
               defaultValue={user.username}
               onChange={(e) => setUsername(e.target.value)}
             />
             <input
              name="pronouns"
              required=""
              type="text"
              defaultValue={user.pronouns}
              onChange={(e) => setPronouns(e.target.value)}
            />
             <input
              name="phonenumber"
              required=""
              type="text"
              defaultValue={user.phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
             <input
              name="email"
              required=""
              type="text"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <input
              name="birthday"
              required=""
              type="text"
              defaultValue={user.birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <button className="edit-submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
