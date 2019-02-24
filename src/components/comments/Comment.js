import React from 'react';

export default class Comment extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render () {
        const {comment} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h6>{comment.user}</h6>
                {this.toggleOpen()}
                <button onClick = {this.handleClick}>
                    {isOpen ? 'Close Com' : 'Open Com'}
                </button>
            </div>
        )
    }

    toggleOpen = () => {
        if (this.state.isOpen) {
            const {comment} = this.props
            return <section comment = {comment}> {comment.text} </section>
        }
        else return null
    }

    handleClick = () => this.setState ({
        isOpen: !this.state.isOpen
    })
}