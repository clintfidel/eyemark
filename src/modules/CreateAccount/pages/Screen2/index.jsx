import React from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Helmet } from "react-helmet";
import { Input, Button } from "components";
import { createAccountRoutes } from "routes/routes-list";

export function Screen2({ history }) {
  return (
    <>
      <Helmet>
        <title>Eyemark - Verify Code</title>
      </Helmet>
      <div className="onboarding-container flex items-center justify-center">
        <div className="card px-8 py-8 overflow-hidden relative">
          <img src={LogoSmall} alt="logo" className="mb-10" />
          <p className="text-base font-semibold mb-2.5">Verify code we just sent to you</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Input placeholder="Verification code" />
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button text="Back" className="btn-size-sm btn-no-bg" onClick={() => history.goBack()} />
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

export default Screen2;
