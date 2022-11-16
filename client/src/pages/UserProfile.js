import { useState } from "react";
import "../css/userprofile.css";
import EditUserProfile from "./EditUserProfile.js";

export default function UserProfile({ user, handleUserClose, setUser }) {
  const [editProfile, setEditProfile] = useState(false);
  const [ogUser, setOgUser] = useState(user);

  const handleEdit = () => {
    setEditProfile(true);
  };

  const closeEditProfile = () => {
    setEditProfile(false);
  };

  return (
    <>
      <div className="user-popup">
        <div className="user-popup-inner">
          <button className="group-close-btn" onClick={handleUserClose}>
            Return Home
          </button>
          <img src={user?.profile_picture} />
          <div className="user-contents">
            <h3 className="user-title">
              <span className="user-text">Name:</span> {user?.first_name}{" "}
              {user?.last_name}
            </h3>
            <h3>
              <span className="user-text">Username:</span> {user?.username}
            </h3>
            <h3>
              <span className="user-text">Pronouns:</span> {user?.pronouns}
            </h3>
            <h3>
              <span className="user-text">Phone Number:</span>{" "}
              {user?.phone_number}
            </h3>
            <h3>
              <span className="user-text">Email:</span> {user?.email}
            </h3>
            <h3>
              <span className="user-text">Birthday:</span> {user?.birthday}
            </h3>
            <button className="edit-profile-btn" onClick={handleEdit}>
              Edit Profile
            </button>
            {editProfile && (
              <EditUserProfile
                user={user}
                setUser={setUser}
                closeEditProfile={closeEditProfile}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
