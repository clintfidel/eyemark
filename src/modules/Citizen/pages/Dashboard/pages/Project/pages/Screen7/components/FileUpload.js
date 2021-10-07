import React, { useState } from "react";
import { SIZES } from "../constants";
import { ReactComponent as Drag } from "../assets/drag.svg";
import { FileUpload, Thumbnail } from "assets/icons(svg)";
import "../style.css";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };
  return (
    <>
      <div className="other-card" style={{ width: 749 * SIZES.scale }}>
        <Drag style={{ marginBottom: 20 }} />
        <div className="">
          <div style={{ display: "inline-flex", padding: 2 }}>
            <div className="mb-5">Prove file for this project</div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex w-36 h-16 px-4 py-4 rounded border-2 border-gray-200 justify-between">
            <p className="add-file">Add File</p>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{ display: "none" }}
              onChange={onFileChange}
            />
            <label htmlFor="icon-button-file">
              <img className="h-5 w-5" src={FileUpload} />
            </label>
          </div>
        </div>
      </div>

      {selectedFile ? (
        <div className="other-card" style={{ width: 749 * SIZES.scale }}>
          <Drag style={{ marginBottom: 20 }} />
          <div className="">
            <div style={{ display: "inline-flex", padding: 2 }}>
              <div className="mb-5">File for this project</div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex w-full h-14 px-4 py-4 rounded border-2 border-gray-200">
              <img className="h-5 w-5 mr-4" src={Thumbnail} />
              <p className="view-file">{`${selectedFile.name}.${selectedFile.type}`}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UploadFile;
