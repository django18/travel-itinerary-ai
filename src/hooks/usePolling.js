import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

const usePolling = (url, intervalTime = 5000, maxTimeout = 40000) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPolling, setIsPolling] = useState(false);
  const [queryParams, setQueryParams] = useState({});
  const pollingInterval = useRef(null);
  const pollingTimeout = useRef(null);

  const startPolling = (_id) => {
    const queryParamsUpdate = { ...queryParams, id: _id };
    setQueryParams(queryParamsUpdate);
    setIsPolling(true);
  };
  const stopPolling = () => {
    setIsPolling(false);
    clearInterval(pollingInterval.current);
    clearTimeout(pollingTimeout.current);
    setLoading(false);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        params: queryParams,
      });
      if (response.data.hasData) {
        setData({ isSuccess: true, data: response.data.data });
        stopPolling();
      }
    } catch (err) {
      setError(err);
      setData({ isError: true });
      setLoading(false);
    }
  }, [url, queryParams]);

  useEffect(() => {
    if (!isPolling) return;

    fetchData(); // Initial fetch

    pollingInterval.current = setInterval(fetchData, intervalTime);

    // Clean up the interval on component unmount
    return () => clearInterval(pollingInterval.current);
  }, [fetchData, intervalTime, isPolling]);

  useEffect(() => {
    if (!isPolling) return;

    pollingTimeout.current = setTimeout(() => {
      setData({ isError: true });
      stopPolling();
    }, maxTimeout);

    // Clean up the timeout on component unmount or when stopping polling
    return () => clearTimeout(pollingTimeout.current);
  }, [isPolling, maxTimeout]);

  return { data, loading, error, isPolling, startPolling, stopPolling };
};

export default usePolling;
