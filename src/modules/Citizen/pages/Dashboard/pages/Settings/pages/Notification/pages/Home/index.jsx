import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useRouteMatch, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "assets/icons(svg)";
import SETTINGSMOCK from "../../../../__mock__/settings";
import Toggle from "react-toggle";
import { Button } from "components";
import "./style.scss";

export function AccountHome({ routeIndex }) {
  const { t } = useTranslation();
  let { path, url } = useRouteMatch();
  const [enable, setEnable] = useState(false);
  const onGetToggleValue = value => {
    console.log("toggle checked value =>", value.target.checked, enable);
    if (enable) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("settings:Notification")}</title>
      </Helmet>
      <div className="notification-home">
        <div className="navigation flex items-center">
          <p className="title">{t("settings:Notification")}</p>
        </div>
        <div className="content">
          {SETTINGSMOCK[routeIndex]?.sub_settings.map((setting, i) => {
            return (
              <NavLink
                onClick={setting.toggle ? e => e.preventDefault() : null}
                key={i}
                to={`${url}/${setting.route}`}
                className="list flex items-center justify-between"
              >
                <div className="left flex items-center">
                  <img src={setting.icon} />
                  <div className="text">
                    <p className="name">{setting.name}</p>
                    <p className="description">{setting.description}</p>
                  </div>
                </div>
                <div className="right flex items-center">
                  {!setting.toggle ? <img src={ChevronRight} /> : null}
                  {setting.toggle ? <Toggle onChange={onGetToggleValue} checked={enable} icons={false} /> : null}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AccountHome;
