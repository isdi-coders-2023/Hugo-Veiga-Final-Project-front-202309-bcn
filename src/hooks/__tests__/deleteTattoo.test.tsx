import { renderHook } from "@testing-library/react";
import tattoosMock from "../../mocks/tattoosMocks";
import useTattoosApi from "../useTattoosApi";
import { customProvider } from "../../testUtils/customProvider";

describe("Given a useTattoosApi custom hook", () => {
  describe("When it calls its method deleteTattoo method with a tattoo id", () => {
    test("Then it should delete 'MissSitas' tattoo", async () => {
      const expectedTattooId = tattoosMock[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const response = await deleteTattoo(expectedTattooId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
