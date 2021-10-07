import React, { useState } from "react";
import { Person, Verified } from "assets/icons(svg)";
import { followUser, unfollowUser } from "network/api";

const UserTab = ({ suggestion, isTouched }) => {
  const [clickBtn2, setClickBtn2] = useState(false);
  const toggleBtn2 = async user_id => {
    try {
      if (clickBtn2) {
        setClickBtn2(false);
        isTouched(false);
        await unfollowUser(user_id);
      } else {
        setClickBtn2(true);
        isTouched(true);
        await followUser(user_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mb-6 justify-between">
      <div className="flex">
        <img className="mr-5" src={suggestion.avatar || Person} />
        <div className="">
          <div className="flex">
            <p className="first-text font-bolder">{suggestion.display_name || "Valar Dohaeris?"}</p>
            {suggestion.email_verified && <img className="ml-4" src={Verified} />}
          </div>
          <p className="flex mt-2 sub-text-1">
            {suggestion.follower_count} Followers
            <span className="text-status-1 ml-3">{suggestion.following_count} Following</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => toggleBtn2(suggestion.public_id)}
        className={`follow-button border-dashed ${clickBtn2 ? "follow-button-click" : "follow-button"}`}
      >
        {clickBtn2 ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserTab;
