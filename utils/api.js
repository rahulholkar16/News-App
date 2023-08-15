import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/${url}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' +  import.meta.env.VITE_APP_API_KEY,
    }
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.error(err); 
    throw err; 
  }
};
