const BASE_URL = "http://localhost:3000/";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}POST`);
  const data = await res.json();
  return data;
}
export async function getPost(id) {
  const res = await fetch(`${BASE_URL}POST/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}
