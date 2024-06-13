const cities = [
  {
    city: "Tokyo",
    country: "Japan",
    population: 37400068,
  },
  {
    city: "New York",
    country: "United States",
    population: 18713220,
  },
  {
    city: "Shanghai",
    country: "China",
    population: 26317104,
  },
  {
    city: "São Paulo",
    country: "Brazil",
    population: 22043028,
  },
  {
    city: "Beijing",
    country: "China",
    population: 21400394,
  },
  {
    city: "Mumbai",
    country: "India",
    population: 21461513,
  },
  {
    city: "Mexico City",
    country: "Mexico",
    population: 21298356,
  },
  {
    city: "Osaka",
    country: "Japan",
    population: 20409034,
  },
  {
    city: "Cairo",
    country: "Egypt",
    population: 20400000,
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    population: 20183457,
  },
];

export const searchCities = (query) => {
  const regex = new RegExp(query, "i");
  return cities.filter(
    (city) => regex.test(city.city) || regex.test(city.country)
  );
};
