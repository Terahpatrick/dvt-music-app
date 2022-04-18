import { useState, useEffect } from "react";

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const baseUrl =
  "https://terah-cors-anywhere.herokuapp.com/https://api.deezer.com/";

export const useFetch = (url: string, watchers: any[]): TApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(`${baseUrl}${url}`, {
        headers: {
          Origin: "X-Requested-With",
        },
      });
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, watchers);

  return { status, statusText, data, error, loading };
};
