import React from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Background2, Bell } from "assets/images(png)";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Button } from "components";
import "./style.scss";

export function Screen8({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Onboarding done")}</title>
      </Helmet>
      <div
        className="onboarding-container flex items-center justify-center placeholder"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="card px-8 py-8 overflow-hidden relative">
          <img src={LogoSmall} alt="logo" className="mb-10" />
          <div className="flex items-center justify-center flex-col">
            <p className="text-base text-center font-semibold mb-2.5">One last thing. Turn on Notifications</p>
            <p className="text-sm font-medium mb-14 w-96 subtitle text-center" style={{ color: "#4B5667" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
            </p>
            <img className="bell mb-10" src={Bell} alt="bell" />
            <div className="flex items-center justify-center flex-col" style={{ width: "349px", maxWidth: "100%" }}>
              <Button
                text={t("auth:Allow Notifications")}
                className="mb-5"
                onClick={() => history.push(`/dashboard`)}
              />
              <Button
                text={t("auth:Skip for now")}
                className="btn-outline btn-no-bg"
                onClick={() => history.push(`/dashboard`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen8;
