import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2FiNjA5ZTA5YWE4NTU5ODRkZGRmY2EzYzIxMzBmYSIsIm5iZiI6MTc0MTAzNzM4Ny41OTAwMDAyLCJzdWIiOiI2N2M2MWY0YmNjZmM3NDlhZjI5MjE1ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.y0_4wdm9a5oOcuekC7fxpJvNov5dyJPEx19NOg95UAA",
  },
});

export default instance;
