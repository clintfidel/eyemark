import React from "react";
import { Helmet } from "react-helmet";
import { Background, Logo, GooglePlay, AppStore } from "assets/images(png)";
import { Input, Button } from "components";
import "./style.scss";
import { Google, Facebook, Twitter, LogoBlack } from "assets/icons(svg)";
import { createAccountRoutes } from "routes/routes-list";
import { useTranslation } from "react-i18next";

export function Screen1({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Login</title>
      </Helmet>
      <div className="login-bg relative px-56 pt-24" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex w-full">
          <div className="flex flex-col justify-between h-595">
            <div>
              <img src={Logo} alt="logo" className="logo mb-5" />
              <p className="text-base text-white w-100 pr-20">
                A web and mobile application domiciled in the FM-BNP that enables and digitizes the M&E process of the
                FGNs Capital Projects through citizens engagement.
              </p>
            </div>
            <div>
              <p className="text-base text-white mb-5">Get the app</p>
              <div className="flex flex-row items-center mb-11">
                <img src={GooglePlay} className="store mr-9" alt="google-play" />
                <img src={AppStore} className="store" alt="app-store" />
              </div>
              <div className="flex flex-row items-center">
                <p className="mr-1 text-base font-medium" style={{ color: "#ADADAD" }}>
                  Don’t have an account?
                </p>
                <p
                  className="text-white text-base font-bold cursor-pointer"
                  onClick={() => history.push(`/onboarding/${createAccountRoutes.screen1}`)}
                >
                  Create Account
                </p>
              </div>
            </div>
          </div>
          <div className="w-full login-box w-595 px-10 py-11">
            <p className="text-base font-semibold mb-2.5">{t("Login to Eyemark")}</p>
            <p className="text-sm font-medium pr-2 mb-10" style={{ color: "#4B5667" }}>
              Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
            </p>
            <Input placeholder="Phone, email, username" />
            <Input placeholder="Password" type="password" />
            <Button text="Login" />
            <div className="mb-10" />
            <p className="text-sm text-center" style={{ color: "#718195" }}>
              or
            </p>
            <div className="mb-7" />
            <div className="w-full flex items-center justify-center mb-9">
              <img src={Facebook} className="mr-5 cursor-pointer" alt="facebook" />
              <img src={Google} className="mr-5 cursor-pointer" alt="google" />
              <img src={Twitter} className="cursor-pointer" alt="twitter" />
            </div>
            <p className="text-sm text-center cursor-pointer">Forgot Password</p>
          </div>
        </div>
        <div className="flex w-full footer items-center justify-between mt-12">
          <p className="text-white">Eyemark © 2021. All rights reserved.</p>
          <div className="flex items-center justify-between">
            <p className="text-white font-bold mr-5">English</p>
            <p className="opacity-50 text-white mr-5">Igbo</p>
            <p className="opacity-50 text-white mr-5">Yoruba</p>
            <p className="opacity-50 text-white">Hausa</p>
          </div>
        </div>
      </div>
      <div className="mobile-login">
        <img src={LogoBlack} alt="logo" className="logo" />
        <p className="text-base font-semibold mb-2.5">{t("Login to Eyemark")}</p>
        <p className="text-sm font-medium pr-2 mb-10" style={{ color: "#4B5667" }}>
          Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
        </p>
        <div className="flex flex-row items-center mb-10">
          <p className="mr-1 text-base font-medium" style={{ color: "#4B5667" }}>
            Don’t have an account?
          </p>
          <p
            className="text-base font-bold cursor-pointer"
            onClick={() => history.push(`/onboarding/${createAccountRoutes.screen1}`)}
          >
            Create Account
          </p>
        </div>
        <Input placeholder="Phone, email, username" />
        <Input placeholder="Password" type="password" />
        <Button text="Login" />
        <div className="mb-10" />
        <div className="w-full flex items-center justify-center mb-9">
          <img src={Facebook} className="mr-5 cursor-pointer" alt="facebook" />
          <img src={Google} className="mr-5 cursor-pointer" alt="google" />
          <img src={Twitter} className="cursor-pointer" alt="twitter" />
        </div>
        <p className="text-sm text-center cursor-pointer">Forgot Password</p>
      </div>
    </>
  );
}

export default Screen1;
