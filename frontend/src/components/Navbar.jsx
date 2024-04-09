import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [islogin, SetLogin] = useState(false);
  const [username, SetName] = useState("");
  useEffect(() => {
    SetLogin(localStorage.getItem("login"));
    SetName(localStorage.getItem("name"));
  }, []);
  return (
    <nav>
      <div>
        <Link>Home</Link>
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
