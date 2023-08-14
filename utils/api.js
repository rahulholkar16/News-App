import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  const api = 'c4e5c729efd84a6f8f726d383f2024a5';
  // const headers = {
  //   'X-Api-Key': api,
  // };

  const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/${url}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + api
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
