import React, {Component, Fragment} from 'react';
import axios from 'axios';

import TrackListComponent from "../../components/TrackList/TrackListComponent";
import ArtistInfoComponent from "../../components/ArtistInfo/ArtistInfoComponent";
import TrackControlsComponent from "../../components/TrackControls/TrackControlsComponent";
import HeaderComponent from '../../components/Header/HeaderComponent';

import flamingo from './../../assets/img/flamingo.gif';
import music from './../../assets/img/music.jpg';


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

  componentDidUpdate() {
    if(this.audio) {
      this.audio.ontimeupdate = () => this.viewProgressTrack();
      this.audio.onended = () => this.changeTrack(1);
    }
  }

  componentWillUnmount() {
    if(this.audio) {
      this.audio.ontimeupdate = () => console.log('');
      this.audio.onended= () => console.log('');
    }
  }

  render() {
     const background = this.state.currentTrack.album ? `url(${this.state.currentTrack.album.cover_big})` : `url(${music})`;
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
             setProgress={e => this.setProgressTrack(e)}
           />
         </section>
         :
         <div className='preload'>
           <h1>Music is loading or Heroku is crashed, please check your developer console!</h1>
           <img src={flamingo} alt="flamingo"/>
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
      case 'forward':
        this.changeTrack(1);
        break;
      case 'backward':
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
      currentTrack: currentTrack[0],
      progress: 0
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
    this.updateState({ currentTrack: tracks[i], progress: 0 });
  }

  viewProgressTrack = () => {
      let {currentTime, duration} = this.audio;
      let progress = currentTime * 100 / duration;
      this.updateState({ progress });
  }

  setProgressTrack = (e) => {
    let el = e.target.classList.contains('timeLine') ? e.target : e.target.parentElement;
    let width = el.clientWidth;
    let rect = el.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let duration = this.audio.duration;
    let newTime = (duration * offsetX) / width;
    let progress = (newTime * 100) / duration;
    this.audio.currentTime = newTime;
    this.updateState({progress});
  }
}