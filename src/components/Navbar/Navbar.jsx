import { useEffect, useState, useContext } from "react";
import logo from "./Logo.png";
import { useLocation, Link } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import { AuthContext } from "../Auth/AuthContext";
import Ham from "./Ham";

function Nav() {
  const { isAuthenticatedUser, username, loading } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  //to display items on clicking ham or hide
  function setHamBurger() {
    setIsHamOpen(!isHamOpen);
  }

  //to change background after scrolling
  const changeBackground = () => {
    if (window.scrollY >= 150 && isHomePage) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (loading) {
    return <div>Loading.....</div>;
  }

  window.addEventListener("scroll", changeBackground);
  function handleLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedUser");
    window.location.reload();
  }
  return (
    <>
      <div
        className={`${
          navbar || !isHomePage ? "bg-[rgb(7,7,25)]" : null
        }  left-0 top-0 flex justify-between items-center  text-white z-50 fixed w-full`}
      >
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="logopicture" className="w-28 md:w-36" />
          </Link>
        </div>
        <div className="hidden w-[60%] md:flex justify-center items-center">
          <ul className="w-full flex justify-evenly items-center text-lg">
            <li>
              <Link
                to="/"
                className="font-[500] hover:border-b-2 hover:border-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Course"
                className={`font-[500] ${
                  location.pathname === "/Course"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Carriers"
                className={`font-[500] ${
                  location.pathname === "/Carriers"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Carriers
              </Link>
            </li>
            <li>
              <Link
                to="/Universities"
                className={`font-[500] ${
                  location.pathname === "/Universities"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Universities
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`font-[500] ${
                  location.pathname === "/Contact"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Contact
              </Link>
            </li>
            <li>
              {/* if user is logged IN show profile Icon otherwise show Sign In */}
              {!isAuthenticatedUser ? (
                <Link
                  to="/login"
                  className={`font-[500] ${
                    location.pathname === "/login"
                      ? "border-b-2 border-blue-400"
                      : null
                  }  hover:border-b-2 hover:border-blue-400 `}
                >
                  Sign In
                </Link>
              ) : (
                <button
                  className={`${
                    isProfileOpen ? "bg-white" : null
                  }hover:border-b-2 hover:border-blue-400`}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User />
                </button>
              )}
            </li>
            {isProfileOpen ? (
              <div className="absolute bg-[#e9d8d8] text-black right-8 top-16 p-4 rounded-sm">
                <ul className="flex flex-col justify-center items-center gap-y-2">
                  <li className="text-[#6e33cb]">Hi,{username}</li>
                  <li>
                    <button
                      className="px-4 border-2 border-[#491ec0] bg-[#491ec0] text-white hover:bg-[#311c69] rounded-md"
                      onClick={() => handleLogOut()}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </ul>
        </div>
        <div className="md:hidden">
          {isHamOpen ? (
            <X
              size={36}
              className="mr-2 mb-2 hover:cursor-pointer"
              onClick={setHamBurger}
            />
          ) : (
            <Menu
              size={36}
              className="mr-2 mb-2 hover:cursor-pointer"
              onClick={setHamBurger}
            />
          )}

          {isHamOpen ? (
            <Ham
              isHome={isHomePage}
              navbarWithBg={navbar}
              isHamOpen={isHamOpen}
              setIsHamOpen={setIsHamOpen}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Nav;
