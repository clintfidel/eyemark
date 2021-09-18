import { render } from "@testing-library/react";
import { Screen1 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Profile/Screen1", () => {
  render(<Screen1 />);
});
