import React, { useState, useEffect } from "react";
import Category from "../../../components/main/upgrade/category";
import { BsCalendar4Event } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import CardCat from "../../../components/main/upgrade/cardcat";
import SideCat from "../../../components/main/upgrade/sidecat";
import axios from "axios";
import { dataSide } from "../../../dummydata/main/dataupgrade";

const UpgradeSection = () => {
  const [activeCategory, setActiveCategory] = useState("Event");
  const [eventData, setEventData] = useState([]);
  const [challengeData, setChallengeData] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get("/api/v1/public/landing/event");
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    const fetchChallengeData = async () => {
      try {
        const response = await axios.get("/api/v1/public/landing/challenge");
        setChallengeData(response.data);
      } catch (error) {
        console.error("Error fetching challenge data:", error);
      }
    };

    fetchEventData();
    fetchChallengeData();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredDataSide =
    activeCategory === "Event" ? eventData : challengeData;

  const filteredDataSideLeft = dataSide.filter(({ button }) =>
    button.toLowerCase().includes(activeCategory.toLowerCase())
  );

  return (
    <>
      <div
        className="flex flex-col gap-3 px-10 sm:px-20 md:px-40 pt-20 pb-10"
        id="upgrade"
      >
        <h1 className="text-textPrimary text-3xl font-semibold">
          Tingkatkan lebih dalam lagi kemampuanmu!
        </h1>
        <h3 className="text-textTertiary text-xl ">
          Ikuti berbagai kegiatan lainnya dari kami!
        </h3>
      </div>

      <section className="bg-primaryBlue relative overflow-hidden">
        <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
        <div className="px-10 sm:px-20 md:px-40 z-10 relative">
          <div className="top-0 translate-y-[-8px]">
            <Category
              icon={<BsCalendar4Event />}
              upgrade="Event"
              isActive={activeCategory === "Event"}
              onClick={() => handleCategoryClick("Event")}
            />
            <Category
              icon={<PiMedal />}
              upgrade="Challenge"
              isActive={activeCategory === "Challenge"}
              onClick={() => handleCategoryClick("Challenge")}
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <div className="my-12 sm:my-20 md:my-[150px] md:w-[40%]">
              {filteredDataSideLeft.map((item, index) => (
                <SideCat key={index} {...item} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 mt-10 gap-8 justify-end">
              {filteredDataSide.map((item) => (
                <div key={item.id}>
                  <CardCat
                    imgPath={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                      item.imageUrl
                    }`}
                    title={item.name}
                    text={item.shortDescription}
                    subs={item.skills.map((skill) => skill.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpgradeSection;
