import React from 'react';

export default (ParentComponent) => class Accordion extends React.Component {

    state = {
        openItemId: null
    }

    render () {
        return (
            <ParentComponent 
                {...this.props}
                toggleOpenItem = {this.toggleOpenItem}
                openItemID = {this.state.openItemId}
            />
        )
    }

    toggleOpenItem = id => ev => {
        this.setState ({
            openItemId: id === this.state.openItemId ? null : id
        })
    }
}