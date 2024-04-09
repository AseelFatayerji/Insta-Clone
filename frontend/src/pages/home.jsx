import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "../components/navbar";
import Post from "../components/posts";

function Home() {
  const [posts, SetPosts]= useState([]);
  const getPost = () => {
    axios
      .get("http://localhost:8000/api/displayPost")
      .then((resp) => {
        const arr = [];
        const temp = resp.data.post;
        temp.forEach((element) => {
          const post = <Post title={element.Title} content={element.Description} username={element.name}/>
          arr.push(post)
        });
        SetPosts(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getPost()
  },[])
  return (
    <div>
      <div><Navbar /></div>
      <div>{posts.map((item)=>{
        return<div>{item}</div>;
      })}</div>
    </div>
  );
}

export default Home;
