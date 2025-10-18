import React, { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setData(data);
      setError(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default UseFetch;
