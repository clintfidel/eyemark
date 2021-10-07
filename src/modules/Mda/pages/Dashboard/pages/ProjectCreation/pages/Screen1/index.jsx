import React, { useState, Component } from "react";
import { NavLink } from "react-router-dom";
import { createProjectRoutes, dashboardRoutes } from "routes/routes-list";
import "../../style.scss";
import "./style.scss";

import { Input, Textarea, SelectField } from "components";
import { PencilIcon, Bookmark } from "assets/icons(svg)";

class Screen1 extends Component {
  constructor() {
    super();

    this.state = {
      tags: ["Tags", "Input"]
    };
  }

  removeTag = i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  inputKeyDown = e => {
    const val = e.target.value;
    if ((e.key === "Enter" || e.key === ",") && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      e.target.value = "";
      this.setState({ tags: [...this.state.tags, val] });
    } else if (e.key === "Backspace" && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  };

  render() {
    const { tags } = this.state;
    return (
      <>
        <div className="flex project-sec-header space-x-4">
          <div className="circular-progress ">
            <p className="circular-progress-track">1</p>
          </div>
          <div>
            <p className="project-sec-title mb-2">Project Information</p>
            <p className="project-sec">
              {" "}
              <span className="text-black">Basic Information</span> / Location / Theory of Change / Contractor
              Information / Project Tracking / Budget Information
            </p>
          </div>
        </div>
        <div className="flex flex-wrap info-cont mt-10">
          <div className="info-image-cont">
            <img className="pencil-select" src={PencilIcon} />
          </div>
          <div className="form-cont">
            <Input className="input-invite" placeholder="Project Name" />
            <div className="form-control-d">
              <div className="flex justify-between mt-8">
                <SelectField label="Category" className="select-container-1" />
                <SelectField label="Sub-Category" className="select-container-1" />
              </div>
              <div className="flex justify-between">
                <Input className="input-invite" placeholder="Company Name" />
                <SelectField label="Project Timeline" className="select-container-1" />{" "}
              </div>
              <div className="flex date-input justify-between">
                <input
                  className="p-date-input"
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31"
                />
                <input
                  className="p-date-input"
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-100">
          <div className="text-area-project">
            <p className="project-desc pb-4">Description</p>
            <Textarea className="p-text-area" placeholder="Write description here..." />
          </div>
          <div className="text-area-project">
            <p className="project-desc pb-4">Project Tags</p>
            <div className="text-area-tag">
              <div className="flex m-6">
                <img className="mr-4" src={Bookmark} />
                <div className="input-tag">
                  <ul className="input-tag__tags">
                    <li className="input-tag__tags__input">
                      <input
                        placeholder="Enter a project tag or multiple tags"
                        type="text"
                        onKeyDown={this.inputKeyDown}
                        ref={c => {
                          this.tagInput = c;
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="mt-6" />
              <p className="mx-6 my-5 p-tag-text">Separate with a comma “,” to add tag.</p>
              <p className="mx-6 mt-8 mb-3 p-tag-text">Tag Suggestions</p>
              <div className=" input-tag__tags">
                {tags.map((tag, i) => (
                  <li className="mt-4 mx-2" key={tag}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => {
                        this.removeTag(i);
                      }}
                    >
                      +
                    </button>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <hr className="" />
          <div className="flex justify-end my-3">
            <NavLink
              className="next-project py-4"
              to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen2}`}
            >
              <div className="next-project py-4">
                <p className="next-text ">Next</p>
              </div>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>
      </>
    );
  }
}

export default Screen1;
