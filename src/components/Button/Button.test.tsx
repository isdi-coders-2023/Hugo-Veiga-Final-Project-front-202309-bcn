import { fireEvent, screen } from "@testing-library/react";
import Button from "./Button";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a Button component", () => {
  describe("When it is rendered with prop type `disabled`", () => {
    test("Then it should show a disabled button", () => {
      customRenderProvider(
        <Button disabled={true} type={"button"} text={""} />,
      );

      const disabledButton = screen.getByRole("button");

      expect(disabledButton).toBeDisabled();
    });
  });

  describe("When it is rendered with prop onClick", () => {
    test("Then it should call onClick when clicked", () => {
      const testAction = vi.fn();

      customRenderProvider(
        <Button
          actionOnClick={testAction}
          disabled={false}
          type={"button"}
          text={""}
        />,
      );
      fireEvent.click(screen.getByRole("button"));

      expect(testAction).toHaveBeenCalledTimes(1);
    });
  });
});
