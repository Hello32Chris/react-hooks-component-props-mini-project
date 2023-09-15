import React from "react";
import blogData from "../data/blog";


import ArticleList from "./ArticleList"
import Header from "./Header";
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name}  />
      <About blogData={blogData}/>
      <ArticleList blogPosts={blogData.posts} />
    </div>
  );
}

export default App;
