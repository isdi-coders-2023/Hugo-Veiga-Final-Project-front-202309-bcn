import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

const handlersError = [
  http.get(`${apiUrl}/tattoos`, () => HttpResponse.error()),
  http.delete(`${apiUrl}/tattoos/delete/6571d83d81f419ec2f6fc543`, () =>
    HttpResponse.error(),
  ),
  http.post(`${apiUrl}/tattoos/add`, () => HttpResponse.error()),
  http.get(`${apiUrl}/tattoos/6571d83d81f419ec2f6fc543`, () =>
    HttpResponse.error(),
  ),
  http.patch(`${apiUrl}/tattoos/6571d83d81f419ec2f6fc543`, () =>
    HttpResponse.error(),
  ),
];

export default handlersError;
