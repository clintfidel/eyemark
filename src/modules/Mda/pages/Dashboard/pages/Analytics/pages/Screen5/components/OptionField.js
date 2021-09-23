import React from "react";
import MultipleChoice from "./MultipleChoice";
import RatingScale from "./RatingScale";
import Dropdown from "./Dropdown";
import OpenEnded from "./OpenEnded";

const OptionField = ({ fieldDisplay }) => {
  const field = () => {
    switch (fieldDisplay) {
      case "multiple":
        return <MultipleChoice />;
      case "rating-scale":
        return <RatingScale />;
      case "dropdown":
        return <Dropdown />;
      case "open-ended":
        return <OpenEnded />;
    }
  };
  return field(fieldDisplay);
};
export default OptionField;
