import React, { Component } from 'react';


import TrackListContainer from "../TrackList/TrackListContainer";
import ArtistInfoComponent from "../../components/ArtistInfo/ArtistInfoComponent";
import TrackControlsContainer from "../TrackControls/TrackControlsContainer";
import SearchModal from '../../components/SearchModal/SearchModal';

import flamingo from './../../assets/img/flamingo.gif';
import music from './../../assets/img/music.jpg';
import {getAllTracks, deleteFoundTrack} from "../../actions/tracks";
import toggleSearchModal from '../../actions/toogleSearchModal';
import userPlaylist from '../../actions/userPlaylist';
import {connect} from 'react-redux';


class PlayerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { toggleSearchModal, tracks } = this.props;
    if(tracks.length === 0 ) {
      toggleSearchModal(false);
    }
  }

  render() {
    const { tracks, currentTrack, isLoading, toggleSearchModal, isOpenModal} = this.props;
    const background = currentTrack.album ? `url(${currentTrack.album.cover_big})` : `url(${music})`;
     return(
         <section className='flamingo'>
           <div
             className='flamingo__blurBg'
             style={{backgroundImage: background}}
           > </div>
           <div className='flamingo__wrapperTracks'>
             <ArtistInfoComponent
               currentTrack={currentTrack}
             />
             <TrackListContainer />
           </div>
           <TrackControlsContainer
             audio={this.audio}
           />
           <SearchModal
            isLoading={isLoading}
            tracks={tracks}
            toggleModal={() => toggleSearchModal(false)}
            isOpenModal={isOpenModal}
            controlTrack={ (e, item,id) => this.controlTrack(e, item,id) }
           />
         </section>
         // :
         // <div className='preload'>
         //   <h1>Music is loading or Heroku is crashed, please check your developer console!</h1>
         //   <img src={flamingo} alt="flamingo"/>
         // </div>
     );
  }

  controlTrack = (e, type, id) => {
    const {tracks, userPlaylist, deleteFoundTrack} = this.props;
    let track = tracks.filter( item => item.id === id );
    userPlaylist('add', track[0]);
    deleteFoundTrack(id);
  }

}


const mapStateToProps = store => {
  const {tracks, isOpenModal, playlist} = store;
  return {
    ...tracks,
    currentTrack: playlist.currentTrack,
    isOpenModal,
  }
};

export default connect(mapStateToProps,{ getAllTracks, toggleSearchModal, userPlaylist, deleteFoundTrack })(PlayerContainer);