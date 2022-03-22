import axios from 'axios';


const BASE_URL = "http://localhost:5777/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhlYzBkMTEzOGJkZTdiZTFlZWQ0NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDc4OTc2NTAsImV4cCI6MTY3OTQzMzY1MH0.rPqYGPRuZ2YwyZ17LwOWzg5t54KujfALgqv3Dyxpcyo";

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});
