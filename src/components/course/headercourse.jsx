import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderCourse = ({
  buttonBack,
  role,
  desc,
  imgRole,
  skills = [],
  goto,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-primaryBlue text-white">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="grid md:grid-cols-2">
            <div className="my-[52px] md:my-[70px]">
              <button
                className="flex items-center text-lg gap-3"
                onClick={() => navigate(goto)}
              >
                <MdOutlineKeyboardArrowLeft className="text-2xl" />
                <h3>{buttonBack}</h3>
              </button>
              <h1 className="text-5xl font-semibold pt-20 pb-3">{role}</h1>
              <h3 className="text-lg">{desc}</h3>
              <div className="flex mt-5 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="border-[1.5px] border-borderPrimary bg-[#F9FAFB] text-textLabel text-[14px] font-medium inline-flex items-center px-3 py-[6px] rounded-[6px] my-2 cursor-pointer gap-2"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={imgRole}
                alt="img-role"
                draggable="false"
                className="md:w-[90%] sm:w-2/3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderCourse;
