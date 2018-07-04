import React from 'react';

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
    return (
        <li className='trackItem' onClick={ () => playTrack(id) }>
            <span>{number}.</span>
            {title}
            { currentTrack && currentTrack === id &&
              <audio
                src={`${preview}`}
                autoPlay
                ref={audioRef}
              > </audio>
            }
        </li>
    )
}