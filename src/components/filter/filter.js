import React from 'react';
import Select from 'react-select';

export default class Filter extends React.PureComponent {
    constructor (props) {
        super(props)
        this.options = props.articles.map (article => {
            return {
                value: article,
                label: article.title
            }
        })        
    }

    render () {
        return (
            <Select options = {this.options} isMulti = {true}/>
        )
    }
}