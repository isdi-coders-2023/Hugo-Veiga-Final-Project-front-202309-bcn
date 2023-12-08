import { renderHook } from "@testing-library/react";
import useTattoosApi from "../useTattoosApi";
import tattoosMock from "../../mocks/tattoosMock";
import { customProvider } from "../../testUtils/customProvider";

describe("Given a useTattoosApi custom hook", () => {
  describe("When it calls its method getTattoos", () => {
    test("Then it should return MissSitas's and Nissaco's tattoos", async () => {
      const expectedTattoos = tattoosMock;

      const {
        result: {
          current: { getTattoos },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const actualTattoos = await getTattoos();

      expect(actualTattoos).toStrictEqual(expectedTattoos);
    });
  });
});
