import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yb-OBtrNConGXHNmu70qLOgW7uXQUsTdveRn3ix8nyk",
  },
});
