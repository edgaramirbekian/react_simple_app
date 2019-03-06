import React from 'react';
import Article from './Article';
import accordion from '../../decorators/accordion';
import {articles} from '../../data/mock';
import PropTypes from 'prop-types';


function ArticleList (props) {

    const articleElement = () => articles.map(article => 
        {
            return (
                <li key = {article.id}>
                    <Article 
                        article = {article} 
                        openItemID = {props.openItemID}
                        toggleOpenItem = {props.toggleOpenItem(article.id)}
                    />
                </li>  
            )
        } 
    )

    return (
        <ul>
            {articleElement()}
        </ul>
    )
}


ArticleList.prop_types = {
    toggleOpenItem: PropTypes.func
}

export default accordion(ArticleList);