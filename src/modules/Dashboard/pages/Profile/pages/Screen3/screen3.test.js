import { render } from "@testing-library/react";
import { Screen3 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Profile/Screen3", () => {
  render(<Screen3 />);
});
