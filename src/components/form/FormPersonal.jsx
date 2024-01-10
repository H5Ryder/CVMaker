import React, { useState, useEffect } from "react";
import TextInputIcon from "@mui/icons-material/CreateOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import EmailIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkIcon from "@mui/icons-material/InsertLinkOutlined";

export const FormPersonal = ({personalData, onPersonalDataChange}) => {
  const [localData, setLocalData] = useState(personalData);


  useEffect(() => {
    setLocalData(personalData);
  }, [personalData]);

  const handleInputChange = (e) => {
    const { className, value } = e.target;
    setLocalData((prevData) => ({
      ...prevData,
      [className]: value,
    }));

    onPersonalDataChange({
        ...localData,
        [className]: value,
      });

  };
  var open = false;
  let toggleForm = () => {
    //CLOSING FORM
    const element = document.querySelector(".data-personal");
    element.classList.toggle("closed");

    //ROTATING ARROW
    let arrow = document.querySelector(".personal-downIcon");

    if (open) {
      arrow.classList.remove("open");
    } else {
      arrow.classList.add("open");
    }

    open = !open;
  };

  return (
    <div className="FormPersonal">
      <div className="title">
        <h2>Personal Details</h2>

        <DownIcon className="personal-downIcon arrowIcon" onClick={toggleForm} />
      </div>

      <form className="data-personal">
        <div className="input-container">
          <TextInputIcon style={{ color: "#C0C0AB" }} />
          <input
            value={localData.fullName}
            onChange={handleInputChange}
            type="text"
            className="fullName"
            placeholder="Full Name"
          />
        </div>
        <div className="input-container">
          <EmailIcon style={{ color: "#C0C0AB" }} />
          <input
            value={localData.email}
            onChange={handleInputChange}
            type="email"
            className="email"
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <TextInputIcon style={{ color: "#C0C0AB" }} />
          <input
            value={localData.phoneNumber}
            onChange={handleInputChange}
            type="tel"
            className="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
        <div className="input-container">
          <TextInputIcon style={{ color: "#C0C0AB" }} />
          <input
            value={localData.address}
            onChange={handleInputChange}
            type="text"
            className="address"
            placeholder="Address"
          />
        </div>
        <div className="input-container portfolio">
          <LinkIcon style={{ color: "#C0C0AB" }} />
          <input
            value={localData.portfolioLink}
            onChange={handleInputChange}
            type="text"
            className="portfolioLink"
            placeholder="Portfolio Link"
          />
        </div>
      </form>
    </div>
  );
};
