import axios from 'axios';

export const fetchDataFromapi = async (Url) => {
// Set the headers
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + import.meta.env.VITE_APP_API_KEY,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  };

// Set the request configuration
  const config = {
    url: 'https://newsapi.org/v2/' + Url,
    method: 'GET',
    headers: headers,
    withCredentials: true
    // You can also set other properties like data, params, etc. based on your needs
  };

  try {
    const { data } = await axios(config);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }

};
