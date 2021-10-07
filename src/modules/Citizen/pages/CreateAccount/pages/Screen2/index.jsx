import React, { useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Input, Button } from "components";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";
import { generateToken, verifyToken } from "network/api";

export function Screen2({ history }) {
  const { t } = useTranslation();

  const [otp, setOTP] = useState("");
  const [resent, setResent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToken = async () => {
    setLoading(true);
    history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen4}`);
    try {
      if (!!!otp) throw Error("Please enter the OTP sent to you.");
      const response = await verifyToken(otp);
      history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen4}`);
    } catch (error) {
      console.log(error);
      alert("Please check your token");
    }
    setLoading(false);
  };

  const resendToken = async params => {
    setLoading(true);
    try {
      const response = await generateToken();
      setResent(true);
    } catch (error) {
      console.log(error);
      alert("Network Error");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Verify Code")}</title>
      </Helmet>
      <div className="onboarding-container flex items-center justify-center">
        <div className="card px-8 py-8 overflow-hidden relative">
          <img src={LogoSmall} alt="logo" className="mb-10" />
          <p className="text-base font-semibold mb-2.5">{t("auth:Verify code we just sent to you")}</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Input placeholder="Verification code" value={otp} onChange={e => setOTP(e.target.value)} />
          {!resent && (
            <div onClick={resendToken} className="text-sm mx-auto cursor-pointer text-red-400">
              <p>Didn&apos;t receive a token? resend now.</p>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button text="Back" className="btn-size-sm btn-no-bg" onClick={() => history.goBack()} />
            <Button text={t("auth:Next")} className="btn-size-sm" onClick={handleToken} loading={loading} />
          </div>
        </div>
        <div className="flex flex-row items-center absolute bottom-7">
          <p className="mr-1 text-base font-medium" style={{ color: "#718195" }}>
            {t("auth:Have an account")}?
          </p>
          <p className="text-base font-bold cursor-pointer">{t("auth:Sign In")}</p>
        </div>
      </div>
    </>
  );
}

export default Screen2;
