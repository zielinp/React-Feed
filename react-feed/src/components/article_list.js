import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ArticleCard from "./article_card";

const ArticleListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/posts?_page=6&_limit=6`)
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
        console.log(articles);
      });
  }, []);

  return (
    <>
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
