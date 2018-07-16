import React, { Component } from 'react';

import ControlButton from "../../core/components/ControlButton/ControlButton";
import ControlTimeLineComponent from '../../components/ControlTimeline/ControlTimelineComponent';
import progress from "../../actions/progress";
import {connect} from "react-redux";
import getCurrentTrack from './../../actions/getCurrentTrack';
import playStatus from './../../actions/playStatus';

class TrackControlsContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.audio = document.querySelector('audio');
  }

  render() {
    const {isPlay, progressTrack} = this.props;
    let type = isPlay ? 'pause': 'play';
    let currentTime = this.audio ? this.audio.currentTime : 0;
    let endTime = this.audio ? Math.floor(this.audio.duration) : '--:--';
    return (
      <div className='controls'>
        <div className='controls__button'>
          <ControlButton
            type={'backward'}
            controlTrack={(e, type, id) => this.controlTrack(e, type, id)}
          />
          <ControlButton
            type={type}
            isPlay={isPlay}
            controlTrack={(e, type, id) => this.controlTrack(e, type, id)}
          />
          <ControlButton
            type={'forward'}
            controlTrack={(e, type, id) => this.controlTrack(e, type, id)}
          />
        </div>
        <ControlTimeLineComponent
          currentTime={currentTime}
          progress={progressTrack}
          setProgress={this.setProgressTrack}
          endTime={endTime}
        />
      </div>
    )
  }

  controlTrack(e, type, id) {
    const { tracks, getCurrentTrack, playStatus } = this.props;
    console.log(type);
    if(tracks.length > 0) {
      switch(type) {
        case 'play':
          this.audio ? this.audio.play() : getCurrentTrack(tracks[0]);
          playStatus(true);
          break;
        case 'pause':
          this.audio.pause();
          playStatus(false);
          break;
        case 'forward':
          getCurrentTrack(1);
          break;
        case 'backward':
          getCurrentTrack(-1);
          break;
        default:
          break;
      }
    }
  }

  setProgressTrack = (e) => {
    if(this.props.tracks.length > 0) {
      const el = e.target.classList.contains('timeLine') ? e.target : e.target.parentElement;
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
}

const mapStateToProps = store => {
  const { playlist, progress, playStatus} = store;
  return {
    tracks: playlist.tracks,
    progressTrack: progress.progressPercent,
    isPlay: playStatus.isPlay
  }
};

export default connect(mapStateToProps,{ getCurrentTrack, playStatus, progress })(TrackControlsContainer);