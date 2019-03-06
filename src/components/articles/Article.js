import React from 'react';
import CommentList from '../comments/CommentList';
import {comments} from '../../data/mock';
import PropTypes from 'prop-types';
// import toggleOpen from '../../decorators/toggleOpen'


function Article (props) {    
    const {article, toggleOpenItem, openItemID} = props;
    return (
        <div>
            <h3> {article.title} </h3>
            <button onClick = {toggleOpenItem} >
                {openItemID === article.id ? "Close" : "Open"}
            </button>
            {checkOpen(props)}
        </div>
    )
}

const checkOpen = (some_data) => {
    const {article, openItemID} = some_data
    if (openItemID === article.id) {
        return (
            <section>
                {article.text}
                <CommentList comments = {comments}/> 
            </section>
        )
    }
    else return null
}

Article.prop_types = {
    article: PropTypes.object,
    toggleOpenItem: PropTypes.func
}

export default Article