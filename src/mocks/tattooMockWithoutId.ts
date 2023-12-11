import { TattooStructureWithoutId } from "../store/features/tattoos/types";

const tattooMockWithoutId: TattooStructureWithoutId[] = [
  {
    artist: "MissSita",
    email: "hello.misssita@gmail.com",
    instagram: "https://www.instagram.com/misssita",
    city: "Barcelona",
    style: "blackwork",
    image: "https://i.ibb.co/W2DBhvK/miss-Sita-tattoo-1.webp",
    notes: "Ask to review the fan tattoo ",
    isFavorite: true,
    direction: "https://www.google.com/maps/",
  },
  {
    artist: "Yotomy",
    email: "yotomytattooer@gmail.com",
    instagram: "https://www.instagram.com/_yotomy_",
    city: "Barcelona",
    style: "blackwork",
    image: "https://i.ibb.co/9ccJ1Dq/yotomy-1.webp",
    notes: "",
    isFavorite: true,
    direction:
      "https://www.google.com/maps/dir//109+Tattoo,+Carrer+d'En+Cortines,+23,+08003+Barcelona/@41.389549,2.1777671,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12a4a2fa4f62e835:0xede092fc03c85d0!2m2!1d2.180342!2d41.389545!3e0?entry=ttu",
  },
];

export default tattooMockWithoutId;
