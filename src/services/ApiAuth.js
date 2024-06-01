export const BASE_URL = "https://www.normadicnarratives.ca/afric.php/api/";
export const register = async function (data) {
  try {
    const res = await fetch(`${BASE_URL}register`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("something went wrong");
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const login = async function ({ email, password }) {
  try {
    const res = await fetch(`${BASE_URL}login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("something went wrong while trying to login");

    const data = await res.json();
    if (!data.status) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};
// async function getlogin() {
//   const res = await fetch(
//     `https://www.normadicnarratives.ca/afric.php/api/login`,
//     {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         email: "joshuaadeyemi445@gmail.com",
//         password: 123456789,
//       }),
//     }
//   );
//   const data = await res.json();
//   console.log(data);
// }
// getlogin();
export const getCurrentUser = async function (token) {
  try {
    const res = await fetch(`${BASE_URL}profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("something went wrong while trying get user");
    const data = await res.json();
    if (!data?.status) throw new Error(data?.message);
    return data;
  } catch (error) {
    throw error;
  }
};
export const logout = async function () {
  try {
    const res = await fetch(`${BASE_URL}logout`, { method: "POST" });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
