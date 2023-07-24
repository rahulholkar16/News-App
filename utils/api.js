import axios from 'axios';

export const fetchDataFromapi = async (Url) => {
// Set the headers
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + import.meta.env.VITE_APP_API_KEY
  };

// Set the request configuration
  const config = {
    url: 'https://newsapi.org/v2/' + Url,
    method: 'GET',
    headers: headers,
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
