import {
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  SDGsONE,
  SDGsTWO,
  SDGsTHREE,
  SDGsFOUR,
  MINONE,
  MINTWO,
  MINTHREE,
  MINFOUR,
  STATESONE,
  STATESTWO,
  STATESTHREE,
  STATESFOUR
} from "assets/images(png)";
import { Sectors, SDGs, Ministries, States } from "assets/icons(svg)";

const MockCategories = [
  {
    title: "Sectors",
    link: "sectors",
    images: [Frame1, Frame2, Frame3, Frame4],
    description:
      "Sectors assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",
    icon: Sectors
  },
  {
    title: "SDGs",
    link: "sdgs",
    images: [SDGsONE, SDGsTWO, SDGsTHREE, SDGsFOUR],
    description:
      "SDGs assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",
    icon: SDGs
  },
  {
    title: "Ministries",
    link: "ministries",
    images: [MINONE, MINTWO, MINTHREE, MINFOUR],
    description:
      "Ministries assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",
    icon: Ministries
  },
  {
    title: "States",
    link: "states",
    images: [STATESONE, STATESTWO, STATESTHREE, STATESFOUR],
    description:
      "States assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",
    icon: States
  }
];

export default MockCategories;
