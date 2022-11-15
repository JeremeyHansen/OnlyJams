import { useState } from "react";
import '../css/edituser.css'

export default function EditUserProfile({
  ogUser,
  setOgUser,
  closeEditProfile,
}) {
  const [firstName, setFirstName] = useState(ogUser?.first_name);
  const [lastName, setLastName] = useState(ogUser?.last_name);
  const [phoneNumber, setPhoneNumber] = useState(ogUser?.phone_number);
  const [profilePicture, setProfilePicture] = useState(ogUser?.profile_picture);
  const [email, setEmail] = useState(ogUser?.email);
  const [birthday, setBirthday] = useState(ogUser?.birthday);
  const [username, setUsername] = useState(ogUser?.username);
  const [pronouns, setPronouns] = useState(ogUser?.pronouns);
  const [password, setPassword] = useState(ogUser?.password);

  function handleSubmit(e) {
    e.preventDefault();
    const fixedUser = {
      user_id: ogUser.id,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      username: username,
      email: email,
      birthday: birthday,
      pronouns: pronouns,
      profile_picture: profilePicture,
      password: password,
    };
    fetch(`/users/${ogUser?.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixedUser),
    })
      .then(setOgUser(fixedUser))
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
              defaultValue={ogUser.first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              name="lastName"
              required=""
              type="text"
              defaultValue={ogUser.last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
                      <input
              name="profilePicture"
              required=""
              type="text"
              defaultValue={ogUser.profile_picture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
              <input
               name="username"
               required=""
               type="text"
               defaultValue={ogUser.username}
               onChange={(e) => setUsername(e.target.value)}
             />
             <input
              name="pronouns"
              required=""
              type="text"
              defaultValue={ogUser.pronouns}
              onChange={(e) => setPronouns(e.target.value)}
            />
             <input
              name="phonenumber"
              required=""
              type="text"
              defaultValue={ogUser.phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
             <input
              name="email"
              required=""
              type="text"
              defaultValue={ogUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <input
              name="birthday"
              required=""
              type="text"
              defaultValue={ogUser.birthday}
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
