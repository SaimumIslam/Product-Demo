import {
  routers,
  powerbanks,
  headphones,
  speeker,
  printers,
  projectors,
} from "./nav/Accesories";
import { bikes1, bikes2, cars } from "./nav/Automobiles";
import { laptops, tablets, desktops } from "./nav/Computers";
import { televishion, aircondionar, refreezarator } from "./nav/Electronics";
import { watches1, watches2, tremer } from "./nav/LifeStyle";
import { popular, brands1, brands2 } from "./nav/Phones";

export const accesories = [
  { listItems: routers, name: "Routers" },
  { listItems: powerbanks, name: "Power Banks" },
  { listItems: headphones, name: "Headphones" },
  { listItems: speeker, name: "Speekers" },
  { listItems: printers, name: "Printers" },
  { listItems: projectors, name: "Projectors" },
];

export const automobiles = [
  { listItems: bikes1, name: "Motor Cycle" },
  { listItems: bikes2, name: null },
  { listItems: cars, name: "Cars" },
];

export const computers = [
  { listItems: laptops, name: "Laptops" },
  { listItems: tablets, name: "Tablets" },
  { listItems: desktops, name: "Desktop Items" },
];

export const electronics = [
  { listItems: televishion, name: "Tv" },
  { listItems: aircondionar, name: "Ac" },
  { listItems: refreezarator, name: "Freez" },
];

export const lifestyle = [
  { listItems: watches1, name: "Watches" },
  { listItems: watches2, name: null },
  { listItems: tremer, name: "Treamer" },
];

export const phones = [
  { listItems: popular, name: "Popular" },
  { listItems: brands1, name: "Brands" },
  { listItems: brands2, name: null },
];
