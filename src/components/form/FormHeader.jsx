import React, { useState } from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import AutoFillIcon from "@mui/icons-material/AutoFixHighOutlined";
import ClearIcon from "@mui/icons-material/ClearOutlined";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const FormHeader = ({ clearForm, loadForm }) => {
  const [isChecked, setChecked] = useState(false);

  let exportPdf = () => {
    const element = document.querySelector(".MakerView");

    if (!element) {
      console.error("Element with class 'MakerView' not found");
      return;
    }

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Specify 'a4' for A4 dimensions
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Set dimensions to A4 size
      pdf.save("CV.pdf");
    });
  };

  const autofill = (e) => {
    console.log("autofill");
    loadForm();
  };

  const erase = (e) => {
    console.log("clear");
    clearForm();
  };

  const handleToggleChange = (e) => {
    setChecked(e.target.checked);

    // Update CSS variables based on the toggle state
    const root = document.documentElement;

    if (e.target.checked) {
      //NIGHT
      root.style.setProperty("--color-primary", "#FFFFE3");
      root.style.setProperty("--color-primary-light", "#464646");
      root.style.setProperty("--color-primary-bg", "#10100E");
    } else {
      //DAY
      root.style.setProperty("--color-primary", "#000000");
      root.style.setProperty("--color-primary-light", "#C0C0AB");
      root.style.setProperty("--color-primary-bg", "#FFFFE3");
    }
  };


  return (
    <>
      <div className="FormHeader">
        <div className="title-row">
          <h1>No BullShit Resume</h1>
          <div className="modeToggle">
            <input
              type="checkbox"
              id="check"
              className="toggle"
              checked={isChecked}
              onChange={handleToggleChange}
            />
            <label htmlFor="check"></label>
          </div>
        </div>

        <div className="headerButtons">
          <button type="button" onClick={exportPdf}>
            <DownloadIcon className="headerButIcon" />
            Save
          </button>
          <button type="button " onClick={autofill}>
            <AutoFillIcon className="headerButIcon" onClick={autofill} />
            Autofill
          </button>
          <button type="button" onClick={erase}>
            <ClearIcon className="headerButIcon" onClick={erase} />
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
