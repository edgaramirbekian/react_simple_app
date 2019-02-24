import React from 'react';
import CommentList from '../comments/CommentList';


export default class Article extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render () {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3> {article.title} </h3>
                <button onClick = {this.handleClick} >
                    {isOpen ? "Close" : "Open"}
                </button>
                {this.toggleOpen()}
            </div>
        )
    }

    toggleOpen = () => {
        if (this.state.isOpen) {
            const {article} = this.props
            return (
                <section>
                    {article.text}
                    <CommentList /> 
                </section>
            )
        }
        else return null
    }

    handleClick = () => this.setState ({
            isOpen: !this.state.isOpen
    })
}