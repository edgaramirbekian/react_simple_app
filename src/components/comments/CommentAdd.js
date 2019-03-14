import React from 'react';
import './styles/comment_add.css';

export default class CommentAdd extends React.PureComponent {

    state = {
        name: '',
        text: '',
    }

    limits = {
        name: {max: 15, min: 5},
        text: {max:100, min: 15}
    }

    render () {
        return (
            <form onSubmit = {null}>
               <input
                    type = 'text'
                    placeholder = 'user'
                    value = {this.state['name']} 
                    onChange = {this.handleChange('name')} 
                    className = {this.getClassName('name')()} 
                />
                <br />
                <textarea
                    placeholder = 'comment'
                    value = {this.state['text']} 
                    onChange = {this.handleChange('text')} 
                    className = {this.getClassName('text')()}
                />
                <br />
                <input type = 'submit' value = 'submit' />
            </form>
        )
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length >= this.limits[type].max) return
        this.setState({
            [type]: value
        })
    }

    getClassName = type => ev => this.state[type].length < this.limits[type].min ? 'invalid' : 'valid'
}