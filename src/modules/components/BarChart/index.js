import React, { Component } from "react";
import { Chart, Series } from "devextreme-react/chart";
import { dataSource } from "./data.js";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <Chart id="chart" dataSource={dataSource}>
        <Series valueField="oranges" argumentField="day" name="Budget" type="bar" color="#ffaa66" />
      </Chart>
    );
  }
}

export default App;
