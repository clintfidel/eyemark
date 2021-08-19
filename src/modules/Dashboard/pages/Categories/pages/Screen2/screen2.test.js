import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Screen2 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Categories/Screen2(Sectors)", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Screen2 />
    </Router>
  );
});
