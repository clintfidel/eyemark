import React, { useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button, Tabs } from "components";
import { createAccountRoutes, loginRoutes } from "routes/routes-list";
import "./style.scss";
export function Screen7({ history }) {
  const [tabClicked, setTabClicked] = useState(false);
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
                  onClick={() => history.push(`/onboarding/${loginRoutes.screen1}`)}
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
              onClick={() => history.push(`/onboarding/${createAccountRoutes.screen6}`)}
              text={t("auth:Back")}
              className="btn-size-sm btn-no-bg"
            />
            {tabClicked ? <Button text={t("auth:Next")} className="btn-size-sm" /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen7;
