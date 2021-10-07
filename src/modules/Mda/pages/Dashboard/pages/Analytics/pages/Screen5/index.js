import React from "react";
import "./style.css";
import Tabs from "./components/Tabs.js";
import SurveyDescription from "./components/SurveyDescription";
import { SIZES } from "./constants";
import QuestionCard from "./components/QuestionCard";
import PlainQuestion from "./components/PlainQuestion";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
import "./components/style.scss";

function Questions() {
  return (
    <>
      <Header />
      <Tabs />
      <div style={styles.container}>
        <div style={styles.FormContainer}>
          <SurveyDescription />
          <QuestionCard fieldType="Multiple choice" />
          <QuestionCard fieldType="Multiple choice" />
          <PlainQuestion />
          <QuestionCard fieldType="Multiple choice" />
          <PlainQuestion />
          <QuestionCard fieldType="Rating scale" />
          <QuestionCard fieldType="Dropdown" />
          <QuestionCard fieldType="Rating scale" />
          <PlainQuestion />
          <QuestionCard fieldType="Open-ended" />
          <FileUpload />
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
