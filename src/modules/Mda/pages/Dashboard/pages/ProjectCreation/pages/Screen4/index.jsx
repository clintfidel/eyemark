import React, { useState, Component } from "react";
import { NavLink } from "react-router-dom";
import { createProjectRoutes, dashboardRoutes } from "routes/routes-list";
import "../../style.scss";
import "./style.scss";
import { AddMore, Bookmark } from "assets/icons(svg)";
import { SelectField } from "components";

class Screen4 extends Component {
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
    if (e.key === "Enter" && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  };

  render() {
    const { tags } = this.state;
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
              Basic Information / Location / Theory of Change /{" "}
              <span className="text-black">Contractor Information</span>/ Project Tracking / Budget Information
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between s4-cont mt-3">
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
        <div className="mt-56">
          <hr className="" />
          <div className="flex justify-between my-3">
            <NavLink
              className="previous-project"
              to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen3}`}
            >
              <p className="previous-text">Back</p>
            </NavLink>
            <NavLink
              className="next-project py-4"
              to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen5}`}
            >
              <p className="next-text ">Next</p>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>
      </>
    );
  }
}

export default Screen4;
