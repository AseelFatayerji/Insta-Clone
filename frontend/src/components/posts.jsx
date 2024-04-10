import { Link } from "react-router-dom";

function Post({title,content,username}){
    return(
        <div>
            <div>{title}</div>
            <div>{content}</div>
            <div><Link to={"/"+username} state={{ name: username }}>{username}</Link></div>
        </div>
    );
}

export default Post;