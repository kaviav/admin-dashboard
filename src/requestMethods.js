import axios from "axios";

const BASE_URL = "https://ecommerce-backend-0buv.onrender.com/";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmJjZWVjMTU3YzA5ZGUzOWIzOTQ3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDk0MzE0NCwiZXhwIjoxNjk1MjAyMzQ0fQ.bcDeCtVSq8oZ43hcBYqGsy2DusEuam-RTP0uPvHXuMQ";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// console.log(user);
const currentUser = user && JSON.parse(user)?.currentUser;
// console.log(currentUser);
const token = currentUser?.accessToken;
console.log(token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
