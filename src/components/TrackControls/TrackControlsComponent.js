import React from 'react';

import ControlButton from "../ControlButton/ControlButton";
import ControlTimeLineComponent from '../ControlTimeline/ControlTimelineComponent';

export default function TrackControlsComponent(props) {
    const {
      audio,
      progress,
      controlTrack,
      isPlay,
    } = props;
    let type = isPlay ? 'pause': 'play';
    return (
        <div className='controls'>
            <div className='controls__button'>
                <ControlButton
                    type={'prev'}
                    controlTrack={(type) => controlTrack(type)}
                />
                <ControlButton
                    type={type}
                    isPlay={isPlay}
                    controlTrack={(type) => controlTrack(type)}
                />
                <ControlButton
                    type={'next'}
                    controlTrack={(type) => controlTrack(type)}
                />
            </div>
            <ControlTimeLineComponent
                currentTime={audio ? audio.currentTime : 0}
                progress={progress}
                endTime={audio ? audio.duration : '--:--'}
            />
        </div>
    )
}