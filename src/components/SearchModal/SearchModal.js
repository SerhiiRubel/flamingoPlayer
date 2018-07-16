import React, {Component, Fragment} from 'react';
import ControlButton from '../../core/components/ControlButton/ControlButton';
import {SearchModalStyled, SearchModalSubstrate} from './style';
import Loader from "../../core/styledComponents/loader";

export default class SearchModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isOpenModal, toggleModal, isLoading} = this.props;
    return (
      <Fragment>
        {
          isOpenModal &&
          <div className='searchModalGroup'>
            <SearchModalSubstrate onClick={toggleModal}></SearchModalSubstrate>
            <SearchModalStyled>
              <div className="modalContainer">
                <h1>Flamingo found your track, human!</h1>
                { isLoading === false ?
                <ul className="trackWrapper">
                  {this.showMeFindedTrack()}
                </ul>
                :
                <Loader></Loader>
                }
              </div>
            </SearchModalStyled>
          </div>
        }
      </Fragment>
    );
  }

  showMeFindedTrack() {
    const {tracks, controlTrack} = this.props;
    return tracks.map( (item,i) => (
      <li
        key={item.id}
      >
        <span>{i+1}</span>
        <p>{item.title}</p>
        <ControlButton
          type={'plus-square'}
          id={item.id}
          controlTrack={(e, type, id) => controlTrack(e, type, id)}
        />
      </li>
    ));
  }
}

