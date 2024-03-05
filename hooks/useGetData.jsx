import { useState, useEffect } from "react";

export const useGetData = endpoint => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(endpoint);
        const data = await res.json();
        setError(null);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return {
    users,
    isLoading,
    error,
  };
};
