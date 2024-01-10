import React from "react";

export const Work = ({ workData }) => {
  const listOutData = () => {
    return (
      <div>
        {workData.map((entry, index) => (
          eachEntry(entry, index)
        ))}
      </div>
    );
  };

  const eachEntry = (jobEntry, index) => {
    let { id,company, position, dateStart, dateEnd, location, summary, description } = jobEntry;

    return (
      <div className={`work-entry ${company}`} key={id}>
        <div className="topRow">
          <h3 className="company">
            {position && company ? `${position}, ${company}` : position || company}
            {location ? `, ${location}`: location}
          </h3>
          <h3 className="date">
            {dateStart} &mdash; {dateEnd}
          </h3>
        </div>

        <div className = "summary">
            <p>{summary}</p>
        </div>

        <div className="info">
        <NestedListItemGenerator items={description}/>
        </div>
      </div>
    );
  };


  function NestedListItemGenerator({ items }) {
    const generateList = (items) => {
      return (
        <ul>
          {items.map((item, index) => (
            item.data !== "" && (
              <li key={index}>
                {item.data}
                {item.children && item.children.length > 1 && (
                  <NestedListItemGenerator items={item.children} />
                )}
              </li>
            )
          ))}
        </ul>
      );
    };
  
    return generateList(items);
  }
  

  return (
    <div className="Experience">
      <h3 className="title">EXPERIENCE</h3>
      {workData && workData.length > 0 ? listOutData() : <p>No education data available</p>}
    </div>
  );
};
