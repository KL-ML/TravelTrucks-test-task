import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';


axios.defaults.baseURL = BASE_URL;

export const getCampers = async (endPoint, params) => {
  const { data } = await axios.get(endPoint, params);

  return data;
};
