import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Comments } from "modules/components";
import "./style.scss";

export function Screen5({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Project Reviews</title>
      </Helmet>
      <div className="nav-content ph">
        <div className="ph mb-6">
          <Comments action={() => {}} image={null} />
        </div>
        <div className="ph mb-6">
          <Comments action={() => {}} image={null} />
        </div>
        <div className="ph mb-6">
          <Comments
            action={() => {}}
            image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
      </div>
    </>
  );
}

export default Screen5;
