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

export default function Textarea({ placeholder, type = "text", getTextValue }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleChange = event => {
    const value = event.target.value;
    setText(value);
    getTextValue(value);
  };
  return (
    <div className="textarea-container mb-8">
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
        inputProps={{ maxLength: 100 }}
      />
      <div className="right-icon">
        <p>{text.length}/100</p>
      </div>
    </div>
  );
}
