import axios from "axios";
import { useEffect, useState } from "react";

//https://stackoverflow.com/questions/41819632/how-to-call-a-function-module-in-electron-from-my-webpage
function useSearchPredictions(text) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (text) {
      setLoading(true);
      axios({
        url: "http://localhost:8000/api/search",
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
