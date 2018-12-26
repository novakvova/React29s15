import React from 'react';
import Article from './Article';
import data from '../data_json';

function App() {
    return (
        <div>
            <h1>My begin app react</h1>
            <Article article={data[0]} />
        </div>
    );
}

export default App;