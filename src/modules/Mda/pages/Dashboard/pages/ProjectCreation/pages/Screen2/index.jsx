import React, { useState } from "react";
import "../../style.scss";
import "./style.scss";
import { AddMore, RemoveIcon, Pointer } from "assets/icons(svg)";
import { Input, SelectField } from "components";

const Screen2 = () => {
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
          <p className="circular-progress-track">2</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            Basic Information / <span className="text-black">Location</span> / Theory of Change / Contractor Information
            / Project Tracking / Budget Information
          </p>
        </div>
      </div>
      <div className="flex mt-10 location-sec-2">
        <div className="location-count-cont">
          <p className="location-no">0</p>
          <p className="location-title-text pt-5">ADDED LOCATION(S)</p>
        </div>
        <div className="ml-4">
          <p className="p-location">Project Location(s)</p>
          <p className="b-location pt-1">Please provide beneficiary locations(s) for this project</p>
        </div>
      </div>
      <div className="mt-8">
        <img className="rmIcon mt-2" src={RemoveIcon} />
        <div className="form-control-l">
          <div className="flex justify-between">
            <Input image={Pointer} className="input-invite-l" placeholder="Long.Lat" />
            <SelectField labelPadding="30px" inputcode="GPZ" label="State" className="select-container" />
            <SelectField label="Local Government Area" className="select-container" />
          </div>
        </div>
      </div>
      {inputList.map((x, i) => {
        <div className="form-control-l">
          <div className="flex justify-between mt-8">
            <Input className="input-invite-l" placeholder="Long.Lat" />
            <SelectField labelPadding="15px" inputcode="GPZ" label="State" className="select-container" />
            <SelectField label="Local Government Area" className="select-container" />
            <img className="" src={RemoveIcon} />
          </div>
        </div>;
      })}
      <div>
        <div className="flex justify-end mt-20 mr-12">
          <p className="add-more-text"> Click the plus button to add more states</p>
        </div>
        <div className="flex ">
          <hr className="divider-more mt-3" />
          <img className="add-more-icon" src={AddMore} />
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

export default Screen2;
