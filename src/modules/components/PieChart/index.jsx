import React, { Component } from "react";
import { dataSource } from "./data.js";
import "./style.scss";

import PieChart, { Legend, Export, Series, Label, Font, Connector } from "devextreme-react/pie-chart";

class App extends Component {
  render() {
    return (
      <PieChart className="mt-10" id="pie" palette="Bright" dataSource={dataSource}>
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4}
        />
        <Series argumentField="country" valueField="medals">
          <Label visible={true} position="columns" customizeText={customizeText}>
            <Font size={14} />
            <Connector visible={true} width={0.3} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default App;
