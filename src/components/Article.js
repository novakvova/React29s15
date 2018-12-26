import React from 'react'


function Article(props) {
    console.log("---Article props---", props);
    const {article} = props;
    const body=<section>{article.text}</section>
    return (
        <div>
            <h2>{article.title}</h2>
            {body}
            <h3>create date: {(new Date(article.date)).toDateString()}</h3>

        </div>
    );
}
export default Article;