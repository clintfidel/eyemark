import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { useRouteMatch } from "react-router-dom";
import { Search, Sort, Card01 } from "../../components";
import { ArrowBack } from "assets/icons(svg)";
import { IconButton } from "components";
import MockSDGS from "../../__mock__/sdgs";

export function Screen3({ history }) {
  const { t } = useTranslation();
  const { url } = useRouteMatch();
  return (
    <>
      <Helmet>
        <title>
          Eyemark - {t("categories:Categories")} ({t("categories:SDGs")})
        </title>
      </Helmet>
      <div className="navigation flex items-center">
        <IconButton icon={ArrowBack} onClick={() => history.goBack()} />
        <p className="ml-5">{t("categories:SDGs")}</p>
      </div>
      <div className="screen3-categories">
        <Search />
        <Sort items={["Name", "Budget", "GDP Share", "Active Projects", "Progress", "Reviews"]} />
        <div className="content">
          {MockSDGS.map((s, i) => {
            return (
              <Card01
                type="SDGS"
                key={i}
                image={s.image}
                title={s.title}
                description={s.description}
                insight={s.insight}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Screen3;
