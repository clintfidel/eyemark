import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { useParams } from "react-router-dom";
import { Search, Sort, Card02 } from "../../components";
import { ArrowBack } from "assets/icons(svg)";
import { IconButton } from "components";
import MockSubCategory from "../../__mock__/subcategory.json";

export function ScreenLast({ history }) {
  const { t } = useTranslation();
  const { cat, id } = useParams();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("categories:Categories")}</title>
      </Helmet>
      <div className="navigation-b flex items-center">
        <IconButton icon={ArrowBack} onClick={() => history.goBack()} />
        <p className="ml-5">{cat}</p>
      </div>
      <div className="screen3-categories">
        <Search />
        <Sort items={["Name", "Budget", "GDP Share", "Active Projects", "Progress", "Reviews"]} />
        <div className="content">
          {MockSubCategory.map((s, i) => {
            return (
              <Card02
                key={i}
                project_name={s.project_name}
                date={s.date}
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

export default ScreenLast;
