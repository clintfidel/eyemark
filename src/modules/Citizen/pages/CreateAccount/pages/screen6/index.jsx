import React, { useEffect, useState } from "react";
import { LogoSmall } from "assets/icons(svg)";
import { Tooltip, Location, Ministry, SDG } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button, Tags } from "components";
import { states, ministry, sdg } from "utils";
import { useTranslation } from "react-i18next";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";
import "./style.scss";
import { getInterests, updateInterests } from "network/api";

export function Screen6({ history }) {
  const { t } = useTranslation();
  const [tagClicked, setTagClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [locationItems, setLocationItems] = useState([]);
  const [ministryItems, setMinistryItems] = useState([]);
  const [SDGItems, setSDGItems] = useState([]);
  const [sectorItems, setSectorItems] = useState([]);

  const [locationData, setLocationData] = useState([]);
  const [ministryData, setMinistryData] = useState([]);
  const [SDGData, setSDGData] = useState([]);
  const [sectorData, setSectorData] = useState([]);

  const handleInterests = async () => {
    setLoading(true);
    try {
      let response = await updateInterests({
        locations: locationItems,
        ministries: ministryItems,
        sdgs: SDGItems,
        sectors: sectorItems
      });
      if (response.data) history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen7}`);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const updateData = async () => {
    try {
      const response = await getInterests();
      let res = response.data;

      setLocationData(res.locations.map(item => ({ name: item })));
      setMinistryData(res.ministries.map(item => ({ name: item })));
      setSDGData(res.sdgs.map(item => ({ name: item })));
      setSectorData(res.sectors.map(item => ({ name: item })));
    } catch (error) {}
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Interests")}</title>
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
                  text={t("auth:Skip for now")}
                  className="btn-outline btn-size-sm-h btn-no-bg"
                  onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen7}`)}
                />
              ) : null}
            </div>
          </div>
          <p className="text-base font-semibold mb-2.5">Let’s customise your feed. What are you interested in?</p>
          <p className="text-sm font-medium mb-10 w-96 subtitle" style={{ color: "#4B5667" }}>
            Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <div className="h-80 w-full tags-container">
            {locationData.length === 0 ? (
              <div>
                <p> Loading, please wait...</p>
              </div>
            ) : (
              <>
                <Tags
                  spacing="mb-2"
                  img1={Location}
                  data={locationData}
                  img2={Tooltip}
                  title="Location"
                  className="parent-tags"
                  isTouched={value => setTagClicked(value)}
                  setSelectedItems={setLocationItems}
                />

                <Tags
                  spacing="mb-2"
                  img1={Ministry}
                  data={ministryData}
                  img2={Tooltip}
                  title="Ministry"
                  className="parent-tags"
                  isTouched={value => setTagClicked(value)}
                  setSelectedItems={setMinistryItems}
                />
                <Tags
                  spacing="mb-2"
                  img1={SDG}
                  data={SDGData}
                  img2={Tooltip}
                  title="SDG"
                  className="parent-tags"
                  isTouched={value => setTagClicked(value)}
                  setSelectedItems={setSDGItems}
                />
                <Tags
                  spacing="mb-2"
                  img1={SDG}
                  data={sectorData}
                  img2={Tooltip}
                  title="Sector"
                  className="parent-tags"
                  isTouched={value => setTagClicked(value)}
                  setSelectedItems={setSectorItems}
                />
              </>
            )}
          </div>
          <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-between">
            <Button
              onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen5}`)}
              text={t("auth:Back")}
              className="btn-size-sm btn-no-bg"
            />
            {tagClicked ? (
              <Button loading={loading} onClick={handleInterests} text={t("auth:Next")} className="btn-size-sm" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen6;
