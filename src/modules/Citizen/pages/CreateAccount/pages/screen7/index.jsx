import React, { useEffect, useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button, Tabs } from "components";
import { useTranslation } from "react-i18next";
import { createAccountRoutes, loginRoutes, modulesRoutes } from "routes/routes-list";
import "./style.scss";
import { getFollowSuggestions } from "network/api";

export function Screen7({ history }) {
  const { t } = useTranslation();
  const [tabClicked, setTabClicked] = useState(false);
  const [followSuggestions, setFollowSuggestions] = useState(null);
  const [projectSuggestions, setProjectSuggestions] = useState(null);

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Follow")}</title>
      </Helmet>
      <div
        className="onboarding-container flex items-center justify-center placeholder"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="card px-8 py-8 overflow-hidden relative">
          <div className="top-header flex justify-between mb-5">
            <img src={LogoSmall} alt="logo" className="mb-10" />
            <div style={{ width: "139px" }}>
              {!tabClicked ? (
                <Button
                  text={t("auth:Skip for now")}
                  className="btn-outline btn-size-sm-h btn-no-bg"
                  onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen8}`)}
                />
              ) : null}
            </div>
          </div>
          <p className="text-base font-semibold mb-2.5">{t("auth:Follow suggestions")}</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Tabs isTouched={value => setTabClicked(value)} />
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button
              onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen6}`)}
              text={t("auth:Back")}
              className="btn-size-sm btn-no-bg"
            />
            {tabClicked ? (
              <Button
                onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen8}`)}
                text={t("auth:Next")}
                className="btn-size-sm"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen7;
