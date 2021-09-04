import axios from "axios";

const options = {
  method: "GET",
  url: "https://famous-quotes4.p.rapidapi.com/random",
  params: { category: "motivational", count: "20" },
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_QUOTES_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_QUOTES_API_KEY,
  },
};

export const getMotivationalQuotes = async () => {
  const response = await axios
    .request(options)
    .then((response) => {
      console.log("Fetching motivational quotes!");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return response;
};
