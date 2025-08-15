import React, { useEffect, useState } from "react";
import User1 from "./assets/User1.jpg";
import User2 from "./assets/User2.jpg";
import User3 from "./assets/User3.jpg";
import User4 from "./assets/User4.jpg";
import User5 from "./assets/User5.jpg";
const profileImages = {
  User1,
  User2,
  User3,
  User4,
  User5
};
function Suggestions() {
  const[profile,setprofile]=useState(null);
  const[suggestions,setSuggestions]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(data=>data.json())
    .then(data=>setprofile(data))
    .catch(err=>console.log(err))
       fetch('http://localhost:3000/suggestions')
    .then(data=>data.json())
    .then(data=>setSuggestions(data))
    .catch(err=>console.log(err))

  },[])
  return (
    <div>
    <div className="suggestions w-75 m-4"> {profile ?
    <div className="d-flex">
      <img
        className="dp rounded-circle"
        src={profileImages[profile.profileImage]}
      ></img>
      <h5>{profile.username}</h5>
      <small className="ms-auto text-primary">Switch</small>
    </div>
    :<p>Loading</p>}
    <div className="d-flex"> 
      <p>Suggested for You </p>
      <strong className="ms-auto">See All</strong>
    </div>
    {suggestions.length>0 ?(
            <div>
            {suggestions.map((suggestion)=>{
                return(
                <div className="my-2"key={suggestion.id}>
                    <div className='d-flex'>
                        <img className="dp rounded-circle" src={profileImages[suggestion.profileImage]}></img>
                         <h5>{suggestion.username}</h5>  
                          <p className="text-primary ms-auto">Follow</p>                 
                    </div>

                    </div>
                );
            })
            }
            </div>
            ):(
                <div>
                    Loading Posts
                </div>
            )}
    </div>
    </div>
  );
}

export default Suggestions;
