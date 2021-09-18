import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";

export function Screen3({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Project Activity</title>
      </Helmet>
      <div className="nav-content ph"></div>
    </>
  );
}

export default Screen3;
