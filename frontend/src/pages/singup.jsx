import axios from "axios";
import Navbar from "../components/navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup(){
    //const navigate = useNavigate();
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    const [name,SetName] = useState("")

    const verify = () =>{
        axios.get("//localhost:8000/api/signup",{email,password,name}).then((resp)=>{
            localStorage.setItem("login",true);
            localStorage.setItem("username",resp.data.info.username);
            console.log(resp)
            //navigate("/profile/");
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="float">
            <div><Navbar/></div>
            <div><div>
                <div>Signup</div>
                <div><input type="text" placeholder="username" onChange={(e)=>{SetName(name.concat(e.target.value))}}/></div>
                <div><input type="email" placeholder="example@gmail.com" onChange={(e)=>{SetEmail(email.concat(e.target.value))}}/></div>
                <div><input type="password" placeholder="password" onChange={(e)=>{SetPassword(password.concat(e.target.value))}}/></div>
                <div><button onClick={verify}>Signup</button></div>
                <div><Link to="/signup">No account? <b>Signup</b></Link></div>
                </div></div>
        </div>  
    );
}

export default Signup;