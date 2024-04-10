import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Post from "../components/posts";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation()
  const { name } = location.state
  const [user,SetID] = useState("")
  const [profileInfo, SetProfile] = useState("");  

  const [posts, SetPosts]= useState([]);
  const getPost = () => {
    axios
      .get("http://localhost:8000/api/displayUserPost?user="+user)
      .then((resp) => {
        const arr = [];
        const temp = resp.data.post;
        temp.forEach((element) => {
          const post = <Post title={element.Title} content={element.Description}/>
          arr.push(post)
        });
        SetPosts(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const info = () => {
    axios.get("//localhost:8000/api/getInfo?name="+ name ).then((resp) => {
      SetProfile(resp.data.info);
      SetID(resp.data.info.id)
    }).catch((err)=>{
      console.log(err);
    });
  };
  useEffect(() => {
    info();
    getPost();
  }, []);
  return (
    <div>
      <div><Navbar /></div>
      <div>{profileInfo.name}</div>
      <div>User Posts</div>
      <div>
      {posts.map((item)=>{
        return<div>{item}</div>;
      })}
      </div>
    </div>
  );
}

export default User;
