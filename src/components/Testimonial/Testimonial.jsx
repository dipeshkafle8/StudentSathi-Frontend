import React from "react";
const Testimonial = ({ name, text, imge }) => {
  return (
    <div className="w-64 testimonial bg-white p-6 rounded-lg shadow-lg text-center border-t-2 border-[#5545ec] hover:cursor-pointer hover:shadow-xl  md:w-[30rem]">
      <img
        src={imge}
        alt={`${name}s's picture`}
        className="w-28 h-28 rounded-full mx-auto mb-4 md:w-32"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};
export default Testimonial;
