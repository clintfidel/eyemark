import React from "react";
import "../style.css";
import HeaderImage from "../assets/header-image.png";
import { SIZES } from "../constants";

const SurveyDescription = () => {
  return (
    <div className="description-card" style={{ width: 749 * SIZES.scale }}>
      <img src={HeaderImage} width={749 * SIZES.scale} alt="" />
      <div className="hero" style={styles.hero}>
        300,000 Affordable Housing Units
      </div>
      <div className="content">
        <p className="survey-title" style={styles.survey_title}>
          Untitled Survey
        </p>
        <textarea className="textarea" placeholder="Survey Description" />
      </div>
    </div>
  );
};

export default SurveyDescription;

const styles = {
  hero: {
    position: "absolute",
    width: 275 * SIZES.scale,
    marginTop: -20 * SIZES.scale
  },
  survey_title: {
    marginTop: 30 * SIZES.scale
  }
};
