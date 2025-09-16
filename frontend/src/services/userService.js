const API_URL = "http://localhost:"; // TO-DO: add port

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "server error");
  }

  return res.json();
}

export const userService = {                // 
  login: (data) =>
    request(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  register: (data) =>
    request(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getProfile: (id) => request(`${API_URL}/users/${id}`),

  updateProfile: (id, data) =>
    request(`${API_URL}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};
