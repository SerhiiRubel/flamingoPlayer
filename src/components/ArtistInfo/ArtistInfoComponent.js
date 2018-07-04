import React from 'react';
import styled from 'styled-components';

export default function ArtistInfoComponent(props) {
    const {
        srcImg,
        artistName,
        trackName,
        currentTrack
    } = props;
    const TrackDescr = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    `;
    return (
        <div className='artistInfo'>
            <div className='artistInfo__img'>
                { currentTrack.album && <img src={currentTrack.album.cover_big} alt="track"/> }
            </div>
            <TrackDescr>
                <h4 className='artistInfo__artistName'>{currentTrack.artist && currentTrack.artist.name}</h4>
                <p className='artistInfo__track'>{currentTrack.title && currentTrack.title}</p>
            </TrackDescr>
        </div>
    )
}