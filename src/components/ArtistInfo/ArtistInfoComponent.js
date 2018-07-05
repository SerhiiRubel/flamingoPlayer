import React from 'react';
import styled from 'styled-components';
import music from './../../assets/img/music.jpg';

export default function ArtistInfoComponent(props) {
    const {
        currentTrack
    } = props;
    const TrackDescr = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    `;
    const src = currentTrack.album ? currentTrack.album.cover_big : music;
    return (
        <div className='artistInfo shadow'>
            <div className='artistInfo__img'>
                {  <img src={src} alt="track"/> }
            </div>
            <TrackDescr>
                <h4 className='artistInfo__artistName'>{currentTrack.artist && currentTrack.artist.name}</h4>
                <p className='artistInfo__track'>{currentTrack.title && currentTrack.title}</p>
            </TrackDescr>
        </div>
    )
}