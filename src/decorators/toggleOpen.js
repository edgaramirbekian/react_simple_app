import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render () {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) => this.setState ({
        isOpen: !this.state.isOpen
    })
}