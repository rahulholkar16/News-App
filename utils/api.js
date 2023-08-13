import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  const api = 'c4e5c729efd84a6f8f726d383f2024a5';
  const headers = {
    'X-Api-Key': api,
  };

  const config = {
    url: `https://newsapi.org/v2/${url}`,
    method: 'GET',
    headers,
   // Object shorthand
  };

  try {
    const { data } = await axios(config);
    return data;
  } catch (err) {
    console.error(err); // Using console.error for errors
    throw err; // Rethrow the error to handle it further up the call stack
  }
};
