import axios from "axios";

const url = "https://goncalobmira.online/api/portfolio";

export const visitors = (count) => {
  axios
    .post(url, { count: count })
    .then((response) => response)
    .catch((error) => console.log(error));
};
