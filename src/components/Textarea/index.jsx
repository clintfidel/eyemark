import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./style.scss";

const useStyles = makeStyles(theme => ({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
}));

export default function Textarea({
  placeholder,
  type = "text",
  getTextValue = () => {},
  requiredValue = 100,
  className = ""
}) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleChange = event => {
    const value = event.target.value;
    setText(value);
    getTextValue(value);
  };
  return (
    <div className={`textarea-container mb-8 txt-sm ${className}`}>
      <TextField
        InputLabelProps={{
          style: { color: "#A0AFBF", fontSize: "14px", fontWeight: "bold" }
        }}
        InputProps={{ classes }}
        label={placeholder}
        type={type}
        style={{ width: "100%", height: "100%", marginTop: "5px" }}
        multiline
        rows={11}
        onChange={handleChange}
        inputProps={{ maxLength: requiredValue }}
      />
      <div className="right-icon">
        <p>
          {text.length}/{requiredValue}
        </p>
      </div>
    </div>
  );
}
