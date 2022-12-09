import { api } from "../data/api";

export const getData = (id) => {
  return api.find((hero) => hero.id === id);
};

export const getByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return api.filter((hero) => hero.title.toLocaleLowerCase().includes(name));
};

export const getByData = (categoria) => {
  return api.filter((heroe) => heroe.categoria === categoria);
};
