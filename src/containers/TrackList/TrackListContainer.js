import React, {Component} from 'react';

import TrackItemComponent from "../../components/TrackItem/TrackItemComponent";
import progress from "../../actions/progress";
import {connect} from "react-redux";
import userPlaylist from "../../actions/userPlaylist";
import getCurrentTrack from "../../actions/getCurrentTrack";
import playStatus from  '../../actions/playStatus';

class TrackListContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const playlist = JSON.parse(localStorage.getItem('playlist'));
    if(playlist.length === 0) {
      playlist.map(
        item => this.props.userPlaylist('add', item)
      )
    }
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
    localStorage.setItem('playlist', JSON.stringify(this.props.tracks));
  }

  render() {
    const {tracks} = this.props;
    return (
      <ul className='trackList'>
        {
          tracks.length !== 0 ?
          this.trackItem() :
          <h3>Your playlist is empty</h3>
        }
      </ul>
    );
  }

  trackItem = () => {
    const { tracks, currentTrackId } = this.props;
    return (
      tracks.map( (item, index) =>
        <TrackItemComponent
          key={item.id}
          id={item.id}
          number={index + 1}
          title={item.title}
          currentTrackId={currentTrackId}
          preview={item.preview}
          playTrack={ id => this.playTrack(id) }
          audioRef={ el => this.audio = el }
          controlTrack={(e, type, id) => this.deleteTrack(e, type, id)}
        />
      )
    );
  };

  playTrack = (id) => {
    const {tracks, playStatus, getCurrentTrack} = this.props;
    const currentTrack = tracks.filter(item => item.id === id);
    getCurrentTrack(currentTrack[0]);
    playStatus(true);
  }

  viewProgressTrack = () => {
    if(this.audio) {
      let {currentTime, duration} = this.audio;
      let progress = currentTime * 100 / duration;
      this.props.progress(progress);
    }
  };

  changeTrack = (id) => {
    const { getCurrentTrack, progress } = this.props;
    getCurrentTrack(id);
    progress(0);
  };

  deleteTrack = (e, type, id) => {
    e.stopPropagation();
    if(this.props.currentTrackId === id) {
      this.changeTrack(1);
      this.props.progress(0);
    }
    this.props.userPlaylist('del', id);
  }
}

const mapStateToProps = store => {
  const { progress, playStatus, playlist } = store;
  return {
    tracks: playlist.tracks,
    currentTrackId: playlist.currentTrack.id,
    isPlay: playStatus.isPlay,
    progressTrack: progress.progressPercent,
  }
};

export default connect(mapStateToProps,{ getCurrentTrack, progress, playStatus, userPlaylist})(TrackListContainer);