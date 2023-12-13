import { http, HttpResponse } from "msw";
import tattoosMock from "../tattoosMock";
import tattooModifiedMock from "../tattooModifiedMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/tattoos`, () => {
    return HttpResponse.json({ tattoos: tattoosMock });
  }),
  http.delete(`${apiUrl}/tattoos/delete/6571d83d81f419ec2f6fc543`, () => {
    return HttpResponse.json({});
  }),
  http.post(`${apiUrl}/tattoos/add`, () => {
    return HttpResponse.json({ tattoo: tattoosMock[0] });
  }),
  http.get(`${apiUrl}/tattoos/6571d83d81f419ec2f6fc543`, () => {
    return HttpResponse.json({ tattoo: tattoosMock[0] });
  }),
  http.patch(
    `${import.meta.env.VITE_API_URL}/tattoos/6571d83d81f419ec2f6fc543`,
    () => {
      return HttpResponse.json({ tattoo: tattooModifiedMock });
    },
  ),
];
