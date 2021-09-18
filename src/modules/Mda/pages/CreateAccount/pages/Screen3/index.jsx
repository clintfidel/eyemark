import React from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Input, Button } from "components";
import { createAccountRoutes } from "routes/routes-list";

export function Screen3({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Password")}</title>
      </Helmet>
      <div className="onboarding-container flex items-center justify-center">
        <div className="card px-8 py-8 overflow-hidden relative">
          <img src={LogoSmall} alt="logo" className="mb-10" />
          <p className="text-base font-semibold mb-2.5">A strong will be necessary, Create One</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Input placeholder="Password" type="password" />
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
            <Button
              text="Next"
              className="btn-size-sm"
              onClick={() => history.push(`/onboarding/${createAccountRoutes.screen4}`)}
            />
          </div>
        </div>
        <div className="flex flex-row items-center absolute bottom-7">
          <p className="mr-1 text-base font-medium" style={{ color: "#718195" }}>
            Have an account?
          </p>
          <p className="text-base font-bold cursor-pointer">Sign In</p>
        </div>
      </div>
    </>
  );
}

export default Screen3;
