import { BASE_URL } from "./ApiAuth";

export const updateUSerData = async function ({ id, data }) {
  try {
    const res = await fetch(`${BASE_URL}updateprofile/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: data,
    });

    if (!res.ok) throw new Error("something went wrong");
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
