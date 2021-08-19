import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ProjectsIcon } from "assets/icons(svg)";
import { useRouteMatch } from "react-router-dom";
import history from "routes/history";

/**
 * @param {*} image
 * @param {string} title
 * @param {string} type
 * @param {string} description
 * @param {object} insight
 */

function Card01({ image, title, description, insight, type }) {
  const { t } = useTranslation();
  const { url } = useRouteMatch();
  return (
    <div onClick={() => history.push(`/dashboard/categories/cats/${type}/1`)} className="cat-card cat-card-01 flex">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="text">
        {title ? <p className="title">{title}</p> : null}
        <p className="description">{description}</p>
        <div className="insights flex items-center">
          <div className="insight">
            <p className="label">{t("categories:ALLOCATED BUDGET")}</p>
            <p className="value">{insight.budget} NGN</p>
            <p className="sub-label">{t("categories:BASED ON 2019 BUDGET")}</p>
          </div>
          <div className="insight">
            <p className="label">{t("categories:ACTIVE PROJECTS")}</p>
            <p className="value">{insight.project}</p>
            <p className="sub-label">{t("categories:ACCROSS 36 STATES & FCT")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card01.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  insight: PropTypes.object.isRequired
};

/**
 * @param {string} project_name
 * @param {string} date
 * @param {string} description
 * @param {object} insight
 */

function Card02({ project_name, date, description, insight }) {
  const { t } = useTranslation();
  return (
    <div className="cat-card cat-card-02">
      <div className="top-section flex items-center">
        <img src={ProjectsIcon} className="mr-3" alt="project" />
        <div className="text">
          <p className="title">{project_name}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href="#" className="link">
        {t("categories:View Project")}
      </a>
      <div className="insights flex items-center justify-between">
        <div className="flex items-center">
          <div className="insight">
            <p className="label">{t("categories:ALLOCATED BUDGET")}</p>
            <p className="value">{insight.budget} NGN</p>
          </div>
          <div className="insight">
            <p className="label">{t("categories:STATE")}</p>
            <p className="value">{insight.state}</p>
          </div>
          <div className="insight">
            <p className="label">{t("categories:PROJECT STATUS")}</p>
            <p className="value status">{insight.status}</p>
          </div>
        </div>
        <button>Eyemark</button>
      </div>
    </div>
  );
}

Card02.propTypes = {
  project_name: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string.isRequired,
  insight: PropTypes.object.isRequired
};

/**
 * @param {*} icon
 * @param {string} title
 * @param {string} description
 * @param {string} link
 * @param {[*]} images
 */

function Card03({ icon, title, description, images, link }) {
  const { url } = useRouteMatch();
  return (
    <div
      onClick={() => history.push(`${url}/${link}`)}
      className="cat-card cat-card-03 flex items-start justify-between"
    >
      <div className="text">
        <div className="flex items-center" style={{ marginBottom: "63px" }}>
          <img className="mr-4" src={icon} alt={title} />
          <p className="title">{title}</p>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="images">
        {images.map((im, i) => {
          return <img src={im} key={i} alt={title} />;
        })}
      </div>
    </div>
  );
}

Card03.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  images: PropTypes.any.isRequired
};

export { Card01, Card02, Card03 };
