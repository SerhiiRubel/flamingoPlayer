import React from 'react';

export default function ControlTimeLineComponent(props) {
    const {
        currentTime,
        endTime,
        progress
    } = props;

    return (
        <div className='progressBar'>
            <span className='time'>{Math.floor(currentTime)}</span>
            <div className='timeLine'>
                <div
                    className='timeLine__line'
                    style={{width: `${progress}%`}}
                > </div>
            </div>
            <span className='time'>{endTime}</span>
        </div>
    )
}