const baseURL = "https://api.weatherapi.com/v1/current.json?key=a62c9af6b5834e94853225647262704";


export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${encodeURIComponent(city)}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};