import React from 'react';
import Comment from './Comment';
import {comments} from '../../data/mock';

export default function CommentList () {
    const commentElement = comments.map( comment => {
        return (
            <li key = {comment.id}>
                <Comment comment = {comment} />
            </li>
        )
    })

    return (
        <ul>
            {commentElement}
        </ul>
    )
}