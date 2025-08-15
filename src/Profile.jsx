import React, { useEffect, useState } from "react";
import axios from "axios";
import User1 from "./assets/User1.jpg";
const profile1 = {
  User1,
};
function Profile() {
  const [profile, setProfile] = useState(null);
  const[followers,setFollowers]=useState([]);
  const[unfollowed,setUnfollowed]=useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((data) => setProfile(data.data))
       .catch(e=>console.log(e));
       axios
       .get("http://localhost:3000/followers")
      .then((data) => setFollowers(data.data))
       .catch(e=>console.log(e));
  }, [unfollowed]);
  function HandleOnChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const handleUpdate=async()=>{
    axios.put("http://localhost:3000/profile",profile)
    .then(console.log("updated"))
    .catch(e=>console.log(e));
  }
  const handleUnfollow=async(id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(()=>alert("unfollowed"))
    .then(setUnfollowed(unfollowed+1))
    .catch(e=>console.log(e));
  }
  return (
    <div className="m-5">
      {profile ? (
        <div>
          <img
            src={profile1[profile.profileImage]}
            className=" profile rounded-circle"
          ></img>
          <h5>{profile.username}</h5>
          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-content my-4"
            onChange={HandleOnChange}
          />
          <input
            type="text" 
            name="profile-pic"
            value={profile.profileImage}
            className="form-control"
             onChange={HandleOnChange}
          />
          <button className=" btn btn-primary my-4" onClick={handleUpdate} >update</button>
        </div>
      ) : (
        <div> Loading....</div>
      )}
      
    
    {followers.length>0 ?(
        followers.map((follower) =>(
            <div key={follower.id} className="d-flex my-2">
                {follower.username}
                <button className="btn btn-secondary ms-auto" onClick={()=>{handleUnfollow(follower.id)}}> unfollow</button>
            </div>
        ))
    ):(<div> Loading..</div>)}
    </div>  
  )
}

export default Profile;
