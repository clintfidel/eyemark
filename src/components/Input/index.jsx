import React, { useState } from "react";
import { Eye, None, BorderRight } from "assets/icons(svg)";
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

export default function Input(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(props.type === "password");
  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`input-container mb-8 ${props.error ? "error-container" : null}`}>
      <TextField
        {...props}
        InputLabelProps={{
          style: { color: props.error ? "#f44336" : "#A0AFBF", fontSize: "14px", fontWeight: "bold" }
        }}
        InputProps={{ classes }}
        style={{ width: "100%", height: "100%", marginTop: "5px" }}
        type={showPassword ? "password" : "text"}
      />
      {props.type === "password" ? (
        <div className="right-icon" onClick={onPasswordClick}>
          <img className="password" src={Eye} alt="eye-password" />
        </div>
      ) : (
        <div className="left-icon">
          <img className="field" src={props.image ? props.image : None} alt="left-image" />
        </div>
      )}
    </div>
  );
}
