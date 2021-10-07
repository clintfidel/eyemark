import React, { useState } from "react";
import { MultiChoice, Likecart, Rating, UploadFile, OpenEnded, DropDownIcon } from "assets/icons(svg)";

const TypeDropDown = ({ show }) => {
  const [field, setFielType] = useState("");
  const showHideClassName = show ? "block modal" : "hidden modal";
  return (
    <div className={`${showHideClassName} modal-cont mt-10`}>
      <div className="bg-white px-3 py-3 h-58 w-56 rounded type-dropdown">
        <p className="pb-6">Question Type</p>
        <div className="flex mb-3">
          <img className="mr-3" src={MultiChoice} />
          <p className="dropdown-text">Multipe choice </p>
        </div>
        <div className="flex mb-3">
          <img className="mr-3" src={Rating} />
          <p className="dropdown-text">Rating scale </p>
        </div>
        <div className="flex mb-3">
          <img className="mr-3" src={Likecart} />
          <p className="dropdown-text">Likert scale</p>
        </div>
        <div className="flex mb-3">
          <img className="mr-3" src={DropDownIcon} />
          <p className="dropdown-text">Dropdown</p>
        </div>
        <div className="flex mb-3">
          <img className="mr-3" src={OpenEnded} />
          <p className="dropdown-text">Open-ended</p>
        </div>
        <div className="flex mb-3">
          <img className="mr-3" src={UploadFile} />
          <p className="dropdown-text">File upload</p>
        </div>
      </div>
    </div>
  );
};

export default TypeDropDown;
