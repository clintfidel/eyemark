import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

/**
 * @param {[string]} items - list of sort item
 */

export default function Sort({ items = [] }) {
  const { t } = useTranslation();
  return (
    <div className="sort flex items-center justify-between">
      <p className="t">{t("categories:Sort")}</p>
      <div className="flex items-center">
        {items.map((t, i) => {
          return (
            <span className="flex items-center justify-between" key={i}>
              <p>{t}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
}

Sort.propTypes = {
  items: PropTypes.array.isRequired
};
