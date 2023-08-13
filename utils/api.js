import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  const headers = {
    'Authorization': `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
    
    'Accept': 'application/json',
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
