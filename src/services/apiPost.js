import { BASE_URL } from "./ApiAuth";
const BASE_URL2 = "http://localhost:3000/";

export async function getPosts() {
  const res = await fetch(`${BASE_URL2}POST`);
  const data = await res.json();
  return data;
}
export async function getPost(id) {
  const res = await fetch(`${BASE_URL2}POST/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function uploadPost(postObj) {
  const res = await fetch(`${BASE_URL}/post`, {
    method: "POST",
    body: JSON.stringify(postObj),
  });
  console.log(res);
}
