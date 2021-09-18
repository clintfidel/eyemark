import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Screen1 } from ".";

test("renders Home/Screen1", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Screen1 />
    </Router>
  );
});
