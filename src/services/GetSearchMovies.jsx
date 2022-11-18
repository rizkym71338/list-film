import axios from "axios";
import { API_KEY, API_URL } from "../constants";

const GetSearchMovies = async (search) => {
  const response = await axios({
    method: "GET",
    url: API_URL + "/search/movie",
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
  return response;
};

export default GetSearchMovies;
