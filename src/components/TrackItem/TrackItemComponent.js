import React from 'react';
import './../../assets/scss/googlePlayEqualizer.css';

export default function TrackItemComponent(props) {
  const {
    id,
    title,
    number,
    playTrack,
    currentTrack,
    preview,
    audioRef,
  } = props;
  const isPlay = currentTrack && currentTrack === id;
  return (
    <li
      className='trackItem' style={{position: 'relative'}} onClick={ () => playTrack(id) }>
      { isPlay &&
        <div className="equalizer shadow"> </div>
      }
      <span>{number}.</span>
      {title}
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