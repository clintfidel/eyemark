import React from "react";
import { render } from "@testing-library/react";
import { ChangePassword } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Settings/ChangePassword", () => {
  render(<ChangePassword />);
});
