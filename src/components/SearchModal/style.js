import styled, {css, keyframes} from 'styled-components';

const openModalAnimation = keyframes`
  from {
    opacity: 0;
    top: -20%;
  }
  to {
    opacity: 1;
    top: 80px;
  }
`;

const SearchModalStyled = styled.section`
  position: fixed;
  z-index: 9999;
  background-color: white;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: scroll;
  height: 80vh;
  width: 100%;
  max-width: 50vw;
  border-radius: 20px;
  // transition: .6s;
  animation: ${openModalAnimation} .3s linear;
  .modalContainer {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 45px;
      margin-bottom: 30px;
      color: coral;
    }
    span {
      color: coral;
    }
    ul {
      width: 80%;
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        p {
          flex: 1;
          text-align: center;
          padding: 10px 0;
        }
      }
    }
    button {
      font-size: 18px;
      color: coral;
    }
  }
`;

const SearchModalSubstrate = styled.section`
  position: fixed;
  z-index: 8888;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
`;

export {
  SearchModalStyled,
  SearchModalSubstrate,
  openModalAnimation
};