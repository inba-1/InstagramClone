import React, { useState,useEffect } from 'react';
import s1 from './assets/story1.jpg';
import User1 from "./assets/User1.jpg";
import User2 from "./assets/User2.jpg";
import User3 from "./assets/User3.jpg";
import User4 from "./assets/User4.jpg";
import User5 from "./assets/User5.jpg";
import { useNavigate } from 'react-router-dom';
const profileImages = {
  User1,
  User2,
  User3,
  User4,
  User5
};
function Stories() {
  let tot=0;
  const navigate=useNavigate();
  const[Stories,setStories]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/story")
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err));
  },[]);
  return (
    <div className= 'story d-flex '>
      <div className='d-none'> {tot=Stories.length}</div>
      {Stories.length>0 ?(
        Stories.map((story)=>(
          <div key={story.id} className='mx-2' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-border'>
            <img src={profileImages[story.profileImage]} alt="dp" className='story-dp rounded-circle'/>
            </div>
            <p className='text-truncate' style={{width:"40px"}}>{story.username}</p>
          </div>
        ))
      ):(<p> Loading..</p>)}
    </div>
  )
}

export default Stories