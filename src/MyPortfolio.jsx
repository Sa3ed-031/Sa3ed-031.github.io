import { useState } from "react";
import { MotionConfig } from "motion/react";

import TheHome from "./Components/TheHome";
import TheSkills from "./Components/TheSkills";
import TheHeader from "./Components/TheHeader";
import TheFooter from "./Components/TheFooter";
import TheContact from "./Components/TheContact";
import TheServices from "./Components/TheServices";
import TheProjects from "./Components/TheProjects";
import TheEducation from "./Components/TheEducation";
import RecordResponse from "./Components/RecordResponse";

const headerLinks = [
  "Home",
  "Skills",
  "Services",
  "Projects",
  "Education",
  //  "Contact"
];

export default function MyPortfolio() {
  const [showDropDownHeader, setShowDropDownHeader] = useState(false);

  const [formModal, setFormModal] = useState({
    message: "",
    show: false,
  });

  // Problem in The Contact State, Blur & Need to Refocus every Single Letter
  // The previous problem solved, because i used the state global in the whole portfolio component, but its private for the contact component.

  return (
    // reducedMotion="user" turns off transform & layout animations for users who ask for less motion
    <MotionConfig reducedMotion="user">
      <div
        // overflow-x-clip keeps the reveal offsets from causing horizontal scrolling
        className="flex flex-col overflow-x-clip transition-all duration-600 ease-in-out"
        onClick={() => {
          showDropDownHeader ? setShowDropDownHeader(false) : null;
          formModal.show ? setFormModal({ ...formModal, show: false }) : null;
        }}
      >
        <TheHeader
          headerLinks={headerLinks}
          showDropDownHeader={showDropDownHeader}
          setShowDropDownHeader={setShowDropDownHeader}
        />
        <TheHome />
        <TheSkills />
        <TheServices />
        <TheProjects />
        <TheEducation />
        <TheContact setFormModal={setFormModal} />
        <TheFooter headerLinks={headerLinks} />

        <RecordResponse
          isVisible={formModal.show}
          message={formModal.message}
        />
      </div>
    </MotionConfig>
  );
}
