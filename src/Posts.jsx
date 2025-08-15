import React, { useEffect, useState } from 'react'
import User1 from "./assets/User1.jpg";
import User2 from "./assets/User2.jpg";
import User3 from "./assets/User3.jpg";
import User4 from "./assets/User4.jpg";
import User5 from "./assets/User5.jpg";
import Pic1 from "./assets/Pic3.jpeg";
import Pic2 from "./assets/Pic2.jpeg";
import Pic3 from "./assets/Pic3.jpeg";
import Pic4 from "./assets/Pic4.jpeg";
import Pic5 from "./assets/Pic5.jpeg";

// Mapping keys to actual image imports
const profileImages = {
  User1,
  User2,
  User3,
  User4,
  User5
};
const postPic={
  Pic1,
  Pic2,Pic3,Pic4,Pic5
};
function Posts() {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:3000/posts')
      .then((data)=>data.json())
      .then((data)=>setPosts(data))
      .catch(e=>console.log(e));
    },[]);
  return (
    <div className="d-flex justify-content-center">
         {posts.length>0 ?(
            <div>
            {posts.map((post)=>{
                return(
                <div className="my-3"key={post.id}>
                    <div className='d-flex'>
                        <img className="dp rounded-circle" src={profileImages[post.profileImage]}></img>
                         <h5>{post.username}</h5>                    
                    </div>
                    <img className='image' src={postPic[post.imageUrl]}></img>
                    <div>
                      <i className='bi bi-heart'></i>
                      <i className='bi bi-chat'></i>
                       <i className='bi bi-send'></i>
                    </div>
                    <div>
                      <b>{post.likes} Likes</ b>
                    </div>
                    <p>{post.caption}</p>
                </div>
                );
            })}
            </div>
            ):(
                <div>
                    Loading Posts
                </div>
            )}
    </div>
  )
}

export default Posts