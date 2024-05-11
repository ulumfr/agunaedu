import React from "react";
import ImgShare from "../../../assets/img/illustration/course.png";
import Tag from "../../../components/main/sharetag/tag";
import { dataTag } from "../../../dummydata/datatag";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const ShareTag = () => {
  return (
    <>
      <section className="container mx-auto px-10 my-20">
        <div className="grid md:grid-cols-2">
          <div className="my-auto overflow-hidden">
            <h1 className="text-[#101828] font-bold text-3xl mb-4">
              Berbagai Keahlian Mentor Kami!
            </h1>
            {[...Array(2)].map((_, index) => (
              <Marquee
                key={index}
                pauseOnHover
                speed={30}
                direction={index === 1 ? "right" : "left"}
                gradient={true}
              >
                {dataTag.map((tag, tagIndex) => (
                  <Tag key={tagIndex} icon={tag.icon} skill={tag.skill} />
                ))}
              </Marquee>
            ))}
            <motion.button
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="text-white bg-[#1470EF] mt-9 gap-1 px-8 py-2 rounded-lg flex items-center"
            >
              <span className="text-[14px] font-semibold">Mulai Belajar</span>
            </motion.button>
          </div>
          <div className="flex md:justify-end justify-center mt-20 md:mt-0">
            <img
              src={ImgShare}
              alt="img-keahlian"
              draggable="false"
              className="md:w-3/4 sm:w-2/3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShareTag;