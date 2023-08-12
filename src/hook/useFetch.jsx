import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting a new fetch
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or error
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
