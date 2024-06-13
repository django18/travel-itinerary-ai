const serverUrl = import.meta.env.VITE_API_URL;

export const postRequest = async (path, payload) => {
  const url = serverUrl.concat(path);
  console.log({ payload });
  const body = JSON.stringify(payload);
  console.log({ url, body });
  // return new Promise((res) => {
  //   setTimeout(() => res({ response: `Hello\nBye` }), 2000);
  // });
  try {
    const res = await fetch("http://localhost:3000/prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const { response } = await res.json();
    console.log("API response", { response });
    return response;
  } catch (error) {
    return { isError: true, error };
  }
};
