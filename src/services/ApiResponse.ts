import axios from "axios";
import "dotenv/config";

const requestOptions = {
  method: "GET",
  url: "https://youtube-mp36.p.rapidapi.com/dl",
  params: {},
  headers: {
    "x-rapidapi-key": "",
    "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
  },
};
const fetch = async (id: string) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions);
  return response;
};

export { fetch };
