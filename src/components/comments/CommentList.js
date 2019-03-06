import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../../decorators/toggleOpen';

function CommentList ({comments, isOpen, toggleOpen}) {
    return (
        <ul>
            <button onClick = {toggleOpen}>
                {isOpen ? 'Hide Comments' : 'Show Comments'}
            </button>
            {checkOpen(comments, isOpen)}
        </ul>
    )
}

const checkOpen = (some_data, state) => {
    if (state) {
        return commentElement(some_data)
    }
    else return null
}

const commentElement = (received_data) => received_data.map(comment => {
    return (
        <li key = {comment.id}>
            <Comment comment = {comment} />
        </li>
    )
})

CommentList.prop_types = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)