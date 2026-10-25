import { useState } from "react";

import TheHome from "./Components/TheHome";
import TheHeader from "./Components/TheHeader";
import TheFooter from "./Components/TheFooter";
import TheContact from "./Components/TheContact";
import TheServices from "./Components/TheServices";
import TheProjects from "./Components/TheProjects";
import TheEducation from "./Components/TheEducation";
import RecordResponse from "./Components/RecordResponse";

const headerLinks = [
  "Home",
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
    <div
      className="the-portfolio-container flex flex-col"
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
      <TheServices />
      <TheProjects />
      <TheEducation />
      <TheContact setFormModal={setFormModal} />
      <TheFooter headerLinks={headerLinks} />

      <RecordResponse isVisible={formModal.show} message={formModal.message} />
    </div>
  );
}
