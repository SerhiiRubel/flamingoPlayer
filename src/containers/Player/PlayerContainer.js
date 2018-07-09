import React, {Component, Fragment} from 'react';


import TrackListComponent from "../../components/TrackList/TrackListComponent";
import ArtistInfoComponent from "../../components/ArtistInfo/ArtistInfoComponent";
import TrackControlsComponent from "../../components/TrackControls/TrackControlsComponent";

import flamingo from './../../assets/img/flamingo.gif';
import music from './../../assets/img/music.jpg';
import getAllTracks from "../../actions/tracks";
import getCurrentTrack from '../../actions/getCurrentTrack';
import progress from '../../actions/progress';
import {connect} from 'react-redux';


class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
    }
  }

  componentDidMount() {
    this.props.getAllTracks('2017');
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
    const {tracks, currentTrack} = this.props;
    const background = currentTrack.album ? `url(${currentTrack.album.cover_big})` : `url(${music})`;
     return(
       tracks.isLoading === false ?
         <section className='flamingo'>
           <div
             className='flamingo__blurBg'
             style={{backgroundImage: background}}
           > </div>
           <div className='flamingo__wrapperTracks'>
             <ArtistInfoComponent
               currentTrack={currentTrack}
             />
             <TrackListComponent
               playTrack={ id => this.playTrack(id) }
               tracks={tracks.tracks}
               currentTrackId={currentTrack.id}
               audioRef={ el => this.audio = el }
             />
           </div>
           <TrackControlsComponent
             controlTrack={ type => this.controlTrack(type) }
             audio={this.audio}
             isPlay={this.state.isPlay}
             progress={ this.state.progress }
             setProgress={this.setProgressTrack}
           />
         </section>
         :
         <div className='preload'>
           <h1>Music is loading or Heroku is crashed, please check your developer console!</h1>
           <img src={flamingo} alt="flamingo"/>
         </div>
     );
  }

  controlTrack(type) {
    switch(type) {
      case 'play':
        this.audio ? this.audio.play() : this.playTrack(this.state.tracks[0].id);
        this.setState({isPlay: true});
        break;
      case 'pause':
        this.audio.pause();
        this.setState({isPlay: false});
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
    const currentTrack = this.props.tracks.tracks.filter( item => item.id === id );
    this.props.getCurrentTrack(currentTrack[0]);
    this.setState({
      isPlay: true,
      progress: 0
    });
  }

  changeTrack = (id) => {
    const {tracks, currentTrack, getCurrentTrack} = this.props;
    let curr = tracks.tracks.filter( (item) =>  item.id === currentTrack.id);
    let i = tracks.tracks.indexOf(curr[0]) + id;
    if(i >= tracks.tracks.length) {
      i = 0;
    } else if (i < 0) {
      i = tracks.tracks.length - 1;
    }
    getCurrentTrack(tracks.tracks[i]);
    this.setState({ progress: 0 });
  }

  viewProgressTrack = () => {
      let {currentTime, duration} = this.audio;
      let progress = currentTime * 100 / duration;
      this.setState({ progress });
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
    this.props.progress(progress);
  }
}

const mapStateToProps = store => {
  const {tracks, currentTrack, progress, isPlay} = store;
  return {
    tracks,
    currentTrack,
    progress,
    isPlay
  }
};

export default connect(mapStateToProps,{getAllTracks, getCurrentTrack, progress })(PlayerContainer);