import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { Card03 } from "../../components";
import MockCategories from "../../__mock__/category";

export function Screen1() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("categories:Categories")}</title>
      </Helmet>
      <div className="navigation flex items-center">
        <p>{t("categories:Categories")}</p>
      </div>
      <div className="screen1-categories">
        {MockCategories.map((s, i) => {
          return (
            <Card03 link={s.link} key={i} images={s.images} title={s.title} description={s.description} icon={s.icon} />
          );
        })}
      </div>
    </>
  );
}

export default Screen1;
