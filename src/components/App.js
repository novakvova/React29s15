import React from 'react';
//import Article from './Article';
import ArticleList from './ArticleList/index'; 
import data from '../data_json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>My begin app react</h1>
            </div>
            <ArticleList articles={data} />
            {/* <Article article={data[0]} /> */}
        </div>
    );
}

export default App;