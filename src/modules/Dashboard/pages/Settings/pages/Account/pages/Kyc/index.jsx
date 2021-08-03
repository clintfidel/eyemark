import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { ArrowBack, Upload, SuccessCup } from "assets/icons(svg)";
import { IconButton } from "components";
import { Input, Button } from "components";
import "./style.scss";

export function Kyc({ history }) {
  const { t } = useTranslation();
  const [kycDone, setKycDone] = useState(false);
  const [loading, setloading] = useState(false);
  const onVerify = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setKycDone(true);
    }, 2000);
  };
  return (
    <>
      <Helmet>
        <title>Eyemark - KYC - NIN Verification</title>
      </Helmet>
      <div className="account-change-password">
        <div className="navigation flex items-center">
          <IconButton icon={ArrowBack} onClick={() => history.goBack()} />
          <p className="title ml-5">KYC (NIN Verification)</p>
        </div>
        <div className="content">
          {!kycDone && !loading ? (
            <div className="kyc-card">
              <p className="title">{t("settings:Lets get you verified")}</p>
              <p className="subtitle">{t("settings:Please fill in your correct NIN dedicated number")}</p>
              <div className="flex items-center justify-between">
                <div style={{ width: "45%" }}>
                  <Input placeholder={t("settings:First Name")} />
                </div>
                <div style={{ width: "45%" }}>
                  <Input placeholder={t("settings:Last Name")} />
                </div>
              </div>
              <Input placeholder="Enter your NIN number" />
              <div className="upload flex items-center justify-between">
                <img src={Upload} />
                <p>{t("settings:Take Photo")}</p>
              </div>
              <Button text={t("settings:Verify")} className="btn-size-sm" onClick={onVerify} />
            </div>
          ) : null}
          {kycDone && !loading ? (
            <div className="kyc-card flex items-center justify-center flex-col success">
              <img src={SuccessCup} className="success-image" alt="success-cup" />
              <p className="success-text">{t("settings:Congratulations your identity has been verified")}</p>
              <Button text={t("settings:Done")} className="btn-size-sm" onClick={() => setKycDone(false)} />
            </div>
          ) : null}
          {loading ? (
            <div className="kyc-card flex items-center justify-center flex-col success">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p className="loading-text">{t("settings:Pending")}...</p>
              <p className="loading-subtext">
                {t("settings:Your NIN number is currently being verififed by our team, please wait")}.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Kyc;
