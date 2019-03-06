import React from 'react';
import PropTypes from 'prop-types';


export default function Comment (props) {
        const {comment} = props;
        return (
            <div>
                <h6>{comment.user}</h6>
                <section>{comment.text}</section>
            </div>
        )
    }

Comment.prop_types = {
    comment: PropTypes.object
}