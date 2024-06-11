const serverUrl = import.meta.env.VITE_API_URL;

export const postRequest = async (path, payload) => {
  const url = serverUrl.concat(path);
  const body = JSON.stringify(payload.body);
  console.log({ url, body });
  return new Promise((res) => {
    setTimeout(() => res({ response: `Hello\nBye` }), 2000);
  });
  // try {
  //   const res = await fetch("http://localhost:3000/prompt", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       prompt: searchText,
  //     }),
  //   });

  //   const response = await res.json();
  //   return { response };
  // } catch (error) {
  //   return { isError: true, error };
  // }
};
