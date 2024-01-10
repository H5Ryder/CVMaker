import React, { useState, useEffect } from "react";
import TextInputIcon from "@mui/icons-material/CreateOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { v4 as uuidv4 } from "uuid";


export const FormSkills = ({ skillData, onSkillDataChange }) => {

    const handleInputChange = (e) => {
        const { className, value } = e.target;
        onSkillDataChange((prevData) => ({
          ...prevData,
          [className]: value,
        }));
    
      };

      var open = false;
      let toggleForm = () => {
        //CLOSING FORM
        const element = document.querySelector(".data-skill");
        element.classList.toggle("closed");
    
        //ROTATING ARROW
        let arrow = document.querySelector(".skill-downIcon");
    
        if (open) {
          arrow.classList.remove("open");
        } else {
          arrow.classList.add("open");
        }
    
        open = !open;
      };
    

    return (
        <div className="FormSkill">
          <div className="title">
            <h2>Certs, Skills & Interests</h2>
    
            <DownIcon className="skill-downIcon arrowIcon" onClick={toggleForm} />
          </div>
    
          <form className="data-skill">
            <div className="input-container">
              <TextInputIcon style={{ color: "#C0C0AB" }} />
              <input
                value={skillData.certs}
                onChange={handleInputChange}
                type="text"
                className="certs"
                placeholder="Enter certifications"
              />
            </div>
            <div className="input-container">
              <TextInputIcon style={{ color: "#C0C0AB" }} />
              <input
                value={skillData.skills}
                onChange={handleInputChange}
                type="text"
                className="skills"
                placeholder="Enter your skills"
              />
            </div>
            <div className="input-container">
              <TextInputIcon style={{ color: "#C0C0AB" }} />
              <input
                value={skillData.interests}
                onChange={handleInputChange}
                type="text"
                className="interests"
                placeholder="Describe your Interests"
              />
            </div>
            
          </form>
        </div>
      );


}