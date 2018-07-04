import React, { Component } from 'react';
import axios from 'axios';

import TrackListComponent from "../../components/TrackList/TrackListComponent";
import ArtistInfoComponent from "../../components/ArtistInfo/ArtistInfoComponent";
import TrackControlsComponent from "../../components/TrackControls/TrackControlsComponent";


export default class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      currentTrack: {},
      progress: null,
      isPlay: false,
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=2018`)
      .then( response => this.setState({ tracks: response.data.data }))
      .catch(error =>  {
        console.log(error);
    });
  }

  getSnapshotBeforeUpdate() {

  }

  componentDidUpdate() {
    if(this.audio) {
      this.audio.ontimeupdate = () => this.viewProgressTrack();
      this.audio.onended = () => this.changeTrack(1);
    }
  }

  render() {
     const background = this.state.currentTrack.album ? `url(${this.state.currentTrack.album.cover_big})` : 'coral';
     return(
         this.state.tracks.length !== 0 ?
         <section className='flamingo'>
           <div
             className='flamingo__blurBg'
             style={{backgroundImage: background}}
           > </div>
           <div className='flamingo__wrapperTracks'>
             <ArtistInfoComponent
               currentTrack={this.state.currentTrack}
             />
             <TrackListComponent
               playTrack={ id => this.playTrack(id) }
               {...this.state}
               audioRef={ el => this.audio = el }
             />
           </div>
           <TrackControlsComponent
             controlTrack={ type => this.controlTrack(type) }
             audio={this.audio}
             isPlay={this.state.isPlay}
             progress={ this.state.progress }
           />
         </section>
         :
         <div className='preload'>
           <h1>Music is loading or Heroku is crashed, please check your developer console!</h1>
           <img src="" alt=""/>
         </div>
     );
  }

  updateState(state) {
    this.setState(state);
  }

  controlTrack(type) {
    switch(type) {
      case 'play':
        this.audio ? this.audio.play() : this.playTrack(this.state.tracks[0].id);
        this.updateState({isPlay: true});
        break;
      case 'pause':
        this.audio.pause();
        this.updateState({isPlay: false});
        break;
      case 'next':
        this.changeTrack(1);
        break;
      case 'prev':
        this.changeTrack(-1);
        break;
      default:
        break;
    }
  }

  playTrack = (id) => {
    const currentTrack = this.state.tracks.filter( item => item.id === id );
    this.updateState({
      isPlay: true,
      currentTrack: currentTrack[0]
    });
  }

  changeTrack = (id) => {
    const {tracks, currentTrack} = this.state;
    let i = tracks.indexOf(currentTrack) + id;
    if(i >= tracks.length) {
      i = 0;
    } else if (i < 0) {
      i = tracks.length - 1;
    }
    this.updateState({ currentTrack: tracks[i] });
  }

  viewProgressTrack = () => {
      let {currentTime, duration} = this.audio;
      let progress = currentTime * 100 / duration;
      this.updateState({ progress });
  }

  setProgressTrack = () => {

  }
}