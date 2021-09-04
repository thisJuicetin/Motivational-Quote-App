import axios from "axios";

const options = {
  method: "GET",
  url: "https://quotes15.p.rapidapi.com/quotes/random/",
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_QUOTES_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_QUOTES_API_KEY,
  },
};

export const getMotivationalQuote = async () => {
  const response = await axios
    .request(options)
    .then((response) => {
      return {
        quoteText: response.data.content,
        quoteAuthor: response.data.originator.name,
      };
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
