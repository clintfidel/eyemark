import React, { useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Tooltip, Location, Ministry, SDG } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button, Tags } from "components";
import { states, ministry, sdg } from "utils";
import { createAccountRoutes } from "routes/routes-list";
import "./style.scss";

export function Screen6({ history }) {
  const [tagClicked, setTagClicked] = useState(false);
  return (
    <>
      <Helmet>
        <title>Eyemark - Interests</title>
      </Helmet>
      <div
        className="onboarding-container flex items-center justify-center placeholder"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="card px-8 py-8 overflow-hidden relative">
          <div className="top-header mb-5">
            <img src={LogoSmall} alt="logo" className="mb-10" />
            <div style={{ width: "139px" }}>
              {!tagClicked ? (
                <Button
                  text="Skip for now"
                  className="btn-outline btn-size-sm-h btn-no-bg"
                  onClick={() => history.push(`/onboarding/${createAccountRoutes.screen7}`)}
                />
              ) : null}
            </div>
          </div>
          <p className="text-base font-semibold mb-2.5">Let’s customise your feed. What are you interested in?</p>
          <p className="text-sm font-medium mb-10 w-96" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <div className="h-80 w-full tags-container">
            <Tags
              spacing="mb-12"
              img1={Location}
              data={states}
              img2={Tooltip}
              title="Location"
              className="parent-tags"
              isTouched={value => setTagClicked(value)}
            />
            <Tags
              spacing="mb-12"
              img1={Ministry}
              data={ministry}
              img2={Tooltip}
              title="Ministry"
              className="parent-tags"
              isTouched={value => setTagClicked(value)}
            />
            <Tags
              spacing="mb-12"
              img1={SDG}
              data={sdg}
              img2={Tooltip}
              title="SDG"
              className="parent-tags"
              isTouched={value => setTagClicked(value)}
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button
              onClick={() => history.push(`/onboarding/${createAccountRoutes.screen5}`)}
              text="Back"
              className="btn-size-sm btn-no-bg"
            />
            {tagClicked ? (
              <Button
                onClick={() => history.push(`/onboarding/${createAccountRoutes.screen7}`)}
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

export default Screen6;
