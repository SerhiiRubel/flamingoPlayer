import styled from 'styled-components';

const LoginFormStyled = styled.form`
  background-color: white;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  .inputGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    label {
      font-size: 20px;
      margin-bottom: 10px;
      text-transform: capitalize;
      color: coral;
    }
    input {
      font-size: 15px;
      margin-bottom: 40px;
      box-sizing: border-box;
      width: 300px;
      height: 30px;
      outline: none;
    }
    .error {
      position: absolute;
      bottom: 15px; 
      left: 0;
      width: 100%;
      font-size: 14px;
      background-color: coral;
      padding: 5px;
      box-sizing: border-box;
    }
  }
  button {
    display: block;
    width: 100%;
    max-width: 250px;
    box-sizing: border-box;
    padding: 15px 0;
    background-color: coral;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    &:disabled {
      opacity: 0.6;
      cursor: none;
    }
  }
`;

export default LoginFormStyled;