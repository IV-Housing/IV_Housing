import unfetch from "isomorphic-unfetch";

export async function fetch(url, options) {
  const response = await unfetch(url, options);

  return response.json();
}

export async function fetchWithToken(url, token, options) {
  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      authorization: `Bearer ${token}`,
    },
  });
}
