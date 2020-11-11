import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ArticleCard from "./article_card";
import { useWindowScroll } from "react-use";

const ArticleListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const { x, y } = useWindowScroll(); // y- aktualna pozycja scrolla w osi y

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/posts?_page=${pageNumber}&_limit=4`)
      .then((res) => res.json())
      .then((res) => {
        setArticles([...articles, ...res]);
        setLoading(false);
      });
  }, [pageNumber]);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight - //wysokosc widocznej czesc strony w trakcie scrollowania
      document.documentElement.clientHeight -
      1; // calkowita wysokosc strony
    if (y > height && !loading) {
      setPageNumber(pageNumber + 1);
      console.log("koniec strony");
    }
  }, [y]);

  //   function handleClick(e) {

  //     setPageNumber(pageNumber + 1);
  //   }

  return (
    <>
      {/* <button onClick={handleClick}>KOLEJNE ARTYKULY</button> */}
      <ArticleListContainer>
        {articles.map((article) => (
          <ArticleCard
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            articleUrl={article.url}
            thumbUrl={article.thumb}
          />
        ))}
      </ArticleListContainer>
    </>
  );
}

export default ArticleList;
