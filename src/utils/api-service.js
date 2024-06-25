const serverUrl = import.meta.env.VITE_SERVER_URL_PROD;

export const postRequest = async (path, payload) => {
  const url = serverUrl.concat(path);
  const body = JSON.stringify(payload);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    console.log({ res });

    const { response } = await res.json();
    return response;
  } catch (error) {
    console.error({ error });
    return { isError: true, error };
  }
};
