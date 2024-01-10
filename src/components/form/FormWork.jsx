import React, { useState, useEffect } from "react";
import TextInputIcon from "@mui/icons-material/CreateOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { v4 as uuidv4 } from "uuid";

export const FormWork = ({ workData, onWorkDataChange, onSwap }) => {
  const [inputMode, setInputMode] = useState(null); // "null" -> No Form, "Anything" -> Form

  function findIndexById() {
    if (inputMode == "new") {
      return workData.length - 1;
    }

    for (let i = 0; i < workData.length; i++) {
      if (workData[i].id === inputMode) {
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

    //Template objects
    const child = {
      data: "",
      id: uuidv4(),
    };

    let templateParent = {
      data: "",
      id: uuidv4(),
      children: [child],
    };

    let newEduEntry = {
      id: uuidv4(),
      company: "",
      position: "",
      dateStart: "",
      dateEnd: "",
      location: "",
      summary: "",
      description: [templateParent],
    };

    const newLocalData = [...workData];
    newLocalData.push(newEduEntry);
    onWorkDataChange(newLocalData);
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
    let localDataCopy = [...workData];

    if (inputMode == "new") {
      let lastObject = localDataCopy[localDataCopy.length - 1];
      lastObject[className] = value;
    } else {
      localDataCopy = workData.map((item) => {
        if (item.id === inputMode) {
          // Update the value based on the className
          return { ...item, [className]: value };
        } else {
          return item;
        }
      });
    }
    onWorkDataChange(localDataCopy);
  };

  //When only on a new form, pressing cancel removes the newest entry added (last element in the localData)
  let cancelFormInput = () => {
    if (inputMode == "new") {
      let localDataCopy = workData;
      localDataCopy.pop();
      onWorkDataChange(localDataCopy);
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
    const updatedLocalData = workData.filter((entry) => entry.id !== entryId);

    console.log(`Entry with id ${entryId} removed from the array.`);

    // Update the state with the new array
    onWorkDataChange(updatedLocalData);
  }

  let removeDescription = (e) => {
    const textId = e.currentTarget.id;

    const workDataCopy = [...workData];

    // Map through the workData array
    workDataCopy[editIndex].description = workDataCopy[editIndex].description
      .map((parent) => {
        // Check if the parent has a matching id
        if (parent.id === textId) {
          if (workDataCopy[editIndex].description.length < 2) {
          } else {
            return null; // Returning null will remove this entry
          }
        }

        // Check if any child has a matching id
        if (parent.children && parent.children.length > 1) {
          parent.children = parent.children.filter(
            (child) => child.id !== textId
          );
        }

        return parent;
      })
      .filter(Boolean); // Filter out null values

    onWorkDataChange(workDataCopy);
  };

  const editDescription = (e) => {
    const textId = e.currentTarget.id;
    const value = e.target.value;

    // Create a shallow copy of the workData array
    const editedWorkData = [...workData];

    // Map through the workData array
    editedWorkData[editIndex].description = editedWorkData[
      editIndex
    ].description.map((parent) => {
      // Check if the parent or any child has a matching id
      if (parent.id === textId) {
        parent.data = value;
      } else {
        // If the parent has children, update the data for the matching child
        if (parent.children) {
          parent.children = parent.children.map((child) => {
            if (child.id === textId) {
              return { ...child, data: value };
            }
            return child;
          });
        }
      }

      return parent;
    });

    // Update the state in the parent component
    onWorkDataChange(editedWorkData);
  };

  const addDescription = () => {
    const child = {
      data: "",
      id: uuidv4(),
    };

    let templateParent = {
      data: "",
      id: uuidv4(),
      children: [child],
    };

    const editedWorkData = [...workData];
    editedWorkData[editIndex].description.push(templateParent);
    onWorkDataChange(editedWorkData);
  };

  const addChildDescription = (e) => {
    const textId = e.currentTarget.id;

    // Child Template
    const child = {
      data: "",
      id: uuidv4(),
    };

    // Create a shallow copy of the workData array
    const editedWorkData = [...workData];

    editedWorkData[editIndex].description = editedWorkData[
      editIndex
    ].description.map((parent) => {
      // If the parent has children, update the data for the matching child
      if (parent.children.some((obj) => obj.id === textId)) {
        // Push the child into the children array
        parent.children.push(child);
      }

      return parent;
    });

    onWorkDataChange(editedWorkData);
  };

  const swapWithNext = (e) => {

    const textId = e.currentTarget.id;
    const editedWorkData = [...workData];

    const index = editedWorkData.findIndex(obj => obj.id === textId);

    if (index !== -1 && index < editedWorkData.length - 1) {

      const temp = editedWorkData[index];
      editedWorkData[index] = editedWorkData[index + 1];
      editedWorkData[index + 1] = temp;
    }

    onWorkDataChange(editedWorkData);


  }

  var open = false;
  let toggleForm = () => {
    //CLOSING FORM
    const element = document.querySelector(".work-container");
    element.classList.toggle("closed");

    //ROTATING ARROW
    let arrow = document.querySelector(".work-downIcon");

    if (open) {
      arrow.classList.remove("open");
    } else {
      arrow.classList.add("open");
    }

    open = !open;
  };

  const entryList = workData.map((entry) => {
    return (
      <div key={entry.id} className="entry">
        <div className="entryInfo">
          <p>{entry.company}</p>
          <p>{entry.position}</p>
        </div>
        <div className="right-side-buttons">
          <p className="editButton" id={entry.id} onClick={editEntry}>
            Edit
          </p>
          <p className="deleteButton" id={entry.id} onClick={deleteEntry}>
            Delete
          </p>
          <DownIcon
            className="work-downIcon arrowIcon"
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
        {formInput("text", "company", "Company Name")}
        {formInput("text", "position", "Position Title")}

        <div className="dateContainer">
          {formInput("text", "dateStart", "Start Date")}
          {formInput("text", "dateEnd", "End Date")}
        </div>

        {formInput("text", "location", "Location")}
        {formInput("text", "summary", "Summary")}
        {descriptiveInput()}
      </>
    );
  };

  const formInput = (inputType, className, placeHolder) => {
    return (
      <div className={`input-container ${className}`}>
        <TextInputIcon style={{ color: "#C0C0AB" }} />
        <input
          value={workData[editIndex][className]}
          onChange={handleInputChange}
          type={inputType}
          className={className}
          placeholder={placeHolder}
        />
      </div>
    );
  };

  const descriptiveInput = () => {
    return (
      <>
        {workData[editIndex]["description"].map((info) => (
          <div key={info.id}>
            <div className={`input-container description-parent`}>
              <AddIcon
                style={{ color: "#C0C0AB" }}
                id={info.id}
                onClick={addDescription}
              />
              <RemoveIcon
                style={{ color: "#C0C0AB" }}
                id={info.id}
                onClick={removeDescription}
              />

              <input
                id={info.id}
                value={info.data}
                onChange={editDescription}
                type="text"
                className="description-parent"
                placeholder="Describe the job"
              />
            </div>

            {info.children.map((text) => (
              <div key={text.id} className={`input-container child`}>
                <AddIcon
                  style={{ color: "#C0C0AB" }}
                  id={text.id}
                  onClick={addChildDescription}
                />
                <RemoveIcon
                  style={{ color: "#C0C0AB" }}
                  id={text.id}
                  onClick={removeDescription}
                />

                <input
                  id={text.id}
                  value={text.data}
                  onChange={editDescription}
                  type="text"
                  className="description-child"
                  placeholder="Describe the job"
                />
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };

  //onClick={toggleForm}
  return (
    <div className="FormWork">
      <div className="title">
        <h2>Experience</h2>

        <div className="right-side-buttons">
          <p className="switchButton" onClick={onSwap}>Switch</p>
          <DownIcon className="work-downIcon arrowIcon" onClick={toggleForm} />
        </div>
      </div>

      <div className="work-container">
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
              {workData.length !== 0 && (
                <div className="entriesContainer">{entryList}</div>
              )}

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
