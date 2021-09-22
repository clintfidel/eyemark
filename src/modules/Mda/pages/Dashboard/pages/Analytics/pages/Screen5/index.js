import React from "react";
import "./style.css";
import Tabs from "./components/Tabs.js";
import SurveyDescription from "./components/SurveyDescription";
import { SIZES } from "./constants";
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";

function Questions() {
  return (
    <>
      <Header />
      <Tabs />
      <div style={styles.container}>
        <div style={styles.FormContainer}>
          <SurveyDescription />
          <QuestionCard />
        </div>
      </div>
    </>
  );
}

export default Questions;

const styles = {
  FormContainer: {
    fontSize: SIZES.width > 1280 ? 14 : 12
  },
  container: {
    display: SIZES.width > 991 ? "flex" : "",
    backgroundColor: "#F5F4F0",
    paddingTop: 44 * SIZES.scale,
    paddingLeft: SIZES.width > 991 ? 346 * SIZES.scale : "",
    paddingRight: SIZES.width > 991 ? 50 * SIZES.scale : ""
  }
};
