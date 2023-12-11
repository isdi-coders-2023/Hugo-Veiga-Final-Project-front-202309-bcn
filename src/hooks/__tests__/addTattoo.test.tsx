import { renderHook } from "@testing-library/react";
import tattoosMock from "../../mocks/tattoosMock";
import useTattoosApi from "../useTattoosApi";
import { customProvider } from "../../testUtils/customProvider";
import tattooMockWithoutId from "../../mocks/tattooMockWithoutId";
import { server } from "../../mocks/msw/node";
import handlersError from "../../mocks/msw/handlersError";
import { handlers } from "../../mocks/msw/handlers";

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

  describe("When it calls its addTattoo method with MissSita's tattoo data", () => {
    test("Then it should show the feedback message 'The tattoo has been created succesfully!'", async () => {
      server.use(...handlers);

      const expectedTattoos = tattoosMock[0];
      const newTattoo = tattooMockWithoutId[0];

      const {
        result: {
          current: { addTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const actualTattoo = await addTattoo(newTattoo);

      expect(actualTattoo).toStrictEqual(expectedTattoos);
    });
  });

  describe("When it calls its addTattoo method with MissSita's tattoo data and the response error", () => {
    test("Then it shouldn't return any tattoo'", async () => {
      server.use(...handlersError);
      const expectedNewTattoo = tattooMockWithoutId[0];

      const {
        result: {
          current: { addTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      const newTattoo = await addTattoo(expectedNewTattoo);

      expect(newTattoo).toBeUndefined();
    });
  });
});
