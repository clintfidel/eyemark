import React from "react";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation();
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>{t("Loading")}...</h1>
    </div>
  );
}
