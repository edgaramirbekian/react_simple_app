import React from 'react';
import DayPicker from 'react-day-picker';
import "react-day-picker/lib/style.css";

export default function CalendarDesk () {
    return (
        <div>
            <h3>Date</h3>
            <DayPicker selectedDays = {new Date()} />
        </div>
    )
}