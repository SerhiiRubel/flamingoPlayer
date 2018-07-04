import React from 'react';
import styled from 'styled-components';

import TrackItemComponent from "../TrackItem/TrackItemComponent";

export default function TrackListComponent(props) {
  const {
    tracks,
    currentTrack,
    playTrack,
    audioRef,
  } = props;
  const trackItem = tracks.map( (item, index) =>
    <TrackItemComponent
        key={item.id}
        id={item.id}
        number={index + 1}
        title={item.title}
        currentTrack={currentTrack.id}
        preview={item.preview}
        playTrack={ id => playTrack(id) }
        audioRef={audioRef}
    /> );
  return (
    <ul className='trackList'>
      {trackItem}
    </ul>
  )
}