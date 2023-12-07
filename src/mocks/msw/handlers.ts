import { http, HttpResponse } from "msw";
import tattoosMock from "../tattoosMocks";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURL}/tattoos`, () => {
    return HttpResponse.json(tattoosMock);
  }),
  http.delete(`${apiURL}/tattoos/delete/6571d83d81f419ec2f6fc543`, () => {
    return HttpResponse.json({});
  }),
];
