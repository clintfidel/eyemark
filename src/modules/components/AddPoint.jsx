import React from "react";
import { SelectField, Textarea } from "components";
import Button from "components/Button";
import "./style.scss";

const AddPoint = ({ action }) => {
  return (
    <div className="comment-modal">
      <div className="h-58 card-invite-p">
        <p className="invite-header mt-4 mb-3">Add Point </p>
        <div className="flex justify-between mt-10">
          <SelectField label="Choose Category" className="select-container-point" />{" "}
        </div>
        <Textarea className="p-text-area" placeholder="Write description here..." />
        <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
          <Button text="Cancel" onClick={action} className="btn-size-sm btn-no-bg mr-3" />
          <Button text="Add Point" className="btn-size-sm btn-disabled invite-btn" />
        </div>
      </div>
    </div>
  );
};

export default AddPoint;
