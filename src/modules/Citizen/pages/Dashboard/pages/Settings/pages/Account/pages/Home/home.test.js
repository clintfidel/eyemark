import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { AccountHome } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Settings/AccountHome", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <AccountHome />
    </Router>
  );
});
