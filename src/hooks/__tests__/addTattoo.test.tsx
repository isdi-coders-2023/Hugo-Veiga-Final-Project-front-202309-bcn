import { renderHook, screen } from "@testing-library/react";
import tattoosMock from "../../mocks/tattoosMock";
import useTattoosApi from "../useTattoosApi";
import { customProvider } from "../../testUtils/customProvider";
import tattooMockWithoutId from "../../mocks/tattooMockWithoutId";
import { server } from "../../mocks/msw/node";
import handlersError from "../../mocks/msw/handlersError";
import { handlers } from "../../mocks/msw/handlers";
import customRenderWithMemoryRouter from "../../testUtils/customRenderWithMemoryRouter";
import App from "../../components/App/App";

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

      const feedbackMessage = "The tattoo has been created succesfully!";
      const newTattoo = tattooMockWithoutId[0];

      customRenderWithMemoryRouter(<App />, ["/add-tattoo"]);

      const {
        result: {
          current: { addTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      await addTattoo(newTattoo);
      const feedback = await screen.findAllByText(feedbackMessage);

      expect(feedback[0]).toBeInTheDocument();
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
