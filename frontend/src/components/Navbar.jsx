import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [islogin, SetLogin] = useState(false);
  const [username, SetName] = useState("");
 
  useEffect(() => {   
    const login = localStorage.getItem("login");
    if (login !== null) {
      SetLogin(login);
      SetName(localStorage.getItem("username"));
    }
  }, []);
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      {islogin ? (
        <div>
          <div>
            <Link to={"/profile/" + username}>Profile</Link>
          </div>
          <div>
            <Link
              to="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
