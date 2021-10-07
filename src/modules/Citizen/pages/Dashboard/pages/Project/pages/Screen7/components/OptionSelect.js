import React, { useState } from "react";
import { SIZES } from "../constants";
import { ReactComponent as Drag } from "../assets/drag.svg";
import { SelectField } from "components";
import "../style.css";

const OptionSelect = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="">
        <div style={{ display: "inline-flex", padding: 2 }}>
          <div className="mb-5">Which of these is correct about this project?</div>
        </div>
      </div>
      <div className="my-2 flex">
        <SelectField label="state" className="select-container mt-10" />
      </div>
    </div>
  );
};

export default OptionSelect;
