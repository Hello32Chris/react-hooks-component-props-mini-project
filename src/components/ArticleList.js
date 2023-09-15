import React from "react";

import Article from "./Article"


function ArticleList({blogPosts}) {

   const posts = blogPosts.map((post) => {
        <Article key={post.id} name={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/> 
    })

    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList;