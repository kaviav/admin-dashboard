import axios from "axios";

const BASE_URL = "https://ecommerce-backend-j4t4.onrender.com/";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmJjZWVjMTU3YzA5ZGUzOWIzOTQ3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDk0MzE0NCwiZXhwIjoxNjk1MjAyMzQ0fQ.bcDeCtVSq8oZ43hcBYqGsy2DusEuam-RTP0uPvHXuMQ";

const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken
// );

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
