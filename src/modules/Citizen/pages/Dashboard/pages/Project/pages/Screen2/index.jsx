import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Accordion = ({ title, subtitle }) => {
  return (
    <div className="accordion mb-10">
      <div className="accordion-header">
        <p className="mb-2 header-title">{title}</p>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <div className="accordion-content">
        <ul className="list-inside list-disc">
          <li className="active">Improve productivity and incomes for smallholder farmers and informal vendors</li>
          <li>Improve nutrition for the urban communities</li>
          <li>Improved food security</li>
          <li>Mitigating climate risk with improved production and reduced waste</li>
          <li>Improved food security</li>
        </ul>
      </div>
    </div>
  );
};

export function Screen2({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Project Plan</title>
      </Helmet>
      <div className="nav-content ph">
        <p className="content-title mb-5">What is the problem that we are trying to solve?</p>
        <p className="content-text mb-12">
          Suspendisse molestie volutpat non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in
          mi magnis nascetur commodo sagittis. Diam adipiscing commodo malesuada euismod. Suspendisse molestie volutpat
          non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in mi magnis nascetur commodo
          sagittis. Diam adipiscing commodo malesuada euismod.
        </p>
        <Accordion title="Impact" subtitle="What will change in the long term?" />
        <Accordion title="Outcomes" subtitle="What will change in the medium term?" />
        <Accordion title="Outputs" subtitle="What will change in the short term?" />
        <Accordion title="Activities" subtitle="What are we doing to bring about change?" />
        <Accordion title="Inputs" subtitle="What do we invest Into the Project?" />
      </div>
    </>
  );
}

export default Screen2;
