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
  const [deactiveAccount, setDeactivateAccount] = useState(false);
  const [showDeactiveAccountModal, setShowDeactiveAccountModal] = useState(false);
  const onGetToggleValue = value => {
    console.log("toggle checked value =>", value.target.checked, deactiveAccount);
    if (!deactiveAccount) {
      setShowDeactiveAccountModal(true);
    } else {
      setDeactivateAccount(false);
    }
  };
  const onDeactivate = () => {
    setShowDeactiveAccountModal(false);
    setDeactivateAccount(true);
  };
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("settings:Account")}</title>
      </Helmet>
      <div className="account-home">
        <div className="navigation flex items-center">
          <p className="title">{t("settings:Account")}</p>
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
                  {setting.route === "kyc" ? (
                    <span className="flex items-center justify-center">{t("settings:VERIFIED")}</span>
                  ) : null}
                  {!setting.toggle ? <img src={ChevronRight} /> : null}
                  {setting.toggle ? (
                    <Toggle onChange={onGetToggleValue} checked={deactiveAccount} icons={false} />
                  ) : null}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      {showDeactiveAccountModal ? (
        <div className="settings-account-modal">
          <div className="modal-box">
            <p>{t("settings:Are you sure you want to deactivate your account")}?</p>
            <hr />
            <div className="flex items-center justify-between">
              <Button
                text={t("settings:Yes, I am")}
                className="btn-size-md btn-outline btn-no-bg"
                onClick={onDeactivate}
              />
              <Button
                text={t("settings:Cancel")}
                className="btn-size-sm"
                onClick={() => setShowDeactiveAccountModal(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AccountHome;
