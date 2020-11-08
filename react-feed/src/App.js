import React from "react";
import Layout from "./components/layout";
import ArticleList from "./components/article_list";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <ArticleList></ArticleList>
    </Layout>
  );
}

export default App;
