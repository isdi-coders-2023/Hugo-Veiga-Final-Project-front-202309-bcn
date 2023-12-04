import { TattooStructure } from "../store/features/tattoos/types";

const tattoosMock: TattooStructure[] = [
  {
    id: "6564db84aa515e7823b31e56",
    artist: "MissSita",
    email: "hello.misssita@gmail.com",
    instagram: "@misssita",
    city: "Barcelona",
    style: "blackwork",
    image: "https://i.ibb.co/W2DBhvK/miss-Sita-tattoo-1.webp",
    notes: "Ask to review the fan tattoo ",
    isFavorite: true,
    direction:
      "https://www.google.com/maps/dir//109+tattoo+barcelona/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12a4a2fa4f62e835:0xede092fc03c85d0?sa=X&ved=2ahUKEwjZ7OSj3OSCAxW2TKQEHaiVDSwQ9Rd6BAhAEAA",
  },
  {
    id: "6564db84aa515e7823b31e57",
    artist: "Nissaco",
    email: "nissaco@gmail.com",
    instagram: "@nissaco",
    city: "Osaka",
    style: "blackwork",
    image: "https://i.ibb.co/p4DsFsT/nissaco-tattoo.webp",
    notes: "write to him to know the location of his private studio",
    isFavorite: false,
    direction:
      "https://www.google.com/maps/place/Osaka,+Prefectura+de+Osaka,+Jap%C3%B3n/@34.6774872,135.3212277,11z/data=!3m1!4b1!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu",
  },
];

export default tattoosMock;
