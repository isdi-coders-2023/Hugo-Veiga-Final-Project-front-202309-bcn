import { renderHook } from "@testing-library/react";
import tattoosMock from "../../mocks/tattoosMock";
import useTattoosApi from "../useTattoosApi";
import { customProvider } from "../../testUtils/customProvider";
import tattooMockWithoutId from "../../mocks/tattooMockWithoutId";

describe("Given a useTattoosApi custom hook", () => {
  describe("When it calls its method addTattoo with `MissSita's` tattoo data", () => {
    test("Then it should return `MissSita's` tattoo data", async () => {
      const expectedNewTattoo = tattooMockWithoutId[0];
      const expectedTattoo = tattoosMock[0];

      const {
        result: {
          current: { addTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const newTattoo = await addTattoo(expectedNewTattoo);

      expect(newTattoo).toStrictEqual(expectedTattoo);
    });
  });
});
