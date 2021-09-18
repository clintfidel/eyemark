import { render } from "@testing-library/react";
import { Screen6 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders CreateAccount/Screen6", () => {
  render(<Screen6 />);
});
