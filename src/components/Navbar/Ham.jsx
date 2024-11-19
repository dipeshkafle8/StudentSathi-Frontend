import { Link } from "react-router-dom";
function Ham({ isHome, navbarWithBg, isHamOpen, setIsHamOpen }) {
  console.log(isHome);
  return (
    <>
      <div
        className={`rounded-sm  absolute flex flex-col top-[4.5rem] w-full left-0 ${
          !isHome || navbarWithBg
            ? "bg-[rgb(100,116,139)]"
            : "bg-[rgba(69,69,157,0.6)]"
        } p-4`}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setIsHamOpen(!isHamOpen)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Course" onClick={() => setIsHamOpen(!isHamOpen)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Carriers" onClick={() => setIsHamOpen(!isHamOpen)}>
              Carriers
            </Link>
          </li>
          <li>
            <Link to="/Universities" onClick={() => setIsHamOpen(!isHamOpen)}>
              Universities
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setIsHamOpen(!isHamOpen)}>
              {" "}
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsHamOpen(!isHamOpen)}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Ham;
