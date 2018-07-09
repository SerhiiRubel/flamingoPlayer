import React from 'react';

import TrackItemComponent from "../TrackItem/TrackItemComponent";

export default function TrackListComponent(props) {
  const {
    tracks,
    currentTrackId,
    playTrack,
    audioRef,
  } = props;
  const trackItem = tracks.map( (item, index) =>
    <TrackItemComponent
      key={item.id}
      id={item.id}
      number={index + 1}
      title={item.title}
      currentTrackId={currentTrackId}
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