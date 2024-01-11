import React from "react";

export const Education = ({ educationData }) => {
  const listOutData = () => {
    return (
      <div>
        {educationData.map((entry, index) => (
          eachEntry(entry, index)
        ))}
      </div>
    );
  };

  const eachEntry = (schoolEntry, index) => {
    let { school, degree, dateStart, dateEnd, results, activities } = schoolEntry;

    return (
      <div className={`education-entry ${school}`} key={index}>
        <div className="topRow">
          <h3 className="school">
            {degree && school ? `${degree}, ${school}` : degree || school}
          </h3>
          <h3 className="date">
            {dateStart} &mdash; {dateEnd}
          </h3>
        </div>

        <div className="info">
          <ul>
            {results !== "" && <li>{results}</li>}
            {activities !== "" && <li>{activities}</li>}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="Education">
      {educationData && educationData.length > 0 ? (
        <>
          <h3 className="title">EDUCATION</h3>
          {listOutData()}
        </>
      ) : null}
    </div>
  );
};
