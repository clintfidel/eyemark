import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { ArrowBack } from "assets/icons(svg)";
import { IconButton } from "components";
import { Input, Button } from "components";
import "./style.scss";

export function ChangePassword({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("settings:Change Password")}</title>
      </Helmet>
      <div className="account-change-password">
        <div className="navigation flex items-center">
          <IconButton icon={ArrowBack} onClick={() => history.goBack()} />
          <p className="title ml-5">{t("settings:Change Password")}</p>
        </div>
        <div className="content">
          <Input placeholder={t("settings:Current Password")} type="password" />
          <Input placeholder={t("settings:New Password")} type="password" />
          <Input placeholder={t("settings:Confirm New Password")} type="password" />
          <div className="flex items-center justify-end">
            <Button text={t("settings:Save")} className="btn-size-sm" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
