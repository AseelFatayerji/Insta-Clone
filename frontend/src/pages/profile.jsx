import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "../components/posts";

function Profile() {
  const navigate = useNavigate();

  const [profileInfo, SetProfile] = useState("");  
  const [newemail,SetEmail] = useState("")
  const [newpassword,SetPassword] = useState("")
  const [newname,SetName] = useState("")

  const [title,SetTitle] = useState("")
  const [content,SetContent] = useState("")

  const email = localStorage.getItem("email");
  const [user,SetID] = useState("")

  const [posts, SetPosts]= useState([]);
  const getPost = () => {
    axios
      .get("http://localhost:8000/api/displayUserPost?user="+user)
      .then((resp) => {
        const arr = [];
        const temp = resp.data.post;
        console.log(resp)
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
    const email = localStorage.getItem("email");
    axios.get("//localhost:8000/api/getInfo?email="+ email ).then((resp) => {
      SetProfile(resp.data.info);
      SetID(resp.data.info.id)
    }).catch((err)=>{
      console.log(err);
    });
  };
  const edit = (item,value) => {
    axios.post("//localhost:8000/api/editinfo", {email,item,value} ).then((resp) => {
      SetProfile(resp.data.info);
      localStorage.setItem("username",resp.data.info.name)
      navigate("/profile/"+resp.data.info.name);
    }).catch((err)=>{
      console.log(err);
    });
  };
  const createPosts = () =>{
    axios.post("//localhost:8000/api/createPost", {title,user,content} ).then((_) => {
      getPost();
    }).catch((err)=>{
      console.log(err);
    });
  }
  useEffect(() => {
    info();
    getPost();
  }, []);
  return (
    <div>
      <div><Navbar /></div>
      <div>{profileInfo.name}</div>
      <div>{profileInfo.email}</div>
      <div>Edit</div>
      <div>
        <ul>
          <li><input type="text" placeholder="new name" onChange={(e)=>{SetName(e.target.value)}}/><button onClick={()=>{edit("name",newname)}}>Submit</button></li>
          <li><input type="email" placeholder="new email" onChange={(e)=>{SetEmail(e.target.value)}}/><button onClick={()=>{edit("email",newemail)}}>Submit</button></li>
          <li><input type="password" placeholder="new password" onChange={(e)=>{SetPassword(e.target.value)}}/><button onClick={()=>{edit("password",newpassword)}}>Submit</button></li>
        </ul>
      </div>
      <div>Create Post</div>
      <div>
        <ul>
          <li><input type="text" placeholder="title" onChange={(e)=>{SetTitle(e.target.value)}}/></li>
          <li><textarea onChange={(e)=>{SetContent(e.target.value)}}/></li>
          <button onClick={createPosts}>Create</button>
        </ul>
      </div>
      <div>User Posts</div>
      <div>
      {posts.map((item)=>{
        return<div>{item}</div>;
      })}
      </div>
    </div>
  );
}

export default Profile;
