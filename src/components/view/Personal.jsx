import React, { useState } from "react";

export const Personal = ({ personalData }) => {
  return (
    <div className="Personal">
      <h3 className="name">{personalData.fullName}</h3>

      <div className="personal-details">
        {personalData.email && <p className="email">{personalData.email}</p>}
        {personalData.phoneNumber && (
          <p className="phone">&nbsp;/&nbsp;{personalData.phoneNumber}</p>
        )}
        {personalData.address && (
          <p className="location">&nbsp;/&nbsp;{personalData.address}</p>
        )}
        {personalData.portfolioLink && (
          <>
            <p>&nbsp;/&nbsp;</p>
            <a href={personalData.portfolioLink} className="portfolio">
              {personalData.portfolioLink}
            </a>
          </>
        )}
      </div>
    </div>
  );
};
