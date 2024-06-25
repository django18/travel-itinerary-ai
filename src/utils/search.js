import cities from "cities.json";

export const searchCities = (query) => {
  const regex = new RegExp(query, "i");
  return cities.filter(
    (city) => regex.test(city.name) || regex.test(city.country)
  );
};
