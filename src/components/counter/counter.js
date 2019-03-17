import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../../AC/index'

function Counter(props) {

    const {counter, dispatch} = props
    const handleIncrement = ev => {
        dispatch(increment())
    }

    return (
        <div>
            <h3> Counter {counter} </h3>
            <button onClick = {handleIncrement} > Increment </button>
        </div>
    )


}


const mapStateToProps = (storeState) => {
    return {
        counter: storeState.count
    }
}

const decorator = connect(mapStateToProps);

export default decorator(Counter)