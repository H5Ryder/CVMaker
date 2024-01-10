import React from "react";

export const Skill = ({ skillData }) => {
  const hasContent = skillData.certs !== "" || skillData.skills !== "" || skillData.interests !== "";

  return (
    <div className="Skills">
      {hasContent && (
        <>
          <h3 className="title">ADDITIONAL SKILLS</h3>
          <ul>
            {skillData.certs !== "" && <li>{skillData.certs}</li>}
            {skillData.skills !== "" && <li>{skillData.skills}</li>}
            {skillData.interests !== "" && <li>{skillData.interests}</li>}
          </ul>
        </>
      )}
    </div>
  );
};
