import "./login.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";

function Login() {
  const {
    isAuthenticatedUser,
    setIsAuthenticatedUser,
    username,
    setUsername,
    loading
  } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const [guestUser, setGuestUser] = useState("");
  const from = location.state?.from?.pathname || "/";

  const sendLoginDetailsToBackEnd = async data => {
    try {
      let response = await axios.post(
        "https://studentsathi-backend.onrender.com/user/login",
        data
      );
      response = response.data;
      console.log(response);
      console.log("User data");

      //to access universities you need to logged in
      if (response.success) {
        //for storinng response in localStorage
        localStorage.setItem("token", response.jwtToken);
        localStorage.setItem("LoggedUser", response.username);
        setIsAuthenticatedUser(true);
        setUsername(response.username);

        Navigate(from, { replace: true });

        /* 
        Note:After a user logs in they are redirected back
        to the original route after using replace:true the login page is 
        replaced in history stack,preventing the user from navigating back 
        to the login page using the browser's back button.
        */
      } else {
        alert("Bad!! credential");
      }
    } catch (error) {
      alert("Error in login");
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let obj = {
      username: formData.get("username") ?? "",
      password: formData.get("password") ?? ""
    };
    sendLoginDetailsToBackEnd(obj);
  };

  return (
    <>
      <div className="page-background">
        <div className="container1">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="input-group1">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={guestUser?.user}
                required
              />
            </div>
            <div className="input-group1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={guestUser?.password}
                required
              />
            </div>
            <button type="submit" id="loginbutton">
              Login
            </button>
            <button
              className="my-2 px-4 py-2 bg-[#f22c92d4] rounded-sm text-white hover:bg-[#310a1e9a]"
              onClick={() => {
                setGuestUser({ user: "dipesh", password: "dipesh" });
              }}
            >
              Login as Guest
            </button>
          </form>
          <div className="register-option">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
