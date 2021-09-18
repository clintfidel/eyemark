import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { BorderRight } from "assets/icons(svg)";
import Select from "@material-ui/core/Select";
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

export default function SelectField({ className, inputcode, label, labelPadding, options, name, handleChange }) {
  const classes = useStyles();
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex select-flex">
        <InputLabel style={{ color: "#000", width: "80%", paddingLeft: labelPadding ? labelPadding : "7px" }}>
          {label}
        </InputLabel>
        <Select
          InputProps={{ classes }}
          value={options || "Category"}
          name={name || "select"}
          onChange={handleChange}
          style={{ width: "50%", height: "100%", marginTop: "5px", zIndex: "100000000" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {inputcode ? (
          <div className="left-field flex">
            <p className="field-select">{inputcode}</p>
            <img className="mx-2" src={BorderRight} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
