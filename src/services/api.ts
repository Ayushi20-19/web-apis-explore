import axios from "axios";

const BASE_URL = "https://api.apis.guru/v2";

export const getProviders = async () => {
  const response = await axios.get(`${BASE_URL}/providers.json`);
  return response.data;
};

export const getAPIsByProvider = async (providerName: string) => {
  const response = await axios.get(`${BASE_URL}/${providerName}.json`);
  return response.data;
};
