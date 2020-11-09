import React from "react";
import Layout from "./components/layout";
import ArticleList from "./components/article_list";
import Header from "./components/header";

function App() {
  return (
    <Layout>
      <Header></Header>
      <ArticleList></ArticleList>
    </Layout>
  );
}

export default App;
