import React from 'react';

import ControlButton from "../ControlButton/ControlButton";
import ControlTimeLineComponent from '../ControlTimeline/ControlTimelineComponent';

export default function TrackControlsComponent(props) {
  const {
    audio,
    progress,
    controlTrack,
    isPlay,
    setProgress
  } = props;
  let type = isPlay ? 'pause': 'play';
  let currentTime = audio ? audio.currentTime : 0;
  let endTime = audio ? audio.duration : '--:--';
  return (
    <div className='controls'>
      <div className='controls__button'>
        <ControlButton
          type={'backward'}
          controlTrack={(type) => controlTrack(type)}
        />
        <ControlButton
          type={type}
          isPlay={isPlay}
          controlTrack={(type) => controlTrack(type)}
        />
        <ControlButton
          type={'forward'}
          controlTrack={(type) => controlTrack(type)}
        />
    </div>
    <ControlTimeLineComponent
      currentTime={currentTime}
      progress={progress}
      setProgress={setProgress}
      endTime={endTime}
    />
    </div>
  )
}