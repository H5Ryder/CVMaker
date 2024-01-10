import React, { useState } from "react";
import { MakerView } from "./MakerView";
import { FormHeader } from "./form/FormHeader";
import { FormPersonal } from "./form/FormPersonal";
import { FormEducation } from "./form/FormEducation";
import { FormWork } from "./form/FormWork";
import { v4 as uuidv4 } from "uuid";
import { FormSkills } from "./form/FormSkills";
import { tomData } from "./tomData";


export const MakerWrapper = () => {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    portfolioLink: "",
  });
  const [educationData, setEducationData] = useState([]);
  const [skillData, setSkillData] = useState({
    certs: "",
    skills: "",
    interests: "",
  });
  const [workData, setWorkData] = useState([]);

  const [swap, setSwap] = useState(true);

  const clearPersonalData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    portfolioLink: "",
  };

  const clearSkillsData = {
    certs: "",
    skills: "",
    interests: "",
  };

  const onPersonalDataChange = (newState) => {
    setPersonalData(newState);
  };

  const onEducationDataChange = (newState) => {
    setEducationData(newState);
  };

  const onWorkDataChange = (newState) => {
    setWorkData(newState);
  };

  const onSkillDataChange = (newState) => {
    setSkillData(newState);
  };

  const onSwap = () => {
    let newVal = !swap;
    setSwap(newVal);
  }

  const clearForm = () => {
    setPersonalData(clearPersonalData);
    setEducationData([]);
    setWorkData([]);
    setSkillData(clearSkillsData);
  };

  const loadForm = () => {
    setPersonalData(tomData.personal);
    setEducationData(tomData.education);
    setWorkData(tomData.experience);
    setSkillData(tomData.skills);
  };

  let formValues = { personalData, onPersonalDataChange };
  let viewValues = { personalData, educationData, workData, skillData,swap};

  return (
    <div className="MakerWrapper">
      <div className="MakerForm">
        <FormHeader clearForm={clearForm} loadForm={loadForm} />
        <FormPersonal
          personalData={personalData}
          onPersonalDataChange={onPersonalDataChange}
        />

        {swap ? (
          <>
            <FormWork workData={workData} onWorkDataChange={onWorkDataChange} onSwap={onSwap} />
            <FormEducation
              educationData={educationData}
              onEducationDataChange={onEducationDataChange}
              onSwap={onSwap}
            />
          </>
        ) : (
          <>
            <FormEducation
              educationData={educationData}
              onEducationDataChange={onEducationDataChange}
              onSwap={onSwap}
            />
            <FormWork workData={workData} onWorkDataChange={onWorkDataChange} onSwap={onSwap}/>
          </>
        )}

        <FormSkills
          skillData={skillData}
          onSkillDataChange={onSkillDataChange}
        />
      </div>

      <MakerView viewValues={viewValues} />
    </div>
  );
};
