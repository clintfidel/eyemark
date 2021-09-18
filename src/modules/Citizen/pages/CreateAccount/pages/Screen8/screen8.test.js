import { render } from "@testing-library/react";
import { Screen8 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders CreateAccount/Screen8", () => {
  render(<Screen8 />);
});
