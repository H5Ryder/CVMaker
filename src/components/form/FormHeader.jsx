import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import AutoFillIcon from "@mui/icons-material/AutoFixHighOutlined";
import ClearIcon from "@mui/icons-material/ClearOutlined";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const FormHeader = ({clearForm,loadForm}) => {



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
  }

  const erase = (e) => {
    console.log("clear");
    clearForm();
  }


  return (
    <>
      <div className="FormHeader">
        <h1>No BullShit Resume</h1>

        <div className="headerButtons">
          <button type="button" onClick={exportPdf}>
            <DownloadIcon className="headerButIcon"/>
            Save
          </button>
          <button type="button "onClick ={autofill} >
            <AutoFillIcon className="headerButIcon" onClick ={autofill}/>
            Autofill
          </button>
          <button type="button" onClick ={erase}>
            <ClearIcon className="headerButIcon" onClick = {erase}/>
            Clear
          </button>
        </div>
      </div>

      
    </>
  );
};
