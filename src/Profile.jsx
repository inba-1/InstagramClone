import React, { useEffect, useState } from "react";
import axios from "axios";
import User1 from "./assets/User1.jpg";
const profile1 = {
  User1,
};
function Profile() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((data) => setProfile(data.data));
  }, []);
  return (
    <div>
      {profile ? (
        <div>
          <img src={profile1[profile.profileImage]}></img>
          <h5>{profile.username}</h5>
        </div>
      ) : (
        <div> Loading....</div>
      )}
    </div>
  );
}

export default Profile;
