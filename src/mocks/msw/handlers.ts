import { http, HttpResponse } from "msw";
import tattoosMock from "../tattoosMocks";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURL}/tattoos`, () => HttpResponse.json(tattoosMock)),
];
