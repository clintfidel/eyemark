import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Screen3 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Categories/Screen3(SDGs)", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Screen3 />
    </Router>
  );
});
