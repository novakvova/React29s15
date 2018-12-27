import React from 'react'
import Article from '../Article';
import './style.css';

export default function ArticleList({articles}) {
    const listArtHTML=articles.map(a => 
        <li key={a.id} className="article-list__li"><Article article={a} /></li>
        );

    return (
        <ul>
            {listArtHTML}
        </ul>
    )
}