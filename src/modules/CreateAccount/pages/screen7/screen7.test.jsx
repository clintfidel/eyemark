import { render } from "@testing-library/react";
import { Screen7 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders CreateAccount/Screen7", () => {
  render(<Screen7 />);
});
