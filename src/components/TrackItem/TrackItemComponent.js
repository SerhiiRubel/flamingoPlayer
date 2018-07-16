import React from 'react';
import './../../assets/scss/googlePlayEqualizer.css';
import ControlButton from "../../core/components/ControlButton/ControlButton";

export default function TrackItemComponent(props) {
  const {
    id,
    title,
    controlTrack,
    number,
    playTrack,
    currentTrackId,
    preview,
    audioRef,
  } = props;
  const isPlay = currentTrackId && currentTrackId === id;
  return (
    <li
      className='trackItem' style={{position: 'relative'}} onClick={ () => playTrack(id) }>
      { isPlay &&
        <div className="equalizer shadow"> </div>
      }
      <span>{number}.</span>
      <p>{title}</p>
      <ControlButton
        type={'trash-alt'}
        id={id}
        controlTrack={controlTrack}
      />
      { isPlay &&
        <audio
          src={`${preview}`}
          autoPlay
          ref={audioRef}
        >
        </audio>
      }
    </li>
  )
}