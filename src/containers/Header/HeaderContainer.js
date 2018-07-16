import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
import toggleSearchModal from "../../actions/toogleSearchModal";
import {connect} from "react-redux";
import {getAllTracks} from "../../actions/tracks";

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <HeaderStyled className='shadow'>
        <div className='logo'>
          <img src='' alt=''/>
        </div>
        {
          isAuthenticated &&
          <form onSubmit={this.searchTrack}>
            <input type="search" />
          </form>
        }
        <nav className='nav'>
          {
            isAuthenticated ?
            <Link
              to='/'
              className='nav__item'
            >FlaminGO</Link>
              :
            <Link
            to='/login'
            className='nav__item'
            >Sign In</Link>
          }
        </nav>
      </HeaderStyled>
    )
  }

  searchTrack = (e) => {
    e.preventDefault();
    const { getAllTracks, toggleSearchModal } = this.props;
    let searchValue = e.target.childNodes[0].value;
    getAllTracks(searchValue);
    toggleSearchModal(true);
  }
}

const mapStateToProps = store => {
  const {isOpenModal, auth} = store;
  return {
    isOpenModal,
    isAuthenticated: auth.isAuthenticated
  }
};

export default connect(mapStateToProps,{ getAllTracks, toggleSearchModal })(Header);