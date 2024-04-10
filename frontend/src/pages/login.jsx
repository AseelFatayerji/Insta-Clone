import axios from "axios";
import Navbar from "../components/navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    const verify = () =>{
        
        axios.post("//localhost:8000/api/auth/login",{email,password}).then((resp)=>{
            localStorage.setItem("login",true);
            localStorage.setItem("username",resp.data.user.name);
            localStorage.setItem("email",resp.data.user.email);
            localStorage.setItem("token",resp.data.authorisation.token);

            navigate("/profile/"+resp.data.user.name);
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="float">
            <div><Navbar/></div>
            <div><div>
                <div>Login</div>
                <div><input type="email" placeholder="example@gmail.com" onChange={(e)=>{SetEmail((e.target.value))}}/></div>
                <div><input type="password" placeholder="password" onChange={(e)=>{SetPassword((e.target.value))}}/></div>
                <div><button onClick={verify}>Login</button></div>
                <div><Link to="/signup">No account? <b>Signup</b></Link></div>
                </div></div>
        </div>  
    );
}

export default Login;