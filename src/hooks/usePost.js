import { useState } from "react";
import axios from "axios";

function usePost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(data) {
    setLoading(true);

    try {
      const response = await axios.post(url, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return { sendRequest, loading, error };
}

export default usePost;
