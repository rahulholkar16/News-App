import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
    'Origin': 'https://news-app-kappa-livid.vercel.app/',
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
