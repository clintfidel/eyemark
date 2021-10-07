import React, { useContext, useEffect, useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Input, Button } from "components";
import { connect } from "react-redux";
import { register } from "store/auth/actions";
import * as yup from "yup";
import { AuthContext } from "context/AuthContext";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";

let schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required")
});

export function Screen1({ history }) {
  const {
    state: { loading, error, is_authenticated },
    register
  } = useContext(AuthContext);

  const { t } = useTranslation();
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(null);
  const onGetInputValue = event => {
    const value = event.target.value;
    const name = event.target.name;
    setPayload({ ...payload, [name]: value });
  };

  const onRegisterUser = () => {
    setErrors(null);
    schema
      .validate(payload, { abortEarly: false })
      .then(() => {
        register(payload);
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
    try {
      if (error) {
        const temp = error.data ? error.data : error;
        delete temp["status_code"];
        const message = Object.keys(temp).map(key => temp[key][0]);

        alert(message.join(" "));
      }
    } catch (err) {}
  }, [error]);

  useEffect(() => {
    if (is_authenticated) history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen2}`);
  }, []);

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Create Account")}</title>
      </Helmet>
      <div className="onboarding-container flex items-center justify-center">
        <div className="card px-8 py-8 overflow-hidden relative">
          <img src={LogoSmall} alt="logo" className="mb-10" />
          <p className="text-base font-semibold mb-2.5">{t("auth:Create Account")}</p>
          <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <Input
            label={t("auth:Email")}
            name="email"
            onChange={onGetInputValue}
            error={errors && errors.email}
            helperText={errors && errors.email ? "Email is required" : null}
          />
          <Input
            label={t("auth:Password")}
            type="password"
            name="password"
            onChange={onGetInputValue}
            error={errors && errors.password}
            helperText={errors && errors.password ? "Password is required" : null}
          />
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
            <Button loading={loading} text={t("auth:Next")} className="btn-size-sm" onClick={onRegisterUser} />
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

function mapStateToProps(state) {
  return {
    loading: state.auth.loading
  };
}

export default connect(mapStateToProps, { register })(Screen1);
