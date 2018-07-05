import styled from 'styled-components';

const HeaderStyled = styled.header`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 9999;
  background-color: rgba(0,0,0,0.3);
  min-height: 50px;
  padding: 0 15px;
  .nav {
    &__item {
      font-size: 20px;
      color: white;
      text-decoration: none;
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
`;

export default HeaderStyled;