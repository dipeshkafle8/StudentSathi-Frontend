import { Link } from "react-router-dom";
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

const fieldDescriptions = [
  "Study of principles and application of engineering techniques and technology.",
  "Study of medical sciences, healthcare practices, and patient treatment.",
  "Study of computers, software development, and information systems.",
  "Study of natural phenomena, scientific principles, and mathematical theories.",
  "Study of business operations, management strategies, and economic principles.",
  "Study of human culture, language, literature, and history.",
  "Study of visual arts, creative design, and aesthetic expression.",
  "Study of human society, behavior, and relationships.",
  "Study of teaching methods, educational theories, and learning processes.",
  "Study of legal systems, principles, and jurisprudence.",
  "Study of farming techniques, crop production, and agricultural economics.",
  "Study of animal health, care, and veterinary medicine.",
  "Study of forest ecosystems, conservation, and resource management.",
  "Study of aquatic ecosystems, fish biology, and fisheries management.",
  "Study of milk production, dairy processing, and dairy product technology.",
  "Study of home management, nutrition, and family dynamics.",
  "Study of hospitality industry, hotel operations, and catering services.",
  "Study of sports science, physical fitness, and sports management.",
  "Study of pharmaceutical sciences, drug formulations, and pharmacy practice.",
  "Study of allied health sciences, medical technology, and patient care.",
  "Study of aviation industry, flight operations, and aviation management.",
  "Study of event planning, organization, and management.",
  "Study of fashion design, apparel production, and textile technology.",
  "Study of animation techniques, multimedia production, and digital media.",
  "Study of filmmaking, television production, and media content creation.",
  "Study of music theory, performance arts, and creative expression.",
  "Study of health-related disciplines supporting medical care, diagnostics, and therapy."
];

const Courses = () => {
  return (
    <div id="main" key="main1" className=" mt-24 md:mt-32">
      <br />
      <div
        id="container"
        key="container1"
        className="flex flex-wrap flex-1 justify-evenly gap-y-8"
      >
        {bachelorFields.map((value, index) => (
          <div
            className=" m-2 w-[25rem] flex flex-col justify-center items-center gap-y-4 p-2 border-t-4 border-[#5545ec] shadow-lg rounded-xl hover:cursor-pointer hover:shadow-xl "
            key={index}
          >
            <h2 className="text-2xl font-semibold text-center">{value}</h2>
            <p className="pcourse text-center">{fieldDescriptions[index]}</p>

            <Link
              className="px-6 p-2 bg-[#443e82] text-white rounded-md hover:bg-[#2c294b] hover:text-white"
              to={`/Coursedetails/${index}`}
            >
              Explore &raquo;
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
