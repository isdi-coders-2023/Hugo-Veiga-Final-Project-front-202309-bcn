import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

const handlersError = [
  http.get(`${urlApi}/tattoos`, () => HttpResponse.error()),
];

export default handlersError;
