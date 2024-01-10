import React, { useState, useEffect } from "react";
import TextInputIcon from "@mui/icons-material/CreateOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { v4 as uuidv4 } from "uuid";

export const FormEducation = ({ educationData, onEducationDataChange, onSwap}) => {
  //const [localData, setLocalData] = useState(educationData);
  const [inputMode, setInputMode] = useState(null); //"empty" -> Empty Form, "null" -> No Form, "Anything" -> Form

  console.log("Check this:");
  console.log(educationData);
  console.log(inputMode);


  function findIndexById() {
    if (inputMode == "new") {
        return (educationData.length - 1)
    }

    for (let i = 0; i < educationData.length; i++) {
        if (educationData[i].id === inputMode) {
            return i; 
        }
    }
    // Return -1 if no match is found
    return -1;
}
 let editIndex = findIndexById();


//When Add New button is clicked an empty form is opened 
  let addNew = () => {
    //Set input Mode to "New" means new empty form, create an empty object, add to education array, update locally and send to parent(wrapper)
    let newId = "new";
    setInputMode(newId);

    let newEduEntry = {
      id: uuidv4(),
      school: "",
      degree: "",
      dateStart: "",
      dateEnd: "",
      results: "",
      activities: "",
    };

    const newLocalData = [...educationData];
    newLocalData.push(newEduEntry);
    console.log(newLocalData);
    onEducationDataChange(newLocalData);
  };

//When Edit on a specific entry is clicked a form populated with entry data is opened
  let editEntry = (e) => {
    e.preventDefault();
    const entryId = e.currentTarget.id;
    setInputMode(entryId);
  };

//When on the form, each form inputs updates the localData and Wrapper data
  const handleInputChange = (e) => {
    const { className, value } = e.target;
    let localDataCopy = [...educationData];

    if (inputMode == "new") {
      let lastObject = localDataCopy[localDataCopy.length - 1];
      lastObject[className] = value;
    } else {
       localDataCopy = educationData.map((item) => {
        if (item.id === inputMode) {
          // Update the value based on the className
          return { ...item, [className]: value };
        } else {
          return item;
        }
      });
    }
    onEducationDataChange(localDataCopy);
  };

//When only on a new form, pressing cancel removes the newest entry added (last element in the localData)
  let cancelFormInput = () => {
    if (inputMode == "new") {
      let localDataCopy = educationData;
      localDataCopy.pop();
      onEducationDataChange(localDataCopy);
      setInputMode(null);
    }
  };

//
  let submitForm = (e) => {
    e.preventDefault(); 

    if (inputMode !== null) {
      setInputMode(null);
    }
  };
  
  function deleteEntry(e) {
    e.preventDefault();
    const entryId = e.currentTarget.id;
    console.log("Deleting entry with id:", entryId);

    // Create a new array without the entry to delete
    const updatedLocalData = educationData.filter((entry) => entry.id !== entryId);

    console.log(`Entry with id ${entryId} removed from the array.`);

    // Update the state with the new array
    onEducationDataChange(updatedLocalData);
  }
  

  const swapWithNext = (e) => {

    const textId = e.currentTarget.id;
    const editedEdcuationData = [...educationData];

    const index = editedEdcuationData.findIndex(obj => obj.id === textId);

    if (index !== -1 && index < editedEdcuationData.length - 1) {

      const temp = editedEdcuationData[index];
      editedEdcuationData[index] = editedEdcuationData[index + 1];
      editedEdcuationData[index + 1] = temp;
    }

    onEducationDataChange(editedEdcuationData);


  }


  var open = false;
  let toggleForm = () => {
    //CLOSING FORM
    const element = document.querySelector(".education-container");
    element.classList.toggle("closed");

    //ROTATING ARROW
    let arrow = document.querySelector(".education-downIcon");

    if (open) {
      arrow.classList.remove("open");
    } else {
      arrow.classList.add("open");
    }

    open = !open;
  };

  const entryList = educationData.map((entry) => {
    return (
      <div key={entry.id} className="entry">
        <div className="entryInfo">
          <p>{entry.school}</p>
          <p>{entry.degree}</p>
        </div>
        <div className="right-side-buttons">
          <p className="editButton" id={entry.id} onClick={editEntry}>
            Edit
          </p>
          <p className="deleteButton" id={entry.id} onClick={deleteEntry}>
            Delete
          </p>
          <DownIcon
            className="education-downIcon arrowIcon"
            id={entry.id}
            onClick={swapWithNext}
          />
        </div>
      </div>
    );
  });

  const formInputList = () => {
    return (
      <>
        {formInput('text', 'school', 'School or University')}
        {formInput('text', 'degree', 'Qualification')}

        <div className="dateContainer">
        {formInput('text', 'dateStart', 'Start Date')}
        {formInput('text', 'dateEnd', 'End Date')}
        </div>
        {formInput('text', 'results', 'Results')}
        {formInput('text', 'activities', 'Activities')}



      </>
    );
  };

  const formInput = (inputType, className, placeHolder) => {
    return (
      <div className={`input-container ${className}`}>
        <TextInputIcon style={{ color: "#C0C0AB" }} />
        <input
          value={educationData[editIndex][className]} 
          onChange={handleInputChange}
          type={inputType}
          className={className}
          placeholder={placeHolder}
        />
      </div>
    );
  };


  //onClick={toggleForm}
  return (
    <div className="FormEducation">
      <div className="title">
        <h2>Education</h2>

        <div className="right-side-buttons">
          <p className="switchButton" onClick={onSwap} >Switch</p>
          <DownIcon
            className="education-downIcon arrowIcon"
            onClick={toggleForm}
          />
        </div>
      </div>

      <div className="education-container">
        <div>
          {inputMode !== null && (
            <form>
              {formInputList()}

              <div className="rightHandButtons">
                {inputMode == "new" && (
                  <button onClick={cancelFormInput}>Cancel</button>
                )}
                <button onClick={submitForm}>Submit</button>
              </div>
            </form>
          )}

          {/* No form if inputMode is null */}
          {inputMode === null && (
            <>
              {educationData.length !==
                0 && (<div className="entriesContainer">{entryList}</div>)}
              <div className="addMore-container">
                <button className="addMore" onClick={addNew}>
                  Add More
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
