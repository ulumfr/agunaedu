import React, { useEffect } from "react";
import HeaderCourse from "../../../../components/course/header/headercourse";
import ImgRole from "../../../../assets/img/illustration/path-web.png";

const PathWebPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Hacker - Web";
  }, []);

  return (
    <>
      <div>
        <HeaderCourse
          goto="/course/hacker"
          buttonBack="Hacker"
          role="Web Development"
          desc="Mulai belajar pemrograman web development dan berkembang menjadi seorang web developer handal."
          skills={["Front-End Dev", "Back-End Dev", "Full Stack Dev"]}
          imgRole={ImgRole}
        />
      </div>
    </>
  );
};

export default PathWebPage;
