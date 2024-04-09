import { Link } from "react-router-dom";

function Post({title,content,username}){
    return(
        <div>
            <div>{title}</div>
            <div>{content}</div>
            <div><Link to={"/profile/"+username}>{username}</Link></div>
        </div>
    );
}

export default Post;