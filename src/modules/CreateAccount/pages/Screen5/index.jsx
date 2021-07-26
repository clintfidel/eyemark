import React, { useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button, Textarea } from "components";
import { createAccountRoutes } from "routes/routes-list";
import "./style.scss";

export function Screen5({ history }) {
  const [bio, setBio] = useState("");
  return (
    <>
      <Helmet>
        <title>Eyemark - A bit more</title>
      </Helmet>
      <div
        className="onboarding-container flex items-center justify-center placeholder"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="card px-8 py-8 overflow-hidden relative">
          <div className="flex items-center justify-between mb-10">
            <img src={LogoSmall} alt="logo" />
            <div style={{ width: "139px" }}>
              {bio.length === 0 ? (
                <Button
                  text="Skip for now"
                  className="btn-outline btn-size-sm-h btn-no-bg"
                  onClick={() => history.push(`/onboarding/${createAccountRoutes.screen6}`)}
                />
              ) : null}
            </div>
          </div>
          <p className="text-base font-semibold mb-2.5">Tell us a bit about yourself</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Textarea placeholder="Your bio" getTextValue={value => setBio(value)} />
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button
              text="Back"
              className="btn-size-sm btn-no-bg"
              onClick={() => history.push(`/onboarding/${createAccountRoutes.screen4}`)}
            />
            {bio.length > 0 ? (
              <Button
                onClick={() => history.push(`/onboarding/${createAccountRoutes.screen6}`)}
                text="Next"
                className="btn-size-sm"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen5;
