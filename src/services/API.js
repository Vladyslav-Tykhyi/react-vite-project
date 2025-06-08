import axios from "axios";

const fetchArticles = async (query, page, perPage) => {
  const responseData = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page${page}&hitsPerPage=${perPage}`
  );
  console.log(responseData.data);

  return responseData.data;
};

export default fetchArticles;
