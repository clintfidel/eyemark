import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchIcon, Filter } from "assets/icons(svg)";
import MockFilter from "../__mock__/filter.json";

export default function Search() {
  const [showFilter, setShowFilter] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="search flex items-center">
      <img src={SearchIcon} alt="search" />
      <input className="search-input" placeholder={t("categories:Search...")} />
      <div className="filters flex items-center justify-between" onClick={() => setShowFilter(!showFilter)}>
        <img src={Filter} alt="filter" />
        <p>{t("categories:Filter")}</p>
      </div>
      {showFilter ? (
        <div className="filter-box">
          {MockFilter.map((f, i) => {
            return (
              <div key={i} className="flex items-center filter">
                <input type="checkbox" className="mr-2" />
                <p>{f}</p>
              </div>
            );
          })}
          <div className="budget">
            <p>Budget - NGN</p>
            <input type="range" className="range" />
            <div className="inputs flex items-center justify-between">
              <input placeholder="500,000" />
              -
              <input placeholder="500,000,000" />
            </div>
          </div>
          <div className="buttons flex items-center justify-between">
            <button className="clear">Clear all</button>
            <button className="apply">Apply</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
