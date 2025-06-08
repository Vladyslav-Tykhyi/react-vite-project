import { useEffect, useState } from "react";
import fetchArticles from "../services/API";
import Articles from "./Articles/Articles";
import SearchBar from "./SearchBar/SearchBar";
import toast from "react-hot-toast";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    if (!query) return;
    const getDATA = async () => {
      try {
        setLoading(true);
        const { hits } = await fetchArticles(query, page, perPage);
        console.log(hits.map((a) => a.objectID));

        setArticles((prev) => [...prev, ...hits]);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    getDATA();
  }, [query, page, perPage]);

  const handleSetQuery = (newQuery) => {
    console.log(newQuery);
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
    toast("succesfolly received");
  };

  const handlePagination = (e) => {
    setArticles([]);
    setPage(0);
    setPerPage(e.target.value);
  };

  return (
    <div>
      <SearchBar onSumbit={handleSetQuery} />
      <select value={perPage} onChange={handlePagination}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <Articles articles={articles} loading={loading} isError={isError} />
      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
    </div>
  );
};

export default App;
