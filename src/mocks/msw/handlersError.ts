import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

const handlersError = [
  http.get(`${urlApi}/tattoos`, () => HttpResponse.error()),
  http.delete(`${urlApi}/tattoos/delete/6571d83d81f419ec2f6fc543`, () =>
    HttpResponse.error(),
  ),
];

export default handlersError;
