import React, { useState } from "react";
import { Eye } from "assets/icons(svg)";
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

export default function Input({ placeholder, type = "text" }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(type === "password");
  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input-container mb-8">
      <TextField
        InputLabelProps={{
          style: { color: "#A0AFBF", fontSize: "14px", fontWeight: "bold" }
        }}
        InputProps={{ classes }}
        label={placeholder}
        type={showPassword ? "password" : "text"}
        style={{ width: "100%", height: "100%", marginTop: "-5px" }}
      />
      {type === "password" ? (
        <div className="right-icon" onClick={onPasswordClick}>
          <img className="password" src={Eye} alt="eye-password" />
        </div>
      ) : null}
    </div>
  );
}
