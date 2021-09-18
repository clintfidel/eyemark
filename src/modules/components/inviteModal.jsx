import React from "react";
import { Input } from "components";
import Button from "components/Button";
import "./style.scss";

const InviteModal = ({ action }) => {
  return (
    <div className="comment-modal">
      <div className="card-invite">
        <p className="invite-header mt-4 mb-3">Invite Contractor</p>
        <p className="invite-sub-header">Please provide the following details to invite a contractor</p>
        <div className="flex justify-between mt-20">
          <Input className="input-invite" placeholder="Company Name" />
          <Input className="input-invite" placeholder="Email Address" />
        </div>
        <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
          <Button text="Cancel" onClick={action} className="btn-size-sm btn-no-bg mr-3" />
          <Button text="Send Invite" className="btn-size-sm btn-disabled invite-btn" />
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
