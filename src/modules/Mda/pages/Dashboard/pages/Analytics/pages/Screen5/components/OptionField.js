import React from "react";
import MultipleChoice from "./MultipleChoice";
import RatingScale from "./RatingScale";

const OptionField = ({ fieldDisplay }) => {
  const field = () => {
    switch (fieldDisplay) {
      case "multiple":
        return <MultipleChoice />;
      case "rating-scale":
        return <RatingScale />;
    }
  };
  return field(fieldDisplay);
};
export default OptionField;
