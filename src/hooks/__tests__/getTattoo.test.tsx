import { renderHook } from "@testing-library/react";
import tattoosMock from "../../mocks/tattoosMock";
import useTattoosApi from "../useTattoosApi";
import { customProvider } from "../../testUtils/customProvider";
import { server } from "../../mocks/msw/node";
import { handlers } from "../../mocks/msw/handlers";

describe("Given a useTattoosApi custom hook", () => {
  describe("When it calls its method getTattoo with a valid id", () => {
    test("Then it should return MissSitas's tattoo", async () => {
      server.use(...handlers);

      const expectedTattoos = tattoosMock[0];
      const expectedTattooId = tattoosMock[0]._id;

      const {
        result: {
          current: { getTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const actualTattoo = await getTattoo(expectedTattooId);

      expect(actualTattoo).toStrictEqual(expectedTattoos);
    });
  });
});
