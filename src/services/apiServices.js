import axios from "axios";
import { API_KEY } from "../constans/constans";

export const getTopFilms = async () => {
  try {
    const data = await axios.get(
      `https://imdb-api.com/en/API/Top250Movies/${API_KEY}sss`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
