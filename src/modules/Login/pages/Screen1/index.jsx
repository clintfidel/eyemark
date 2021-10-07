import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Background, Logo, GooglePlay, AppStore } from "assets/images(png)";
import { Input, Button } from "components";
import "./style.scss";
import { Google, Facebook, Twitter, LogoBlack } from "assets/icons(svg)";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import * as yup from "yup";
import { login } from "store/auth/actions";
import history from "routes/history";
import { AuthContext } from "context/AuthContext";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required")
});
export function Screen1({ history }) {
  const {
    state: { loading, error, is_authenticated },
    login
  } = useContext(AuthContext);

  useEffect(() => {
    try {
      if (error) {
        const temp = error.data ? error.data : error;
        delete temp["status_code"];
        const message = Object.keys(temp).map(key => temp[key][0]);

        console.log(error);
        alert(message.join(" "));
      }
    } catch (err) {}
  }, [error]);

  // useEffect(() => {
  //   if (is_authenticated) setTimeout(() => history.push("/citizen/dashboard"), 3000);
  // }, [is_authenticated]);

  const { t } = useTranslation();
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(null);
  const onGetInputValue = event => {
    const value = event.target.value;
    const name = event.target.name;
    setPayload({ ...payload, [name]: value });
  };

  const onLogin = () => {
    setErrors(null);
    schema
      .validate(payload, { abortEarly: false })
      .then(() => {
        login(payload);
      })
      .catch(err => {
        let error = {};
        err.inner.forEach(e => {
          error = { ...error, [e.path]: true };
        });
        setErrors(error);
      });
  };

  useEffect(() => {
    gapi.signin2.render("g-signin2", {
      scope: "profile email",
      width: 300,
      height: 50,
      longTitle: true,
      theme: "dark",
      onsuccess: () => {},
      onfailure: () => {}
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Login")}</title>
      </Helmet>
      <div className="login-bg relative px-56 pt-24" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex w-full">
          <div className="flex flex-col justify-between h-595">
            <div>
              <img src={Logo} alt="logo" className="logo mb-5" />
              <p className="text-base text-white w-100 pr-20">
                {t(
                  "auth:A web and mobile application domiciled in the FM-BNP that enables and digitizes the M&E process of the FGNs Capital Projects through citizens engagement"
                )}
                .
              </p>
            </div>
            <div>
              <p className="text-base text-white mb-5">{t("auth:Get the app")}</p>
              <div className="flex flex-row items-center mb-11">
                <img src={GooglePlay} className="store mr-9" alt="google-play" />
                <img src={AppStore} className="store" alt="app-store" />
              </div>
              <div className="flex flex-row items-center">
                <p className="mr-1 text-base font-medium" style={{ color: "#ADADAD" }}>
                  {t("auth:Dont have an account")}?
                </p>
                <p className="text-white text-base font-bold cursor-pointer" onClick={() => history.push("/citizen")}>
                  {t("auth:Create Account")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full login-box w-595 px-10 py-11 my-8">
            <p className="text-base font-semibold mb-2.5">{t("auth:Login to Eyemark")}</p>
            <p className="text-sm font-medium pr-2 mb-10" style={{ color: "#4B5667" }}>
              Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
            </p>
            <Input
              name="email"
              type="email"
              label={t("auth:Email")}
              placeholder="Phone, email, username"
              onChange={onGetInputValue}
              error={errors && errors.email}
              helperText={errors && errors.email ? "Email is required" : null}
            />
            <Input
              placeholder={t("auth:Password")}
              name="password"
              type="password"
              onChange={onGetInputValue}
              error={errors && errors.password}
              helperText={errors && errors.password ? "Password is required" : null}
            />
            <Button onClick={onLogin} loading={loading} text={t("auth:Login")} />
            <div className="mb-10" />
            <p className="text-sm text-center" style={{ color: "#718195" }}>
              {t("or")}
            </p>
            <div className="mb-7" />
            {/* <div className="w-full flex items-center justify-center mb-9">
              <img src={Facebook} className="mr-5 cursor-pointer" alt="facebook" />
              <img src={Google} className="mr-5 cursor-pointer" alt="google" />
              <img src={Twitter} className="cursor-pointer" alt="twitter" />
            </div> */}

            <div id="g-signin2" className="mb-7 mx-auto" />

            <p className="text-sm text-center cursor-pointer">{t("auth:Forgot Password")}?</p>
          </div>
        </div>
        <div className="flex w-full footer items-center justify-between mt-12">
          <p className="txt-white">Eyemark © 2021.{t("auth:All rights reserved")}.</p>
          <div className="flex items-center justify-between">
            <p className="txt-white font-bold mr-5">English</p>
            <p className="opacity-50 txt-white mr-5">Igbo</p>
            <p className="opacity-50 txt-white mr-5">Yoruba</p>
            <p className="opacity-50 txt-white">Hausa</p>
          </div>
        </div>
      </div>
      <div className="mobile-login">
        <img src={LogoBlack} alt="logo" className="logo" />
        <p className="text-base font-semibold mb-2.5">{t("auth:Login to Eyemark")}</p>
        <p className="text-sm font-medium pr-2 mb-10" style={{ color: "#4B5667" }}>
          Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
        </p>
        <div className="flex flex-row items-center mb-10">
          <p className="mr-1 text-base font-medium" style={{ color: "#4B5667" }}>
            {t("auth:Dont have an account")}?
          </p>
          <p className="text-base font-bold cursor-pointer" onClick={() => history.push("/citizen")}>
            {t("auth:Create Account")}
          </p>
        </div>
        <Input placeholder="Phone, email, username" />
        <Input placeholder={t("auth:Password")} type="password" />
        <Button text={t("auth:Login")} />
        <div className="mb-10" />
        <div className="w-full flex items-center justify-center mb-9">
          <img src={Facebook} className="mr-5 cursor-pointer" alt="facebook" />
          <img src={Google} className="mr-5 cursor-pointer" alt="google" />
          <img src={Twitter} className="cursor-pointer" alt="twitter" />
        </div>
        <p className="text-sm text-center cursor-pointer">{t("auth:Forgot Password")}?</p>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loading
  };
}

export default connect(mapStateToProps, { login })(Screen1);
