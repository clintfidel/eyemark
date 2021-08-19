import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./style.scss";

export default function Tags({ title, spacing, img1, data = [], img2, className, isTouched }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const onCheckItems = id => {
    setCheckedItems([...checkedItems, id]);
  };

  const removeCheckedItems = id => {
    const indexId = checkedItems.indexOf(id);
    if (indexId > -1) {
      checkedItems.splice(indexId, 1);
      setCheckedItems([...checkedItems]);
    }
    if (checkedItems.length === 0) {
      isTouched(false);
    }
  };

  const toggleChecked = id => {
    isTouched(true);
    if (checkedItems.includes(id)) {
      removeCheckedItems(id);
    } else {
      onCheckItems(id);
    }
  };
  return (
    <div className={spacing}>
      <div className="flex">
        <img src={img1} alt="logo" className="mr-4" />
        <div className={"text-normal font-semibold text-black my-3 font-medium"}>{title}</div>
        <img data-tip data-for="eyemark" src={img2} alt="logo" className="ml-3" />
      </div>
      <ReactTooltip
        id="eyemark"
        aria-haspopup="true"
        className="tooltip-cont"
        type="light"
        place="right"
        effect="solid"
      >
        <p className="tooltip">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
        </p>
      </ReactTooltip>
      <div className={className}>
        {data.map((name, index) => (
          <button
            key={index}
            onClick={() => toggleChecked(name)}
            className={`text-base tags text-center text-white font-medium 
            ${checkedItems.includes(name) ? "clicked" : "tags"}`}
          >
            {name.name}
          </button>
        ))}
      </div>
    </div>
  );
}
