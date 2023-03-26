import { useState } from "react";
import axios from "axios";

function useDelete(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest() {
    setLoading(true);

    try {
      await axios.delete(url);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return { sendRequest, loading, error };
}

export default useDelete;
