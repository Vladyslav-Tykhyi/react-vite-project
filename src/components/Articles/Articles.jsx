const Articles = ({ loading, articles, isError }) => {
  return (
    <div>
      {loading ? (
        <p>Articles are loading!!!</p>
      ) : (
        articles.map((item, index) => (
          <a
            href={item.url}
            key={item.objectID + index}
            style={{ display: "block" }}
            target="_blank"
          >
            {item.title}
          </a>
        ))
      )}
      {isError && <p>Something went wrong!!!</p>}
    </div>
  );
};

export default Articles;
