import axios from "axios";
import { API_KEY, API_URL } from "../constants";

const GetPopularMovies = async () => {
  const response = await axios({
    method: "GET",
    url: API_URL + "/movie/popular",
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

export default GetPopularMovies;
