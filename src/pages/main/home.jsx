import React from "react";
import FaqSection from "./faq/faq";
import TestiSection from "./testimoni/testi";
import ShareTagSection from "./sharetag/sharetag";
import HeroSection from "./hero/hero";
import ToolsSection from "./tool/tools";
import AlurSection from "./alur/alur";
import UpgradeSection from "./upgrade/upgrade";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <AlurSection />
      <UpgradeSection />
      <ShareTagSection />
      <TestiSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
