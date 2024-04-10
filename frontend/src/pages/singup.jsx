import axios from "axios";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    const [confirm,SetConfirm] = useState("")
    const [name,SetName] = useState("")

    const verify = () =>{
        if(confirm === password){
        axios.post("//localhost:8000/api/auth/signup",{email,password,name}).then((resp)=>{
            localStorage.setItem("login",true);
            localStorage.setItem("username",resp.data.user.name);
            localStorage.setItem("token",resp.data.authorisation.token);
            navigate("/profile/"+resp.data.user.name);
        }).catch((err)=>{
            console.log(err)
        })}
        else{
            alert("password dont match")
        }
    }
    return(
        <div className="float">
            <div><Navbar/></div>
            <div><div>
                <div>Signup</div>
                <div><input type="text" placeholder="username" onChange={(e)=>{SetName((e.target.value))}}/></div>
                <div><input type="email" placeholder="example@gmail.com" onChange={(e)=>{SetEmail((e.target.value))}}/></div>
                <div><input type="password" placeholder="password" onChange={(e)=>{SetPassword((e.target.value))}}/></div>
                <div><input type="password" placeholder="confirm" onChange={(e)=>{SetConfirm((e.target.value))}}/></div>

                <div><button onClick={verify}>Signup</button></div>
                </div></div>
        </div>  
    );
}

export default Signup;