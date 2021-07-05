import React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

export default function Button({ text, className, onClick }) {
  const { t } = useTranslation();
  return (
    <button onClick={onClick} className={`text-base default-btn text-white font-bold ${className}`}>
      {t(text)}
    </button>
  );
}
