import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const bachelorFields = [
  "Engineering and Technology",
  "Medicine and Healthcare",
  "Computer Science and Information Technology",
  "Science and Mathematics",
  "Business and Management",
  "Arts and Humanities",
  "Fine Arts and Design",
  "Social Sciences",
  "Education",
  "Law",
  "Agriculture",
  "Veterinary Science",
  "Forestry",
  "Fisheries",
  "Dairy Technology",
  "Home Science",
  "Hotel Management and Catering Technology",
  "Sports and Physical Education",
  "Pharmacy",
  "Paramedical Sciences",
  "Aviation",
  "Event Management",
  "Fashion Technology",
  "Animation and Multimedia",
  "Film and Television Production",
  "Music and Performing Arts",
  "Allied Health Sciences"
];
function Carriers() {
  let { courseCarriers } = useParams();

  let course = courseCarriers || "Engineering";

  course = course.split(" ")[0];

  const [selectedCourse, setCourse] = useState(course);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleCourseChange = event => {
    setCourse(event.target.value);
  };

  async function getData() {
    try {
      let response = await axios.post(
        `https://studentsathi-backend.onrender.com/getdata/getRole/${selectedCourse}`
      );
      console.log(response.data);
      if (response.data.msg !== "Error") {
        setPosts(response.data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error in getting carriers");
    }
  }

  useEffect(() => {
    getData();
  }, [selectedCourse]);
  if (isLoading) {
    return <div className="mt-28 text-xl text-center">Loading.......</div>;
  }

  return (
    <>
      <div className="mt-24 text-center md:mt-28">
        <div className="text-center">
          <span className="text-xl font-bold">Carriers: </span>
          <select value={selectedCourse} onChange={handleCourseChange}>
            {bachelorFields.map((val, i) => {
              return (
                <option value={val.split(" ")[0]} key={i}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        {/* {selectedCourse=="None"?alert(`Select the course for carriers`):<h1>Carriers for {selectedCourse}</h1>} */}

        <div className="m-2 mt-8 grid grid-cols-1  gap-y-4 gap-x-16 p-4 items-center justify-evenly border-t-2 md:grid-cols-3 shadow-md rounded-sm">
          {posts.map((value, i) => {
            return (
              <div
                key={i}
                className=" bg-[#3232319f] text-center   text-white font-semibold rounded-sm hover:cursor-pointer hover:bg-[#8382829f] hover:text-black"
              >
                <a
                  href={`https://www.google.com/search?q=${value} details`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[100%] h-[100%] py-4"
                >
                  {" "}
                  {value}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Carriers;
