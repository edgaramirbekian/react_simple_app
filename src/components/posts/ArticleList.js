import React from 'react';
import Article from './Article';
import {articles} from '../../data/mock';


export default function ArticleList () {
    const articleElement = articles.map(article => 
        <li key = {article.id}>
            <Article article = {article} />
        </li>
    )

    return (
        <ul>
            {articleElement}
        </ul>
    )
}