import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ScreenLast } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Categories/ScreenLast", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ScreenLast />
    </Router>
  );
});
