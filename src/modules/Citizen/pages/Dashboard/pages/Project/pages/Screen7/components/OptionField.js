import React from "react";
import MultipleChoice from "./MultipleChoice";
import RatingScale from "./RatingScale";
import Dropdown from "./Dropdown";
import OpenEnded from "./OpenEnded";

const OptionField = ({ fieldDisplay }) => {
  const field = () => {
    switch (fieldDisplay) {
      case "Multiple choice":
        return <MultipleChoice />;
      case "Rating scale":
        return <RatingScale />;
      case "Dropdown":
        return <Dropdown />;
      case "Open-ended":
        return <OpenEnded />;
    }
  };
  return field(fieldDisplay);
};
export default OptionField;
