import cities from "cities.json";

export const searchCities = (query) => {
  const regex = new RegExp(query, "i");
  const filteredCities = cities.filter(
    (city) => regex.test(city.name) || regex.test(city.country)
  );

  return filteredCities.slice(0, 10);
};
