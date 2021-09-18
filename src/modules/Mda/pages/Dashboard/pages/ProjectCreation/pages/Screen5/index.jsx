import React, { useState } from "react";
import "./style.scss";
import "../../style.scss";
import { AddMore, DeleteIcon } from "assets/icons(svg)";
import { Input, Textarea } from "components";

const Screen5 = () => {
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
          <p className="circular-progress-track">5</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            Basic Information / Location / Theory of Change / Contractor Information /{" "}
            <span className="text-black">Project Tracking</span> / Budget Information
          </p>
        </div>
      </div>
      <div className="flex mt-10 location-sec-2">
        <div className="location-count-cont">
          <p className="location-no">2</p>
          <p className="location-title-text pt-5">ADDED LOCATION(S)</p>
        </div>
        <div className="ml-4">
          <p className="p-location">Project Location(s)</p>
          <p className="b-location pt-1">Please provide beneficiary locations(s) for this project</p>
        </div>
      </div>
      <>
        <div className="flex justify-end mt-20 mr-12">
          <p className="add-more-text"> Click the plus button to add more states</p>
        </div>
        <div className="flex ">
          <hr className="divider-more mt-3" />
          <img className="add-more-icon" src={AddMore} />
        </div>
      </>
      <div className="mt-10 p-8 milestone-cont">
        <div className="">
          <div className="flex justify-between">
            <p className="title-milestone">Title of Milestone</p>
            <div className="m-edit-btn p-1">
              <p className="m-edit-text">Edit</p>
            </div>
          </div>
          <p className="m-description mt-10">
            Sed suspendisse aliquet euismod nulla nisl, diam at. At congue ullamcorper lectus proin ac. Nulla id non,
            magna nam interdum ullamcorper mattis. Dictum diam facilisi tortor posuere consectetur at mus duis. Mauris
            aliquam vulputate nisl etiam dignissim sagittis. Pellentesque netus pretium tortor libero, leo, non tellus.
            Fringilla viverra amet tincidunt libero cursus arcu.
          </p>
          <div className="flex m-status-date justify-between mt-20">
            <div className="flex justify-between  m-status-date-deet">
              <div className="m-status w-28">
                <p className="m-status-text">Completed</p>
                <p className="m-status-tit pt-3">Status</p>
              </div>
              <div className="m-enddate w-36 mr-4">
                <p className="m-date-text">29th May 2021</p>
                <p className="m-date-tit pt-3">expected start date</p>
              </div>
              <div className="m-startdate">
                <p className="m-date-text">29th July 2021</p>
                <p className="m-date-tit pt-3">expected end date</p>
              </div>
            </div>
            <img src={DeleteIcon} />
          </div>
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

export default Screen5;
