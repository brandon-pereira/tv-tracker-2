import axios from "axios";
import { useEffect, useState } from "react";

function useSearchPredictions(text) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (text) {
      setLoading(true);
      axios({
        url: "/api/search",
        params: { query: text }
      })
        .then(r => {
          setLoading(false);
          setResults(r.data);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
          setError(err);
        });
    } else {
      setResults([]);
    }
  }, [text]);

  return { loading, error, data: results };
}

export default useSearchPredictions;
