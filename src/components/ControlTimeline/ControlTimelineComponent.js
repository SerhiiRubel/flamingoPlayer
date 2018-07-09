import React from 'react';

export default function ControlTimeLineComponent(props) {
  const {
    currentTime,
    endTime,
    progress,
    setProgress
  } = props;
  return (
    <div className='progressBar'>
      <span className='time shadow'>{Math.floor(currentTime)}</span>
      <div
        className='timeLine'
        onClick={ setProgress }>
        <div
          className='timeLine__line shadow'
          style={{width: `${progress}%`}}
        > </div>
      </div>
      <span className='time shadow'>{endTime}</span>
    </div>
  )
}