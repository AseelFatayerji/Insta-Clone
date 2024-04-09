import { Link } from "react-browser-router";

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