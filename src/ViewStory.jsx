import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate} from "react-router-dom";
import s1 from "./assets/story1.jpg";
import s2 from "./assets/story2.jpg";
import s3 from "./assets/story3.jpg";
import s4 from "./assets/story4.jpg";
import s5 from "./assets/story5.jpg";

const ImageUrl = {
  s1,
  s2,
  s3,
  s4,
  s5,
};

function ViewStory() {
  const { id,tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);
  //use effect will not re render if we give dependency null so pass id as dependency
  if(id>tot || id<=0){
    navigate('/');
  }
  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}>
            
            <i className="bi bi-arrow-left-circle-fill"> </i>
          </Link>

          <img className="vh-100" src={ImageUrl[story.imageUrl]}></img>
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}>
            
            <i className="bi bi-arrow-right-circle-fill"> </i>
          </Link>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default ViewStory;
