import React from 'react';
import DayPicker from 'react-day-picker';
import "react-day-picker/lib/style.css";

export default class CalendarDesk extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleDayClick = this.handleDayClick.bind(this)
        this.state = {
            from: undefined,
            to: new Date()
        }
    }

    render () {
        return (
            <div>
                <h3>Date</h3>
                <DayPicker 
                    onDayClick = {this.handleDayClick} 
                    selectedDays = {this.state.from} 
                />
                {this.state.from 
                    ? <p> You selected {this.state.from.toLocaleDateString()} </p>
                    : <p> Please select a Date </p> }
                <p> Today is {this.state.to.toLocaleDateString()} </p>
            </div>
        )
    }

    handleDayClick (day, {selected}) {
        selected
        ? this.setState ({
            from: undefined
        })
        : this.setState ({
            from: day
        })
    }
}