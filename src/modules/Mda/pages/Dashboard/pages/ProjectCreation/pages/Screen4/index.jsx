import React, { useState } from "react";
import "../../style.scss";
import "./style.scss";
import { AddMore, DeleteIcon } from "assets/icons(svg)";
import { SelectField } from "components";

const Screen4 = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  return (
    <>
      <div className="flex project-sec-header">
        <div className="circular-progress mr-4">
          <p className="circular-progress-track">4</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            Basic Information / Location / Theory of Change / <span className="text-black">Contractor Information</span>
            / Project Tracking / Budget Information
          </p>
        </div>
      </div>
      <div className="flex justify-between s4-cont mt-3">
        <div className="s4-sec1">
          <div className="flex w-100 mt-10 location-sec-2">
            <div className="location-count-cont">
              <p className="location-no">0</p>
              <p className="location-title-text pt-5">ADDED LOCATION(S)</p>
            </div>
            <div className="ml-4">
              <p className="p-location">Project Location(s)</p>
              <p className="b-location pt-1">Please provide beneficiary locations(s) for this project</p>
            </div>
          </div>
          <SelectField labelPadding="34px" inputcode="GPZ" label="Julius Berger" className="select-container mt-7" />
          <div>
            <div className="flex justify-end mt-10 mr-12">
              <p className="add-more-text"> Click the plus button to add more contractors</p>
            </div>
            <div className="flex ">
              <hr className="divider-more mt-3" />
              <img className="add-more-icon-s4" src={AddMore} />
            </div>
          </div>
        </div>

        <div className="text-area-project mt-10">
          <p className="project-desc pb-4">Project Tags</p>
          <div className="text-area-tag"></div>
        </div>
      </div>
      <div className="mt-56">
        <hr className="" />
        <div className="flex justify-between my-3">
          <div className="previous-project">
            <p className="previous-text">Back</p>
          </div>
          <div className="next-project py-4">
            <p className="next-text ">Next</p>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Screen4;
