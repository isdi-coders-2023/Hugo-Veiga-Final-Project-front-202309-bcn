import { renderHook, screen, waitFor } from "@testing-library/react";
import useTattoosApi from "../useTattoosApi";
import customRenderProviderWithMemoryRouter from "../../testUtils/customRenderProviderMemoryRouter";
import App from "../../components/App/App";
import { customProvider } from "../../testUtils/customProvider";
import tattoosMock from "../../mocks/tattoosMock";
import tattooModifiedMock from "../../mocks/tattooModifiedMock";
import { server } from "../../mocks/msw/node";
import handlersError from "../../mocks/msw/handlersError";

describe("Given a useTattoosApi custom hook", () => {
  describe("When it is called with its modifyTattoo method with 'MissSita's tattoo", () => {
    test("Then it should show the text 'The tattoo has been modified succesfully' as a feedback message", async () => {
      const feedbackMessage = "The tattoo has been modified succesfully";

      customRenderProviderWithMemoryRouter(<App />, [
        "tattoos/modify/6571d83d81f419ec2f6fc543",
      ]);

      const {
        result: {
          current: { modifyTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      await modifyTattoo(tattoosMock[0]._id, tattooModifiedMock);
      const actualFeedback = await screen.findAllByText(feedbackMessage);

      await waitFor(() => {
        expect(actualFeedback[0]).toBeInTheDocument();
      });
    });
  });

  describe("When it is called with its modifyTattoo method with 'MissSita's tattoo and the response fails", () => {
    test("Then it should show the text 'Error modifying the tattoo' as a feedback message", async () => {
      server.use(handlersError[4]);

      const expectedTattooId = tattoosMock[0]._id;
      const feedbackMessage = "Error modifying the tattoo";

      customRenderProviderWithMemoryRouter(<App />, [
        "/tattoos/modify/6571d83d81f419ec2f6fc543",
      ]);

      const {
        result: {
          current: { modifyTattoo },
        },
      } = renderHook(() => useTattoosApi(), { wrapper: customProvider });

      await modifyTattoo(expectedTattooId, tattooModifiedMock);

      const actualFeedback = await screen.findAllByText(feedbackMessage);

      expect(actualFeedback[0]).toBeInTheDocument();
    });
  });
});
